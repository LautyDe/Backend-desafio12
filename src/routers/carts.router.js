import { Router } from "express";
import { cartsController } from "../controllers/carts.controller.js";

const router = Router();
const notFound = { error: "Cart not found" };

router.post("/", cartsController.createCart);

router.get("/:cid", cartsController.getOneCart);

router.post("/:cid/product/:pid", cartsController.addToCart);

router.delete("/:cid/product/:pid", cartsController.deleteProduct);

router.delete("/:cid", cartsController.deleteAllProducts);

export default router;
