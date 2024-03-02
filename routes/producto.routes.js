import { Router } from "express";
import productoController from "../controllers/producto.controller.js";

const routerProducto= Router();

routerProducto.get("/",productoController.getProducto);
routerProducto.post("/",productoController.postProducto);


export default routerProducto;