import express from "express";
import {
  addBookmark,
  deleteBookmark,
  getAllBookmarks,
  getBookmark,
  updateBookmark,
} from "../controllers/bookmark";
const router = express.Router();

router.get("/getBookmark", getBookmark);
router.get("/getAllBookmarks", getAllBookmarks);
router.post("/addBookmark", addBookmark);
router.put("/updateBookmark", updateBookmark);
router.delete("/deleteBookmark", deleteBookmark);

export default router;
