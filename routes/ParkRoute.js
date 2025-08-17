const express = require("express");
const router = express.Router();
const Park = require("../controller/park");




router.post("/new" ,  Park.createPark)
router.get("/" ,  Park.getPark)
router.get("/:id" ,  Park.getPark)
router.delete("/:id" ,  Park.deletePark)
router.put("/:id" ,  Park.updatePark)

module.exports = router