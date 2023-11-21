import { Router, request, response } from "express";
import ProductManager from "../productManager.js" ;
import { Product } from "../productManager.js";

const router = Router();
const nuevoProductManager = new ProductManager("../products.json");

router.get("/", async (request, response) => {
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


router.get("/:id", async (request, response) => {
    const { id } = request.params;
    const numberId = Number(id)

    const product = await nuevoProductManager.getProductById(numberId)

    if (product) {
        return response.json(product)
    } else {
        return response.send("ERROR: producto no encontrado.")
    }

})

router.post("/", async (request, response) => {
    const { title, description, price, thumbnail, code, stock, status, category } = request.body;

    const product = new Product (title, description, price, thumbnail, code, stock, status, category);

    try {
        await nuevoProductManager.addProduct(product)
        response.json({
            message: "Producto creado.",
            product,
        })
    } catch (error) {
        error: error.message
    }

})

router.delete("/:id", async (request, response) => {
    
})

export default router;