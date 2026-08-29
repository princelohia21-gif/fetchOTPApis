const phone = 7217892124;

const check = async () => {
  const res = await fetch("https://api.recharge24.in/auth/sendotp", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://app.recharge24.in/",
    },
    body: '{"hash":"U2FsdGVkX1/VQbKN4SNffIbZqLwvCCoVNPwHSOlW9og="}',
    method: "POST",
  });
  await fetch("https://api.recharge24.in/info/number", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://app.recharge24.in/",
    },
    body: '{"number":123}',
    method: "POST",
  });
  const data = await res.json();
  console.log(res);
};

async function startLoop() {
  await check(); // Wait for the function to finish completely

  // Schedule the next run in 1 minute
  setTimeout(startLoop, 1000);
}

// Start the loop
startLoop();
