import { Router } from "express";
import ProductManager from '../productManager.js';

const router = Router();
const nuevoProductManager = new ProductManager("../products.json");

router.get("/products", async (request, response) => {
    const { limit } = request.query;
    const limitNumber = Number(limit);
    const products = await nuevoProductManager.getProducts()
    console.log("ingreso a productos")

    try {
        if (limit) {
            response.send(products.splice(0, limitNumber))
        } else {
            response.json(products);
        }    
    } catch {
        console.log(error)
    }

});


router.get("/products/:id", async (request, response) => {
    const { id } = request.params;
    const numberId = Number(id)

    const product = await nuevoProductManager.getProductById(numberId)

    if (product) {
        return response.json(product)
    } else {
        return response.send("ERROR: producto no encontrado.")
    }

})

export default router;