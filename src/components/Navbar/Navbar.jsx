import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { t, i18n } = useTranslation();
  const { currentUser, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("search") || "");
  }, [location.search]);

  const handleSearch = (event) => {
    event.preventDefault();
    const normalizedQuery = searchQuery.trim();

    if (normalizedQuery) {
      navigate(`/allproducts?search=${encodeURIComponent(normalizedQuery)}`);
    } else {
      navigate("/allproducts");
    }

    setShowMenu(false);
  };

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 min-h-[12vh] md:min-h-[14vh] py-3 flex justify-between items-center gap-3">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          SeaCardo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-6 lg:gap-x-10">
          <li>
            <Link to="/" className="font-semibold text-red-500">
              {t("navbar.home")}
            </Link>
          </li>
          <li>
            <Link to="/process" className="font-semibold text-zinc-800 hover:text-red-500">
              {t("navbar.process")}
            </Link>
          </li>
          <li>
            <Link to="/allproducts" className="font-semibold text-zinc-800 hover:text-red-500">
              {t("navbar.about")}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-semibold text-zinc-800 hover:text-red-500">
              {t("navbar.contact")}
            </Link>
          </li>
        </ul>

        {/* Icons + Search */}
        <div className="flex items-center gap-x-3 sm:gap-x-4 lg:gap-x-5">
          
          {/* Search Desktop */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center border-2 border-red-500 rounded-full w-44 lg:w-56 overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={t("navbar.search")}
              className="flex-1 px-3 py-2 text-sm focus:outline-none"
            />
            <button type="submit" className="bg-gradient-to-b from-red-400 to-red-500 text-white w-10 h-10 flex items-center justify-center shrink-0">
              <IoSearch />
            </button>
          </form>

          <GoHeartFill className="text-2xl text-zinc-800" />
          <Link to="/cart" className="relative text-zinc-800">
            <HiShoppingBag className="text-2xl" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {currentUser ? (
            <div className="hidden lg:flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-2">
              <span className="text-sm font-semibold text-zinc-700">{currentUser.name}</span>
              <button onClick={logout} className="text-sm font-semibold text-red-500">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth" className="hidden lg:inline-flex rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
              Login
            </Link>
          )}

          {/* Language buttons (desktop) */}
          <div className="hidden lg:flex gap-2 ml-4">
            <button
              onClick={() => changeLanguage("pt")}
              className={`px-3 py-1 rounded-full border ${
                i18n.language === "pt"
                  ? "bg-red-500 text-white"
                  : "border-red-500 text-red-500"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded-full border ${
                i18n.language === "en"
                  ? "bg-red-500 text-white"
                  : "border-red-500 text-red-500"
              }`}
            >
              EN
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="flex lg:hidden text-3xl text-zinc-800"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex lg:hidden flex-col gap-y-8 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center absolute top-28 transition-all duration-500 ${
            showMenu ? "left-1/2 -translate-x-1/2" : "-left-full"
          }`}
        >
          <li>
            <Link to="/" onClick={() => setShowMenu(false)} className="font-semibold text-orange-500">
              {t("navbar.home")}
            </Link>
          </li>
          <li>
            <Link to="/process" onClick={() => setShowMenu(false)} className="font-semibold">
              {t("navbar.process")}
            </Link>
          </li>
          <li>
            <Link to="/allproducts" onClick={() => setShowMenu(false)} className="font-semibold">
              {t("navbar.about")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setShowMenu(false)} className="font-semibold">
              {t("navbar.contact")}
            </Link>
          </li>

          {/* Search Mobile */}
          <form onSubmit={handleSearch} className="flex items-center border-2 border-orange-500 rounded-full overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={t("navbar.search")}
              className="flex-1 px-3 py-2 focus:outline-none"
            />
            <button type="submit" className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex items-center justify-center shrink-0">
              <IoSearch />
            </button>
          </form>

          {currentUser ? (
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-semibold text-zinc-700">{currentUser.name}</span>
              <button onClick={() => { logout(); setShowMenu(false); }} className="text-sm font-semibold text-red-500">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth" onClick={() => setShowMenu(false)} className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
              Login
            </Link>
          )}

          <Link to="/cart" onClick={() => setShowMenu(false)} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
            <HiShoppingBag className="text-lg" />
            Cart ({totalItems})
          </Link>

          {/* Language buttons (mobile) */}
          <div className="flex gap-3">
            <button
              onClick={() => changeLanguage("pt")}
              className={`px-4 py-1 rounded-full border ${
                i18n.language === "pt"
                  ? "bg-orange-500 text-white"
                  : "border-orange-500 text-orange-500"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-4 py-1 rounded-full border ${
                i18n.language === "en"
                  ? "bg-orange-500 text-white"
                  : "border-orange-500 text-orange-500"
              }`}
            >
              EN
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
