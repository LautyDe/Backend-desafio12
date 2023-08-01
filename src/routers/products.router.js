import { Router } from "express";
import { productsController } from "../controllers/products.controller.js";

const router = Router();

router.get("/");

router.get("/:pid");

router.post("/");

router.put("/:pid");

router.delete("/:pid");

router.delete("/");

export default router;
