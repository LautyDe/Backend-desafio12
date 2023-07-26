import { cartManager } from "../db/DAOs/mongoDAOs/cartManagerMongo.js";

class CartsService {
  async findById(id) {
    try {
      const response = await cartManager.getById(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  async createOne() {
    try {
      const response = await cartManager.createCart();
      return response;
    } catch (error) {
      return error;
    }
  }

  async addToCart(cid, pid) {
    try {
      const response = await cartManager.addToCart(cid, pid);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteProduct(cid, pid) {
    try {
      const response = await cartManager.deleteProduct(cid, pid);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteAllProducts(cid) {
    try {
      const response = await cartManager.deleteAllProducts(cid);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const cartsService = new CartsService();
