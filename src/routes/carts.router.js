import { Router, request, response } from "express";
import ProductManager from '../productManager.js';

const router = Router();
const nuevoProductManager = new ProductManager("../products.json");

router.get("/carts", (request, response) => {
    response.json({
        message:"accediste a carts"
    })
})

export default router;