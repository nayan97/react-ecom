import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">MyShop</h2>
                    <p className="text-sm text-gray-400">
                        Your trusted online store for quality products at the best prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-white">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/faq" className="hover:text-white">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/returns" className="hover:text-white">Returns</Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Facebook</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} MyShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
