import { productsService } from "../services/products.service.js";

/* ok: 200
   created: 201
   no content: 204
   bad request: 400
   forbidden: 403
   not found: 404
   internal server error: 500
    */

const notFound = { error: "Product not found" };

class ProductsController {
  async getAll(req, res) {
    const { limit, page, sort, query } = req.query;
    const products = await productsService.getAllPaginated(
      limit,
      page,
      sort,
      query
    );

    products.docs = await products.docs.map(product => {
      const {
        _id,
        title,
        description,
        price,
        code,
        stock,
        category,
        thumbnail,
      } = product;
      return {
        id: _id,
        title,
        description,
        price,
        code,
        stock,
        category,
        thumbnail,
      };
    });

    const info = {
      totalPages: products.totalPages,
      prevPage: products.prevPage,
      nextPage: products.nextPage,
      page: products.page,
      hasPrevPage: products.hasPrevPage,
      hasNextPage: products.hasNextPage,
      prevLink: products.hasPrevPage
        ? `http://localhost:8080/api/products?page=${products.prevPage}&?limit=${limit}`
        : null,
      nextLink: products.hasNextPage
        ? `http://localhost:8080/api/products?page=${products.nextPage}&?limit=${limit}`
        : null,
    };
    if (info) {
      res.status(200).send({ status: "success", payload: products.docs, info });
    } else {
      res.status(500).send({
        status: "error",
        error: "Error obteniendo todos los productos",
      });
    }
  }

  async getProductById(req, res) {
    const { pid } = req.params;
    const product = await productsService.findById(pid);
    !product ? res.status(404).json(notFound) : res.status(200).json(product);
  }

  async addProduct(req, res) {
    const product = req.body;
    const addedProduct = await productsService.addProduct(product);
    !addedProduct
      ? res.status(400).json({ error: "No se pudo agregar el producto" })
      : res.status(201).json(product);
  }

  async updateProduct(req, res) {
    const { pid } = req.params;
    const modification = req.body;
    const modifiedProduct = await productsService.updateProduct(
      pid,
      modification
    );
    !modifiedProduct
      ? res.status(400).json({ error: `No se pudo modificar el producto` })
      : res.status(200).json(modifiedProduct);
  }

  async deleteProductById(req, res) {
    const { pid } = req.params;
    const removedProduct = await productsService.deleteById(parseInt(pid));
    !removedProduct
      ? res.status(404).json(notFound)
      : res.status(200).json(removedProduct);
  }

  async deleteAllProducts(req, res) {
    const removedProducts = await productsService.deleteAll();
    !removedProducts
      ? res.status(404).json({ error: "No se pudieron eliminar los productos" })
      : res.status(200).json(removedProducts);
  }
}

export const productsController = new ProductsController();
