import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scrolling direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md py-3 px-6 md:px-12 flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <div className="bg-blue-600 p-2 rounded-lg">
          <span className="text-white font-bold text-lg">N</span>
        </div>
      </div>

      {/* Center: Nav Links (Hidden in Mobile) */}
      <ul className="hidden md:flex space-x-6 font-semibold text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">IB Resources</li>
        <li className="hover:text-blue-600 cursor-pointer">Schools</li>
        <li className="hover:text-blue-600 cursor-pointer">Past Papers</li>
        <li className="hover:text-blue-600 cursor-pointer">Question Bank</li>
        <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
      </ul>

      {/* Right: Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-100">
          Login
        </button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Register (It's Free)
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 font-semibold text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">IB Resources</li>
            <li className="hover:text-blue-600 cursor-pointer">Schools</li>
            <li className="hover:text-blue-600 cursor-pointer">Past Papers</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Question Bank
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            <div className="flex space-x-4">
              <button className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-100">
                Login
              </button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                Register (It's Free)
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
