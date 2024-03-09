import { Router } from "express";
import productoController from "../controllers/producto.controller.js";

const routerProducto= Router();

routerProducto.get("/",productoController.getProducto);
routerProducto.get("/:id",productoController.getProductoUnico);
routerProducto.post("/",productoController.postProducto);
routerProducto.put("/:id", productoController.updateProducto);


export default routerProducto;