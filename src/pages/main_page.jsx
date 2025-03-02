// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCartIcon } from "lucide-react";

// function MainPage() {
//     const [products, setProducts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [cart, setCart] = useState([]); // Local cart state
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch('https://dummyjson.com/products')
//             .then((res) => res.json())
//             .then((data) => setProducts(data.products));
//     }, []);

//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleProductClick = (productId) => {
//         navigate('/product', { state: { id: productId } });
//     };

//     const addToCart = (product) => {
//         setCart((prevCart) => [...prevCart, product]); // Add product to cart
//         alert(`${product.title} has been added to your cart!`); // Optional: Alert user
//     };

//     const goToCart = () => {
//         navigate('/addtocart', { state: { cart } }); // Pass cart to the cart page
//     };

//     return (
//         <>
//             <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
//                 <div className="flex items-center">
//                     <h1 className="text-xl font-bold">Product Store</h1>
//                 </div>
//                 <div className="relative">
//                     <input
//                         type="text"
//                         placeholder="Search products..."
//                         className="p-2 rounded-md border border-gray-300"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//                 <section className="relative flex items-center">
//                     {cart.length > 0 && (
//                         <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-black bg-white rounded-full p-1 text-sm">
//                             {cart.length}
//                         </span>
//                     )}
//                     <button onClick={goToCart} className="relative w-full h-full bg-transparent">
//                         <ShoppingCartIcon className="size-6" />
//                     </button>
//                 </section>
//             </header>

//             <div className="p-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                     {filteredProducts.map((product) => (
//                         <div key={product.id} className="border border-gray-200 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300"  onClick={() => handleProductClick(product.id)}>
//                             <h2 className="font-bold text-lg mb-2">{product.title}</h2>
//                             <div className="mb-2">
//                                 <img src={product.thumbnail} alt={product.title} className="w-full  object-contain rounded-md" />
//                             </div>
//                             <p className="mb-1"><span className="font-bold">Price:</span> <span>${product.price}</span></p>
//                             <p className="mb-1"><span className="font-bold">Rating:</span> <span>{product.rating}</span></p>
//                             <p className="text-green-600"><span className="font-bold">Discount:</span> <span>{product.discountPercentage}%</span></p>
//                             <div className="flex gap-3">
//                                 <button className="bg-blue-400 p-2 rounded-md w-full font-bold hover:cursor-pointer" onClick={() => addToCart(product)}>Add to Cart</button>
//                                 <button className="bg-blue-400 p-2 rounded-md w-full font-bold hover:cursor-pointer" onClick={() => handleProductClick(product.id)}>Buy Now</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default MainPage;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

function MainPage() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]); // Local cart state
    const [expandedDescription, setExpandedDescription] = useState(null); // Track which description is expanded
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProductClick = (productId) => {
        navigate('/product', { state: { id: productId } });
    };

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Add product to cart
        alert(`${product.title} has been added to your cart!`); // Optional: Alert user
    };

    const goToCart = () => {
        navigate('/addtocart', { state: { cart } }); // Pass cart to the cart page
    };

    const handleDescriptionHover = (productId) => {
        setExpandedDescription(productId); // Expand description on hover
    };

    return (
        <>
            <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold">Product Store</h1>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="p-2 rounded-md border border-gray-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <section className="relative flex items-center">
                    {cart.length > 0 && (
                        <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-black bg-white rounded-full p-1 text-sm">
                            {cart.length}
                        </span>
                    )}
                    <button onClick={goToCart} className="relative w-full h-full bg-transparent">
                        <ShoppingCartIcon className="size-6" />
                    </button>
                </section>
            </header>

            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="border border-gray-200 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300"  onClick={() => handleProductClick(product.id)}>
                            <h2 className="font-bold text-lg mb-2">{product.title}</h2>
                            <div className="mb-2">
                                <img src={product.thumbnail} alt={product.title} className="w-full object-contain rounded-md" />
                            </div>
                            <p className="mb-1"><span className="font-bold">Price:</span> <span>${product.price}</span></p>
                            <p className="mb-1"><span className="font-bold">Rating:</span> <span>{product.rating}</span></p>
                            <p className="text-green-600"><span className="font-bold">Discount:</span> <span>{product.discountPercentage}%</span></p>
                            {/* Short description */}
                            <p className="text-sm text-gray-700 mb-2 line-clamp-1">
                                {product.description}
                            </p>
                            <div>
                                <span className="text-gray-600 underline"  onMouseEnter={() => handleDescriptionHover(product.id)}
                               onMouseLeave={() => setExpandedDescription(null)}>Show Details</span>
                                <span className="ml-2 transform transition-transform">➤</span>
                            </div>
                            
                            {expandedDescription === product.id && (
                                <p className="text-sm text-gray-700 mb-2">{product.description}</p> // Full description
                            )}
                            <div className="flex gap-3">
                                <button className="bg-blue-400 p-2 rounded-md w-full font-bold hover:cursor-pointer" onClick={() => addToCart(product)}>Add to Cart</button>
                                <button className="bg-blue-400 p-2 rounded-md w-full font-bold hover:cursor-pointer" onClick={() => handleProductClick(product.id)}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainPage;
