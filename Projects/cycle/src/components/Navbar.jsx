import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Our Cycle", "Shop", "News", "Contact Us"];

  return (
    <nav className="bg-transparent shadow-sm fixed w-full z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-1 text-gray-800 cursor-pointer">
          <img src="../../public/images/10001.png" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-400 font-medium">
          {links.map((link) => (
            <li key={link} className="hover:text-orange-500 cursor-pointer transition-colors">
              {link}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-600 cursor-pointer hover:text-orange-500">Login</span>
          <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-600 hover:text-orange-500" />
          <Search className="w-5 h-5 cursor-pointer text-gray-600 hover:text-orange-500" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 py-4 px-6 text-gray-700">
          {links.map((link) => (
            <li key={link} className="hover:text-orange-500 cursor-pointer">
              {link}
            </li>
          ))}
          <hr />
          <li className="hover:text-orange-500 cursor-pointer">Login</li>
        </ul>
      </div> 
    </nav>
  );
}
