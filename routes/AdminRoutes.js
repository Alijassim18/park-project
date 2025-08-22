const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
  AdminById
} = require("../controller/admin");

router.post("/create", createAdmin);        
router.get("/", getAdmin);                 
router.get("/:id", AdminById);             
router.put("/:id", updateAdmin);          
router.delete("/:id", deleteAdmin);       

module.exports = router;
