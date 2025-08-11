import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  XMarkIcon,
  Bars3Icon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [mobileITSubMenuOpen, setMobileITSubMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <>
      <nav className="w-full z-30 backdrop-blur bg-white/80 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-5 px-6">
          <div className="hidden min-[1000px]:flex gap-16 items-center text-lg font-semibold text-gray-700 relative">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <div className="group relative inline-block cursor-pointer">
              <Link
                to="/business-solutions"
                className="hover:text-blue-600 transition"
              >
                Business Solutions
              </Link>
              <ul className="absolute left-0 top-full w-48 bg-white rounded shadow-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                <li>
                  <Link
                    to="/business-solutions/accounting"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-solutions/marketing"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-solutions/hr"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Human Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group relative inline-block cursor-pointer">
              <Link
                to="/it-solutions"
                className="hover:text-blue-600 transition"
              >
                IT Solutions
              </Link>
              <ul className="absolute left-0 top-full w-48 bg-white rounded shadow-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                <li>
                  <Link
                    to="/it-solutions/web-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-solutions/blockchain"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-solutions/ai"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          <Bars3Icon
            className="h-8 w-8 text-blue-600 min-[1000px]:hidden cursor-pointer ml-auto"
            onClick={() => setShowMobileMenu(true)}
          />
        </div>
      </nav>

      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-64 bg-white z-40 shadow-lg transform transition-transform duration-300 flex flex-col ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 shrink-0">
          <XMarkIcon
            className="h-6 w-6 text-gray-700 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        <ul className="flex flex-col flex-grow justify-start gap-6 px-6 text-xl font-semibold text-gray-800">
          <li>
            <Link
              to="/"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-blue-600 transition"
            >
              About
            </Link>
          </li>

          <li className="flex flex-col">
            <div
              className="flex justify-between items-center cursor-pointer hover:text-blue-600 transition"
              onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
            >
              <span>Business Solutions</span>
              {mobileSubMenuOpen ? (
                <MinusIcon className="h-5 w-5 text-blue-600" />
              ) : (
                <PlusIcon className="h-5 w-5 text-blue-600" />
              )}
            </div>
            {mobileSubMenuOpen && (
              <ul className="mt-2 pl-4 flex flex-col gap-3 text-lg font-normal">
                <li>
                  <Link
                    to="/business-solutions/marketing"
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-blue-600 transition"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-solutions/accounting"
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-blue-600 transition"
                  >
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-solutions/human-resources"
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-blue-600 transition"
                  >
                    Human Resources
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex flex-col">
            <div
              className="flex justify-between items-center cursor-pointer hover:text-blue-600 transition"
              onClick={() => setMobileITSubMenuOpen(!mobileITSubMenuOpen)}
            >
              <span>IT Solutions</span>
              {mobileITSubMenuOpen ? (
                <MinusIcon className="h-5 w-5 text-blue-600" />
              ) : (
                <PlusIcon className="h-5 w-5 text-blue-600" />
              )}
            </div>
            {mobileITSubMenuOpen && (
              <ul className="mt-2 pl-4 flex flex-col gap-3 text-lg font-normal">
                <li>
                  <Link
                    to="/it-solutions/web-development"
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-blue-600 transition"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-solutions/blockchain"
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-blue-600 transition"
                  >
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link
                    to="/it-solutions/ai"
                    onClick={() => setShowMobileMenu(false)}
                    className="hover:text-blue-600 transition"
                  >
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
