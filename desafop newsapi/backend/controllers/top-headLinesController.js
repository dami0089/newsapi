import http from "http";

const topHeadlines = async (req, res) => {
  const api = process.env.apiKey;
  const pais = req.query.country;
  console.log(pais);

  const options = {
    hostname: "newsapi.org",
    path: `/v2/top-headlines?country=${pais}&apiKey=${api}`,
    method: "GET",
    headers: {
      "User-Agent": "MiAplicacion/1.0",
    },
  };

  console.log(options);

  const reqApi = http.request(options, (resApi) => {
    let data = "";

    resApi.on("data", (chunk) => {
      data += chunk;
    });

    resApi.on("end", () => {
      const jsonData = JSON.parse(data);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(jsonData));
    });
  });

  reqApi.on("error", (error) => {
    console.error(error);
    res.statusCode = 500;
    res.end("Error interno del servidor");
  });

  reqApi.end();
};

export { topHeadlines };
