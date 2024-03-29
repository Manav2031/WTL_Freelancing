import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
  getGigOnUserID 
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id",verifyToken, getGig);
router.get("/",verifyToken, getGigs);
router.get("/:userId",getGigOnUserID);

export default router;
