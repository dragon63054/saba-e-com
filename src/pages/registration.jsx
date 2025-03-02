import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Registration() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate=useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const login=(e)=>{
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <div className="flex justify-center logo items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg p-8 rounded-lg">
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={login}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className='mb-4'>
                <select name="role" id="role" className='w-full p-3 rounded-md border-gray-300 border'>
                  <option value="Select Role">Select Role</option>
                  <option value="User">User</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Login
              </button>
            </form>
            <div className="text-center mb-6">
              <button 
                onClick={toggleForm} 
                className="text-blue-500 hover:text-blue-700 font-semibold">
                {isLogin ? 'Go to Registration' : 'Go to Login'}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-semibold">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Choose a username"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-sm font-semibold">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className='mb-4'>
                <select name="role" id="role" className='w-full p-3 rounded-md border-gray-300 border'>
                  <option value="Select Role">Select Role</option>
                  <option value="User">User</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Register
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Registration;
