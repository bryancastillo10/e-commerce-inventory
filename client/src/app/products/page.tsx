"use client";
import Header from "@/app/(components)/Header";
import Rating from "@/app/(components)/Rating";
import AddProductModal from "@/app/products/AddProductModal";
import { useCreateProductsMutation, useGetProductsQuery } from "@/state/api";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export type ProductFormData = {
    name:string;
    price:number;
    stockQuantity: number;
    rating:number;
}


const Products = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const {data: products, isLoading, isError} = useGetProductsQuery(searchTerm);
    const [createProducts] = useCreateProductsMutation();

    const handleAddProduct = async (productData: ProductFormData) => {
        await createProducts(productData);
    }

    if (isLoading){
        return <div className="py-4">Loading ...</div>
    }

    if (isError || !products){
        return (
            <div className="text-center text-rose-500">
                Something went wrong. Failed to fetch the products data.
            </div>
        )
      }

    return (
    <div className="mx-auto pb-5 w-full">
        {/* Search Bar */}
        <div className="mb-6">
            <div className="flex items-center border-2 rounded-md border-gray-200">
                <SearchIcon className="size-5 text-gray-200 mt-2" />
                <input className="w-full py-2 px-4 rounded-md bg-white" placeholder="Search Products..."
                    value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {/* Header Bar */}
        <div className="flex justify-between mb-6">
            <Header title="Products"/>
            <button 
            onClick={handleOpenModal}
            className="flex items-center bg-sky-500 hover:bg-sky-800 text-gray-200 font-bold py-2 px-4 rounded-2xl">
                <PlusCircleIcon className="size-5 mr-2 !text-gray-200"/> Add Products
            </button>
        </div>

        {/* Products Section Body  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
            {isLoading ? (<div>Products Loading ...</div>):
                products.map((prod)=>(
                    <div key={prod.productId} className="border shadow-md rounded-md max-w-full mx-auto w-full p-4">
                        <div className="flex flex-col items-center">
                            image
                            <h3 className="text-lg text-gray-800 font-semibold">{prod.name}</h3>
                            <p className="text-gray-800"> ${prod.price.toFixed(2)}</p>
                            <div className="text-sm text-gray-600">
                                Stock : {prod.stockQuantity}
                            </div>
                            {prod.rating && (
                                <div className="flex items-center mt-2">
                                    <Rating rating={prod.rating}/>
                                </div>
                            )}
                        </div>
                    </div>
                ))};
        </div>

        {/* Modal */}
        <AddProductModal isOpen={isModalOpen} onClose={handleOpenModal} onAdd={handleAddProduct} />
    </div>
  )
}

export default Products
