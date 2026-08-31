const express = require("express");
const path = require("path");
const {
  setPhone,
  fetchKhatabook,
  fetchZeeott,
  fetchDistrict,
  fetchAllen,
  fetchHungama,
  fetchShoopySignin,
  fetchPayme,
  fetchAstrosage,
  fetchVyapar,
  fetchShoopy,
  fetchTruly,
  fetchZest,
  fetchSS,
  fetchSuperProfile,
  fetchShoopyWhatsapp,
  fetchProvilac,
  fetchNetaSampark,
  fetchSnapdeal,
  fetchDrlal,
} = require("./apiServices.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let clients = [];
let isRunning = false; // Track if the loop is running
let loopTimeout = null; // Store the timeout so we can cancel it

function sendUpdate(message, type = "info") {
  console.log(message);
  clients.forEach((client) =>
    client.res.write(`data: ${JSON.stringify({ message, type })}\n\n`),
  );
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runStaggered() {
  sendUpdate("Starting staggered fetch operations (3-second delay each)...");

  const fetchFunctions = [
    fetchKhatabook,
    fetchZeeott,
    fetchDistrict,
    fetchAllen,
    fetchHungama,
    fetchShoopySignin,
    fetchPayme,
    fetchAstrosage,
    fetchVyapar,
    fetchShoopy,
    fetchTruly,
    fetchZest,
    fetchSS,
    fetchSuperProfile,
    fetchShoopyWhatsapp,
    fetchProvilac,
    fetchNetaSampark,
    fetchSnapdeal,
    fetchDrlal,
  ];

  const results = await Promise.allSettled(
    fetchFunctions.map(async (func, index) => {
      // 1. Check if user pressed stop before this delay
      if (!isRunning) return Promise.reject("Stopped by user before execution");

      await delay(index * 3000);

      // 2. Check if user pressed stop during this delay
      if (!isRunning) return Promise.reject("Stopped by user during delay");

      // Get the name of the function (e.g., "fetchKhatabook") for clear logging
      const funcName = func.name || `Task ${index + 1}`;
      sendUpdate(
        `Executing ${funcName} (${index + 1}/${fetchFunctions.length})...`,
      );

      try {
        // Execute the function
        const response = await func();

        // Extract status code (defaults to 200 if the function succeeded but didn't return a status field)
        const statusCode = response?.status || 200;

        // Determine the color/type for the UI based on the status code
        let msgType = "success";
        if (statusCode === 429) msgType = "warning";
        else if (statusCode >= 400) msgType = "error";

        // Stream the result to the UI
        sendUpdate(`${funcName} completed. Status: ${statusCode}`, msgType);

        return { statusCode, data: response };
      } catch (error) {
        // If using Axios, 403/429 will jump to this catch block.
        // We extract the status code from the error object safely.
        const statusCode = error.response?.status || error.status || "Unknown";

        let msgType = statusCode === 429 ? "warning" : "error";

        // Stream the error result to the UI
        sendUpdate(
          `${funcName} failed. Status: ${statusCode} | ${error.message}`,
          msgType,
        );

        throw error; // Keep it as 'rejected' for Promise.allSettled
      }
    }),
  );

  // Only show the final summary if we didn't cancel mid-way
  if (isRunning) {
    const successful = results.filter(
      (result) => result.status === "fulfilled",
    );
    const failed = results.filter((result) => result.status === "rejected");

    sendUpdate("Execution complete!", "info");
    sendUpdate(`✅ Succeeded: ${successful.length}`, "success");
    sendUpdate(
      `❌ Failed: ${failed.length}`,
      failed.length > 0 ? "error" : "success",
    );
  }
}

async function startLoop() {
  if (!isRunning) return; // Exit if stopped

  await runStaggered();

  if (!isRunning) return; // Exit if stopped during runStaggered

  sendUpdate("Waiting 60 seconds before next run...", "warning");
  loopTimeout = setTimeout(startLoop, 60000);
}

// --- NEW API ENDPOINTS FOR UI CONTROLS ---

app.post("/start", (req, res) => {
  if (isRunning) {
    return res.json({ status: "already_running" });
  }
  isRunning = true;
  sendUpdate("▶️ Task loop started by user.", "success");
  startLoop();
  res.json({ status: "started" });
});

app.post("/stop", (req, res) => {
  isRunning = false;
  if (loopTimeout) {
    clearTimeout(loopTimeout); // Cancel the 60-second wait timer
  }
  sendUpdate("⏹️ Task loop stopped by user.", "error");
  res.json({ status: "stopped" });
});

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  clients.push({ id: Date.now(), res });

  req.on("close", () => {
    clients = clients.filter((client) => client.res !== res);
  });
});

app.post("/update-phone", (req, res) => {
  const { phoneId } = req.body;

  if (!phoneId) {
    return res.status(400).json({ error: "No phone ID provided" });
  }

  // Call the function from apiServices.js
  setPhone(phoneId);

  // Broadcast the update to the terminal UI
  sendUpdate(`📱 Phone ID updated to: ${phoneId}`, "info");

  res.json({ success: true, phoneId });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  // Notice we removed the auto-start here so the UI can trigger it!
});
