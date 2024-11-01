const productModel = require("../controller/contactSchema")

const getProductController = async(req,res)=>{
    try{
        const allusers = await productModel.find().sort({ createdAt : -1 })

        res.json({
            message : "All users",
            success : true,
            error : false,
            data : allusers
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports = getProductController