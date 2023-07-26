import { cartsService } from "../services/carts.service.js";

/* ok: 200
   created: 201
   no content: 204
   bad request: 400
   forbidden: 403
   not found: 404
   internal server error: 500
    */

class CartsController {
  async createCart(req, res) {
    try {
      const cart = await cartsService.createOne();
      res.status(201).json(cart);
    } catch (error) {
      res.json({ message: "Error", error });
    }
  }

  async getOneCart(req, res) {
    try {
      const { cid } = req.params;
      if (!cid) {
        return res.json({ message: "Missing data" });
      }
      const cart = await cartsService.findById(cid);
      !cart ? res.status(404).json(notFound) : res.status(200).json(cart);
    } catch (error) {
      res.json({ message: "Error", error });
    }
  }

  async addToCart(req, res) {
    try {
      const { cid, pid } = req.params;
      if (!cid || !pid) {
        return res.json({ message: "Missing data" });
      }
      const cart = await cartsService.addToCart(cid, pid);
      !cart ? res.status(404).json(notFound) : res.status(200).json(cart);
    } catch (error) {
      res.json({ message: "Error", error });
    }
  }

  async deleteAllProducts(req, res) {
    try {
      const { cid } = req.params;
      if (!cid) {
        return res.json({ message: "Missing data" });
      }
      const updatedCart = await cartsService.deleteAllProducts(cid);
      !cart
        ? res.status(404).json(notFound)
        : res.status(200).json(updatedCart);
    } catch (error) {
      res.json({ message: "Error", error });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { cid, pid } = req.params;
      if (!cid || !pid) {
        return res.json({ message: "Missing data" });
      }
      const cart = await cartsService.deleteProduct(cid, pid);
      !cart ? res.status(404).json(notFound) : res.status(200).json(cart);
    } catch (error) {
      res.json({ message: "Error", error });
    }
  }
}

export const cartsController = new CartsController();
