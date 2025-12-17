import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t, i18n } = useTranslation();

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

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          SeaCardo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-12">
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
        <div className="flex items-center gap-x-5">
          
          {/* Search Desktop */}
          <div className="hidden md:flex p-1 border-2 border-red-500 rounded-full">
            <input
              type="text"
              placeholder={t("navbar.search")}
              className="flex-1 px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-red-400 to-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
              <IoSearch />
            </button>
          </div>

          <GoHeartFill className="text-2xl text-zinc-800" />
          <HiShoppingBag className="text-2xl text-zinc-800" />

          {/* Language buttons (desktop) */}
          <div className="hidden md:flex gap-2 ml-4">
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
            className="md:hidden text-3xl text-zinc-800"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden flex flex-col gap-y-8 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center absolute top-28 transition-all duration-500 ${
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
          <div className="flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder={t("navbar.search")}
              className="flex-1 px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
              <IoSearch />
            </button>
          </div>

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
