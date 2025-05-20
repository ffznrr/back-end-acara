import express from "express";
import dummyController from "../controllers/dummy.controllers";
import authCotnroller from "../controllers/auth.controllers";

const router = express.Router();
router.get("/dummy", dummyController.dummy);
router.post("/auth/register", authCotnroller.register);

export default router;
