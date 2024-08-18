"use client";
import {FormEvent, useState } from "react";
import { v4 } from "uuid";
import { ProductFormData } from "./page";
import Header from "@/app/(components)/Header";

interface AddProductModalsProps {
    isOpen:boolean;
    onClose: () => void;
    onAdd: (newProduct: ProductFormData) => void;
}

const AddProductModal = ({isOpen, onClose, onAdd}:AddProductModalsProps) => {
    const [newProduct, setNewProduct] = useState({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity:0,
        rating:0
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(newProduct);
        onClose();
    }

    if(!isOpen) return null;
    
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-xl bg-white">
        <Header title="Add Some Product"/>
        <form onSubmit={handleSubmit}>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" name="name" placeholder="Name"/>
        </form>
      </div>
    </div>
  )
}

export default AddProductModal;
