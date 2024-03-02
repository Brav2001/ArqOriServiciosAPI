import { Router } from "express";

const routerProducto= Router();

routerProducto.get("",(req,res)=>{
    res.status(200).json({
            succes:true
        })
});


export default routerProducto;