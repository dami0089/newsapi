import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/top-headlinesRoutes.js";
import routerSearch from "./routes/searchRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();



const corsOptions = {
  origin: true,
};

app.use(cors());

// Routing
app.use("/api/top-headlines", router);
app.use("/api/search", routerSearch);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
