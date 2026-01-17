import React, { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
    // change this based on your auth logic
    const isLoggedIn = false;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                
                {/* Logo */}
                <div className="text-2xl font-bold text-indigo-600">
                    <Link to="/">MyShop</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700">
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
                        <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                            Logout
                        </button>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow">
                    <nav className="flex flex-col px-4 py-4 gap-4 text-gray-700">
                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-indigo-600"
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-indigo-600"
                        >
                            Shop
                        </Link>

                        {!isLoggedIn ? (
                            <>
                                <Link
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded text-center hover:bg-indigo-600 hover:text-white transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded text-center hover:bg-indigo-700 transition"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                Logout
                            </button>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
