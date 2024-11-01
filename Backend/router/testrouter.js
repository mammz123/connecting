const express=require("express")
const CreateContact = require("../controller/CreateContact")
const getContacts = require("../controller/getContact")

const GetContacts = require("../controller/getContact")
const getProductController = require("../controller/getContact")




const router = express.Router()


router.route('/create').post(CreateContact)
router.route('/get').get(getProductController)




module.exports=router