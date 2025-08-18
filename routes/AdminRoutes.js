const express = require("express");
const router = express.Router();
const Admin = require("../controller/admin");



router.get("/jamal",(req,res)=>{
    res.json("Jamal success")
})
router.post("/new" ,  Admin.craeteAdmin)
router.get("/" ,  Admin.getAdmin)
router.get("/:id" ,  Admin.AdminById)
router.delete("/:id" ,  Admin.deleteAdmin)
router.put("/:id" ,  Admin.updateAdmin)

module.exports = router