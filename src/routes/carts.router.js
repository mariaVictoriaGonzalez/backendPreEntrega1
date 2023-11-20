import { Router, request, response } from "express";
import ProductManager from '../productManager.js';

const router = Router();
const nuevoProductManager = new ProductManager("../products.json");

router.get("/", (request, response) => {
    try {
        // Your existing route logic
        response.json({
            message: "You accessed the carts route."
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;