import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";

const NAV = [
    { label: "Home", to: "/" },
    { label: "Collections", to: "/collection" },
    { label: "Necklaces", to: "/necklaces" },
    { label: "Earrings", to: "/earrings" },
    { label: "Rings", to: "/rings" },
    { label: "Bracelets", to: "/bracelets" },
    { label: "About", to: "/about" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");


    return (
        <header className="sticky m-0 p-0 top-0 z-50 bg-[#F8F6F1] ">
            <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

                {/* Mobile Menu Button (Visible only on small screens) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-gold-text hover:text-gold-accent transition-colors"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                </button>

                {/* Logo - Playfair Display (font-display) */}
                <Link
                    to="/"
                    className="font-display text-2xl font-medium tracking-tight text-gold-text lg:text-3xl"
                >
                    GoldAura
                </Link>

                {/* Desktop Navigation - Poppins (font-sans) */}
                <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                    {NAV.map((item) => (
                        <Link // 👈 Use button instead of NavLink
                            key={item.label}
                            to={item.to}
                            onClick={() => setActiveLink(item.label)} // 2. Update state on click
                            className={`relative text-[15px] font-medium tracking-wide transition-colors duration-300 pb-1 cursor-pointer ${activeLink === item.label
                                ? "text-[#D4AF37]" // Golden when clicked
                                : "text-gray-700 hover:text-[#D4AF37]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Action Icons */}
                <div className="flex items-center gap-5 lg:gap-6 text-gold-text">
                    <button aria-label="Search" className="cursor-pointer hover:text-gold-accent transition-colors">
                        <Search size={22} strokeWidth={1.5} />
                    </button>

                    <button aria-label="Wishlist" className="cursor-pointer hover:text-gold-accent transition-colors">
                        <Heart size={22} strokeWidth={1.5} />
                    </button>

                    <button aria-label="Cart" className="cursor-pointer relative hover:text-gold-accent transition-colors">
                        <ShoppingCart size={22} strokeWidth={1.5} />
                        {/* Cart Badge */}
                        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm">
                            1
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {open && (
                <nav className="border-t border-gold-border bg-gold-bg lg:hidden">
                    <div className="flex flex-col px-6 py-4">
                        {NAV.map((item) => (
                            <NavLink
                                key={item.to}
                                // to={item.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `py-3 text-[15px] font-medium  ${isActive ? "text-gold-accent" : "text-gray-700"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Navbar;