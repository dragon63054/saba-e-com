import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CartPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state?.cart || []; // Get cart from navigation state

    const [cartItems, setCartItems] = useState(cart); // Local state for cart items

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        alert(`Product with ID ${productId} removed from cart!`);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateDiscount = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.discountPercentage / 100) * item.quantity, 0);
    };

    const totalAmount = calculateTotal();
    const totalDiscount = calculateDiscount();
    const deliveryCharges = 0; // Assuming free delivery
    const securedPackingFee = 99; // Fixed fee

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
            ) : (
                <div className='grid gri-col-2'>
                    {cartItems.map((item) => (
                        <div key={item.id} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md flex items-start">
                            <div className="flex-shrink-0">
                                <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                            </div>
                            <div className="ml-4 flex-grow">
                                <h2 className="font-semibold text-xl">{item.title}</h2>
                                <p className="text-gray-700">
                                    <span className="font-bold">Price:</span> ${item.price} 
                                    <span className='text-green-500 ml-2'>{item.discountPercentage}% off</span>
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-bold">Quantity:</span> {item.quantity}
                                </p>
                                <div className='flex gap-4 mt-2'>
                                    <button 
                                        className="text-red-600 hover:text-red-800 transition duration-200 p-2 bg-gray-300 rounded-md"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                    <button 
                                        className="text-white bg-blue-500 hover:bg-blue-600 transition duration-200 p-2 rounded-md"
                                        onClick={() => alert(`Buying ${item.title}`)} // Placeholder for Buy Now functionality
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border border-gray-300 rounded-lg p-4 mt-6 shadow-md">
                        <h3 className="font-bold text-lg mb-4">Price Details</h3>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Subtotal:</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Discount:</span>
                            <span className="text-red-500">-${totalDiscount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Delivery Charges:</span>
                            <span className="text-green-500">Free</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Secured Packing Fee:</span>
                            <span>${securedPackingFee}</span>
                        </div>
                        <div className="border-t border-gray-300 mt-4 pt-2 font-bold">
                            <div className="flex justify-between">
                                <span>Total Amount:</span>
                                <span className="text-blue-600">${(totalAmount - totalDiscount + securedPackingFee).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>You will save:</span>
                                <span className="text-green-500">-${totalDiscount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="text-center mt-6">
                <button 
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
                    onClick={() => navigate('/')}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default CartPage;