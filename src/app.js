import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js'

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (request, response) => {
    response.send("<h1> Bienvenidos al servidor.</h1>");
})

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(PORT, () => console.log("Servidor en el puerto 8080 esta activo."))