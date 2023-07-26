import { Router } from "express";
import { productsService } from "../../services/products.service.js";
import { chatService } from "../../services/chat.service.js";
import { cartsService } from "../../services/carts.service.js";

const router = Router();

//login
router.get("/", (req, res) => {
  res.render("login");
});

router.get("/loginError", (req, res) => {
  res.render("loginError");
});

//register
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/registerOk", (req, res) => {
  res.render("registerOk");
});

router.get("/registerError", (req, res) => {
  res.render("registerError");
});

//logout
router.get("/logout", (req, res) => {
  res.render("logout");
});

/* home */
router.get("/products", async (req, res) => {
  const products = await productsService.findAll();
  const userData = req.session;
  res.render("products", {
    style: "products.css",
    title: "Products",
    products: products,
    userData: userData,
  });
});

router.get("/realtimeproducts", async (req, res) => {
  const products = await productsService.findAll();
  res.render("realTimeProducts", {
    style: "realTimeProducts.css",
    title: "Real Time Products",
    products: products,
  });
});

router.get("/chat", async (req, res) => {
  const messages = await chatService.finAllMessages();
  res.render("chat", {
    style: "chat.css",
    title: "Chat",
    messages: messages,
  });
});

router.get("/carts", async (req, res) => {
  res.render("carts", {
    style: "carts.css",
    title: "Carts",
  });
});

router.get("/carts/:cid", async (req, res) => {
  const { cid } = req.params;
  const cart = await cartsService.findById(cid);
  const cartsProducts = cart.products;
  res.render("cartsId", {
    style: "cartsId.css",
    title: "CartsId",
    cartsProducts: cartsProducts,
  });
});

export default router;
