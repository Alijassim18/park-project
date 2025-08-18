const express = require("express");
const router = express.Router();
const Customer = require("../controller/Customer");




router.post("/new" ,  Customer.createCustomer)
router.get("/" ,  Customer.getCustomer)
router.get("/:id" ,  Customer.CustomerById)
router.delete("/:id" ,  Customer.deleteCustomer)
router.put("/:id" ,  Customer.updateCustomer)

module.exports = router