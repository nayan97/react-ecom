import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    // change this based on your auth logic
    const isLoggedIn = false;

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                
                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-600">
                    <Link to="/">MyShop</Link>
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-6 text-gray-700">
                    <Link to="/" className="hover:text-indigo-600">
                        Home
                    </Link>
                    <Link to="/shop" className="hover:text-indigo-600">
                        Shop
                    </Link>

                    {!isLoggedIn ? (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <button
                            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
