import {Router} from "express";
import {createProducts,getProducts} from "../controllers/products.controller";

const router = Router();

router.post("/", createProducts);
router.get("/", getProducts);

export default router;
