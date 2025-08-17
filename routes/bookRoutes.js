const express = require("express");
const router = express.Router();
const book = require("../controller/book");




router.post("/new" ,  book.createbook)
router.get("/" ,  book.getbook)
router.get("/:id" ,  book.bookById)
router.delete("/:id" ,  book.deletebook)
router.put("/:id" ,  book.updatebook)

module.exports = router