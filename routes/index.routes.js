import { Router } from "express";
import routerProducto from "./producto.routes.js";

const route= Router();

route.use("/producto", routerProducto)

export default route;