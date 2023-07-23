import { productManager } from "../db/DAOs/mongoDAOs/productManagerMongo.js";

class ProductsService {
  async addProduct(product) {
    try {
      const response = await productManager.addProduct(product);
      return response;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const response = await productManager.getAll();
      return response;
    } catch (error) {
      return error;
    }
  }

  async getAllPaginated(limit, page, sort, query) {
    try {
      const response = await productManager.getAllPaginated(
        limit,
        page,
        sort,
        query
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  async findById(id) {
    try {
      const response = await productManager.getById(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateProduct(id, product) {
    try {
      const response = await productManager.updateProduct(id, product);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteById(id) {
    try {
      const response = await productManager.deleteById(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  async aggregationFunc(limit, page, sort, query) {
    try {
      const response = await productManager.aggregationFunc(
        limit,
        page,
        sort,
        query
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteAll() {
    try {
      const response = await productManager.deleteAll();
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const productsService = new ProductsService();
