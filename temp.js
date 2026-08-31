const phone = "7812"; // Using string format for phone numbers to prevent precision loss

const checkfun = async () => {
  try {
    const res = await fetch(
      "https://seller-zeus.housing.com/api/support/send-otp?api_name=login_send_otp&platform=desktop&source_name=WEB",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          app_name: "desktop_web_seller",
          "content-type": "application/json",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-csrf-token-v2":
            "37fb79421b17d37b888111bb8f872a87ed82d877cf6b6639ddd18a004e3e610b",
          cookie:
            "traffic=sourcemedium%3Dgoogle%20%2F%20organic%3B; uuid=id%3Dbe09baddd732df8fa9cf124b5c2194bb%3B; cuid=a3b24622-6616-4735-ab9c-8bea99a3eee5; hasCuid=true; sellerExperiments=high_red%3Dtrue%3Bhp_10701%3Dtrue%3Bhp_10744%3Dv1%3B; ak_bmsc=F1839912C6AB11A5805306423E4FA987~000000000000000000000000000000~YAAQacrOF/wCjVSgAQAArYlfVwGUz+2y5PpSkdU391sprVHv9Um5ntEFazmVkP5L/HnFS0I+DkdgG5lpHtCjWgMLSskgB6lD7Soa3PuwnVipvTLLeSR1bnMGWikk3PKWo/YUE6kqeEwqLbeZ3+t0NOu1pNq95mTBqoKcmzgHITz0i2Bs2hTBRmZktZAvH16k85nu057ox2Ebr2BMlACGIlv33G4tMagvQANcXmZfMSFuiPtuHjvF5G8dTIfALlOVsEsIa6nEYYbvyTLiUj+xWuBhZnklLmz41Yac8EYMkV3djDAB65vb15o/kCVhDhf2cKMU7XLk74aBme+XhE3uYxIPYo4MbhVTQwyNIOAOiNGJFDhZRpU4OOhPSitWy8UCFwa8G3UDbEyaWLhgb6qL/u6mGA==; bm_sz=D3A3D773412652FB27384BA7CB12B4BA~YAAQHqD+zRa26TSgAQAAeJZfVwGt8/hyewRgVccP6aZvU8JzclVF7Ahyc0bF83RV3x6H+svVf/Uq4NpBWkG5pJ2gu3SbVm51tUHIpJBLy8RvfxLYihHk9vvkJ9v7mUXhwWh5YtKyrgeRIOFy55jP4CvFYbOzTT5Fx4vnb9LewDfEFnCr/+wHALR0YI9mfEdpl3A0OvIcn0J7NFfuINjV1PEeIpS83p0fChdXcxjbojKb59Sg4vpEOjJQmEBJVL5E3OpPKuYA82kOP5vWMTK6FaI/pepyrbS9Olabjnh3aXSiC5Aru+xDZM/DObeAokSZ9odzJjNmg2IF6n8JrAwjt4c/BMytAQfaic/tdMCGDn7Q2sD/NF7FTcZvZnGMJuqnH1BkNOEp8c20voJ37zfNOf8+MsvbN3XuDg==~3748658~3551539; bm_so=88046CBEF97FCC15DBD7F67106486281A16E1A2590ACF904DB21546D7998413D~YAAQHqD+zR+26TSgAQAAO5hfVwjYMBww1Dl24OX9uZSAfvX7orQlVdE4VYrhbMMjNUhfyneY4ixSuepv/bg+kIcskpix2zR8EAZlF3IX/SIwFKu6+WgdsY1uqjYK08m2J5p3n1t5pL2WemL911R3CLavcSgbrusLDKyFyhbnMqJ/VVL1ATck5GBbZw5ntsZJhSKD1Xsv6uehfsZLRKbLiUVzP+jTOe1ha5kgFfngimorf1FKJlepO1UL5Y1VVU4ooVNSL3MCDAIXLw9U7JJk0SVVIu0YHjpvHT5AoGNaXwDlWfaKqHdtjWp6bGdFRgVaAoQMpOq7BNBGcDD4cMdfS1p8CPS0APBEezl4ca3qo1hfovGNsBufF1n+9lyk9S7VG85AuDiMXHNPZuppJ7/k0j+u8ChmZQzm+wg5PxAqB9TKDQg6hZDiHzHKJFFnE2Px6oZsXDDdYSmJIcbVJ5jjxn4PWQ==; _gid=GA1.2.1748948624.1788172277; _gcl_au=1.1.1714148819.1788172279; _ga=GA1.1.1498897187.1788172277; _cs_ex=1684417185; _cs_c=0; cto_bundle=6X4V3F8lMkZVVERaaCUyQkJoWWQ4UGJPcGJYJTJCU000UFNaaEVpUlZCZG5YJTJGZ2twYTgwcjBtTmk0UDYlMkJ3Tzd4YnFucmZzJTJGNHV2aEUwdU52eldyc0JibVp4RThHenJobzN3MEJyaHozeTNNbVNFUDFsbDcySkRGNXVYa21SeXk4MFlkU1RmZGNYaXY4MFo5V2pZbkhPZHlNRms0cm5ybVElM0QlM0Q; _abck=EAE763C84724A9A771781BD81E5738F5~0~YAAQHqD+zYG36TSgAQAAA91fVxA2XUfTSPwlSX30hBq/pPJfpynKH0UZ1+7U1PJRh9WCaaeRKr+XcJwpsTz8arKWTTfqgXLGcbMc9RL2uZgSP6iyNCKY2hwWGjcFtClpXkXlA826rE9AuK+tBnJPbnepMR6LmgtyM/tVlU2EDd3BrtB+CNSTT1yu5u9Dey8F0l4sJeDsscNUSlRqyFdPMzMYZJBd3YYhpmR9Vh9NB9rwzGZ/x4wUOzq9D8LnmvGb0/o6UgyDzElCsYi0aKFUZ00RZ0UanOTLTLnYi/bEoP/IDohB8h4RXD5XBD51EYAc66INqbqW/DzWo4qyTOgPTBkt7m01d0p7xGi3GsvLZFJcz9ib0TQLIoJYtjZozUGDypM+oyDh8+bsqZ+2b2DkFxWO/UN8DaNDl6+iHB4OMEItXDvxsv+ZcgUp8SrCuYrj17Kh95qOQt03QWI2GkbhnFQRl6Edn4Ao8janmBt38aiVUzBhNLwvU2Qm0RM5fTzUcrXZutV2qcURvJKQ+1N7VMP92BN5mUa+WbGSB47Rr7YCTkpBDR85qUIhXFLNbUzs5mY4jE1mP6eY9PzRnt2fDJXTnL1XVxlcAuMunENX1tEubODE/PaNJNb/Q/FrkLaff3E/DCP/wPI/AO5QICUhLxmV0vUr2nT5sGjUx441K0XJP7GtuZkzJWE=~-1~-1~1788175895~AAQAAAAG%2f%2f%2f%2f%2f4t27zzlLSTxvcQJFJ90SWnGHoAaS2MFmEjiyFd0%2fjNgCOhflmizdH8cQ4gq+xEEEolYUo4ISK4DhwBx9bYv1ic+uJSUjYv%2fHioE~-1; moe_uuid=f43087c8-0a1d-41f2-b482-b93e416cfd72; bm_s=YAAQHqD+zYy46TSgAQAANyhgVwbo1VI2IlsqqZLGdsRr2csgMhHFBakYmaXT6b8sM3YxoAtWym1LdHxx4cIeThQJsWjv3vLeq7oxH1K79M7fw48dnvJsy7baUJflQTu1xBoC8EeP6XlrC6CDKarlj3DWpfWomF+qDSgIwQFv7XaJRZUUlvnR1po2AuwUL33QiJ9Fp/yrnmEfwa98e7SLsEUAxIs3DpIF0uFfXN3R7HHbC4fkJ0zSMgylpFsoP3g+oEnU3pvuVJWsvE6Tv1Fzy7NwWGQvNyaSSNS/+nYNC2sE+pm7kjCgDdlrilUJpN4LE0NLF5G8eF7Safr1O2KR64NFK2TcCOPriWcYg/lIpG1KudLOhUxIEaLrMabhMMTvwDHyigiE2DwqctJwxk7J8RsMPzI1mcoXvMY5zqcWasXOoG4lCKXQIVHm0IEKcSXW/oIP4/fuEEuYog6xUQX6cWhJgxcIgJJFKi7S9s2yVcxjO0mpYBr5WO/7GcvdbpSoiQWVfFy++4Tm6Kht+ThJzCJgJ1TYaP+CkFNvJDf8Dx0J0ylcHFClF8jtjGgfIJydU+yc9ZAokvvsIG6LoRAD7NPBwpZ6fj5LY3LMhGPs+C9V415nRATQoCC4rtlpYo6mALOwlHeWMQ6VaKQ0CmXmvFGpmI5tELB5sSZl6pycCi7TTJYHoOhoU5MrBeP/W/MYth7sFZTVTdid+75yT8hCYxJ47fPKusvMV7pzfTar4TbUs5pHE+mkLqomU3DwqYjbo/e2gDIX1bYAg9ZrIfqzPxoPE/r8QBOJL4P1mVF1B5eg6hI1hNzBqxJai1wS1Yzk8/HKq1CQ9EJgSOlp9hhXnlm8scJkARX1CUdM4kXxFrM3CFWOUnT8N7qkgTm8kBJtw27iQcbOa9SbqrijRDkInUhFTHLXPL/E18VQsZjNPVZyjLU04xPZC/holS6eitzbCg==; bm_sv=0F21CC2647B98296F70D64791A93C081~YAAQHqD+zYO96TSgAQAAnqxiVwHDi5w7RgTElkqB5AlQlXaxpIbdJ5X+z5/sb6ElcxOpHYHPA95wERSiA8xgrNsOXV764/dNh3FmU2AGsXQyJGUmfYdefS2ccdtwLgnsE+LZR/VKyoejb9ULJxwGotRG01QIna+PAeidQaNOwfOj+if28xkje67FCjWW3DBibTjPeUOTlhmmsX9GkWi3rdgRv3mFhDYeGHzeij94ATHJo1PIYxyLOWZp+mcYzjzAqVI=~1; _gat=1; _ga_Y22XRX1VJR=GS2.1.s1788172278$o1$g1$t1788172479$j60$l0$h0",
          Referer: "https://seller.housing.com/",
        },
        body: '{"phone":"7011907812","country_url_name":"in","ga_id":"GA1.2.1748948624.1788172277"}',
        method: "POST",
      },
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Request failed:", error);
  }
};

async function main() {
  await checkfun();
}

main();
