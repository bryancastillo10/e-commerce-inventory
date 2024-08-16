import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProducts = async (
    req:Request,
    res: Response
):Promise<void> => {
    try {
        const {productId, name, price, rating, stockQuantity} = req.body;
        const product = await prisma.products.create({
            data:{
                productId,
                name,
                price,
                rating,
                stockQuantity,
            },
        });
        res.status(201).json(product);
    }
    catch(error){
        res
            .status(500)
            .json({message:"Error at createProducts controller"});
    }
}

export const getProducts = async (
    req:Request,
    res: Response
):Promise<void> => {

}