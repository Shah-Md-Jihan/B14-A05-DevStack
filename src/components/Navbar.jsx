import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      
      <div className="container mx-auto flex items-center justify-between px-5 py-4 md:px-0">

        
        <div className="font-bold">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        
        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-6 font-medium">
            <li className="cursor-pointer hover:text-purple-600">Home</li>
            <li className="cursor-pointer hover:text-purple-600">Technologies</li>
            <li className="cursor-pointer hover:text-purple-600">Projects</li>
            <li className="cursor-pointer hover:text-purple-600">About</li>
            <li className="cursor-pointer hover:text-purple-600">Contact</li>
          </ul>
        </div>

        
        <div className="flex items-center gap-4">
          <div className="hidden items-center md:flex">
            <button className="px-4 py-2 font-medium">
              Sign In
            </button>

            <button className="ml-2.5 rounded-3xl bg-pink-500 px-6 py-2 text-white transition hover:bg-pink-600">
              Sign Up
            </button>
          </div>

          
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="border-b border-gray-200 bg-white px-5 py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 font-medium">
            <li
              onClick={closeMenu}
              className="cursor-pointer hover:text-purple-600"
            >
              Home
            </li>

            <li
              onClick={closeMenu}
              className="cursor-pointer hover:text-purple-600"
            >
              FAQ
            </li>

            <li
              onClick={closeMenu}
              className="cursor-pointer hover:text-purple-600"
            >
              Change Log
            </li>

            <li
              onClick={closeMenu}
              className="cursor-pointer hover:text-purple-600"
            >
              Blog
            </li>
          </ul>

          
          <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
            <button
              onClick={closeMenu}
              className="w-full rounded-lg border border-gray-300 py-2 font-medium"
            >
              Sign In
            </button>

            <button
              onClick={closeMenu}
              className="w-full rounded-lg bg-pink-500 py-2 text-white transition hover:bg-pink-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
