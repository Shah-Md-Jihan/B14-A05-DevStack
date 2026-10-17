import { Menu, SquareMenu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-white"> 
            <div className="flex justify-between py-4 items-center container mx-auto">
                <div className="font-bold">
                    <img src="/src/assets/logo-text.png" alt="" />
                </div>
                <div className="flex gap-3 items-center hidden md:flex">
                    <ul className="flex gap-3 items-center">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                
                </div>
                <div>
                    <button>Sign In</button>
                    <button className="bg-pink-500 text-white rounded-3xl px-6 py-2 ml-2.5">Sign Up</button>
                </div>
            </div>
            {
                isMenuOpen && (
                    <div className="flex gap-3 items-center md:hidden">
                    <ul className="">
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Change Log</li>
                        <li>Blog</li>
                    </ul>
                    
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;