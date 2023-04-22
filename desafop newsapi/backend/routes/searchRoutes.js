import express from "express";

const routerSearch = express.Router();

import { search } from "../controllers/searchController.js";

//Llama al endpoint que queremos
routerSearch.get("/", search);

export default routerSearch;
