import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Heart, Share2, ShoppingCart, ShoppingBagIcon } from 'lucide-react';

function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const location = useLocation();
    const productId = location.state?.id;

    useEffect(() => {
        if (productId) {
            fetch(`https://dummyjson.com/products/${productId}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduct(data);
                    console.log(data);
                    // Fetch related products based on category
                    fetch(`https://dummyjson.com/products/category/${data.category}`)
                        .then((res) => res.json())
                        .then((relatedData) => {
                            setRelatedProducts(relatedData.products.filter(p => p.id !== productId)); // Exclude the current product
                        });
                });
        }
    }, [productId]);

    if (!product) {
        return <div className="flex justify-center items-center min-h-screen bg-gray-100">Loading...</div>; // Loading state
    }

    return (
        <div className="items-center bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col md:flex-row p-6">
                <div className="md:w-1/2 grid grid-cols-1 p-3">
                    <div>
                        <img src={product.images[0]} alt={product.title} className="w-full h-64 object-contain rounded-md mb-4" />
                    </div>
                    <div className="grid grid-cols-2 space-x-4 mb-4">
                        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center">
                            <ShoppingCart className="mr-2" /> Add to Cart
                        </button>
                        <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 flex items-center">
                            <ShoppingBagIcon className="mr-2" /> Buy Now
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-end mb-4">
                        <div className="flex space-x-4">
                            <button className="text-gray-500 hover:text-gray-700">
                                <Heart size={24} />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                                <Share2 size={24} />
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                        <p className="text-lg text-gray-700 mb-2"><span className="font-bold">Price:</span> <span className="text-green-600 font-bold">${product.price}</span></p>
                        <p className="mb-2"><span className="font-bold">Rating:</span> {product.rating} ★</p>
                        <p className="mb-2"><span className="font-bold">Discount:</span> {product.discountPercentage}%</p>
                        <p className="mb-2"><span className="font-bold">Stock:</span> {product.stock} available</p>
                        <p className="mb-2"><span className="font-bold">Category:</span> {product.category}</p>
                        <p className="mb-2"><span className="font-bold">Availability:</span> {product.availabilityStatus}</p>
                        <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                        <p className="mb-4"><span className="font-bold">Description:</span> {product.description}</p>
                    </div>
                </div>                   
            </div>

            <hr className="mb-2"/>
            <div className="grid grid-cols-2">
                <h3 className="text-xl font-semibold mb-2 underline">Product Details</h3>
                <p><span className="font-bold">Brand:</span> {product.brand}</p>
                <p><span class Name="font-bold">Dimensions:</span> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
                <p><span className="font-bold">Return Policy:</span> {product.returnPolicy}</p>
                <p><span className="font-bold">Warranty:</span> {product.warrantyInformation}</p>
                <p><span className="font-bold">Shipping Information:</span> {product.shippingInformation}</p>
                <p><span className="font-bold">Minimum Order Quantity:</span> {product.minimumOrderQuantity}</p>
            </div>
            <div className="mt-2">
                <h3 className="text-xl font-semibold mb-2 underline">Customer Reviews</h3>
                {product.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 py-2 grid grid-cols-2 ">
                        <p className="font-bold">{review.reviewerName} <span className="text-yellow-500">({review.rating}★)</span></p>
                        <p>{review.comment}</p>
                        <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 underline">Related Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="border rounded-lg p-4 shadow-md">
                            <img src={relatedProduct.images[0]} alt={relatedProduct.title} className="w-full h-72 object-contain mb-2" />
                            <h4 className="text-lg font-bold">{relatedProduct.title}</h4>
                            <p className="text-gray-700"><span className="font-bold">Price:</span> ${relatedProduct.price}</p>
                            <p className="text-gray-700"><span className="font-bold">Discount:</span>{relatedProduct.discountPercentage}%</p>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mt-2">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;