const express = require("express");
const router = express.Router();
const Company = require("../controller/Companies");




router.post("/new" ,  Company.createCompany)
router.get("/" ,  Company.getCompany)
router.get("/:id" ,  Company.CompanyById)
router.delete("/:id" ,  Company.deleteCompany)
router.put("/:id" ,  Company.updateCompany)

module.exports = router