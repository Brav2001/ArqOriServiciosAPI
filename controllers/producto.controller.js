export const getProducto = (req,res)=>{
    res.status(200).json({msg:"esto es GET"})
}
export const postProducto = (req,res)=>{
    res.status(200).json({msg:"esto es POST"})
}

export default {
    getProducto,
    postProducto
}