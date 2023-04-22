import http from "http";

const search = async (req, res) => {
  const api = process.env.apiKey;
  
  let busqueda = req.query.q;
busqueda = busqueda.replace(/ /g, '%20');
  const from = req.query.from;
  const to = req.query.to;

  const options = {
    hostname: "newsapi.org",
    path: `/v2/everything?q=${busqueda}&from=${from}&to=${to}&pageSize=10&apiKey=${api}`,
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

export { search };
