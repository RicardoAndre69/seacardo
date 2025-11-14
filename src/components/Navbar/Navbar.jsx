import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go"
import { HiShoppingBag } from "react-icons/hi2"
import { IoSearch } from "react-icons/io5"
import { TbMenu2, TbMenu3 } from "react-icons/tb"
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : ''}`}>
            <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-3xl font-bold">
                    SeaCardo
                </Link>

                {/* Desktop Menu */}
                <ul className="md:flex items-center gap-x-15 hidden">
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-red-500">
                            {t("navbar.home")}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-red-500">
                            {t("navbar.about")}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-red-500">
                            {t("navbar.process")}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-red-500">
                            {t("navbar.contact")}
                        </a>
                    </li>
                </ul>

                {/* Ícones + Busca */}
                <div className="flex items-center gap-x-5">

                    {/* Input Desktop */}
                    <div className="md:flex p-1 border-2 border-red-500 rounded-full hidden">
                        <input type="text" name="text" id="text" placeholder={t("navbar.search")} autoComplete='off' className="flex-1 h-[5vh] px-3 focus:outline-none " />
                        <button className="bg-gradient-to-b from-red-400 to-red-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearch />
                        </button>
                    </div>

                    <a href="#" className="text-zinc-800 text-2xl">
                        <GoHeartFill />
                    </a>

                    <a href="#" className="text-zinc-800 text-2xl">
                        <HiShoppingBag />
                    </a>

                    {/* BOTÕES DE IDIOMA (DESKTOP) */}
                    <div className="hidden md:flex gap-2 ml-4">
                        <button
                            onClick={() => changeLanguage("pt")}
                            className={`px-3 py-1 rounded-full border ${i18n.language === "pt" ? "bg-red-500 text-white" : "border-red-500 text-red-500"}`}
                        >
                            PT
                        </button>

                        <button
                            onClick={() => changeLanguage("en")}
                            className={`px-3 py-1 rounded-full border ${i18n.language === "en" ? "bg-red-500 text-white" : "border-red-500 text-red-500"}`}
                        >
                            EN
                        </button>
                    </div>

                    {/* Hamburguer */}
                    <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                    </a>
                </div>

                {/* Mobile Menu */}
                <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-orange-500">
                            {t("navbar.home")}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
                            {t("navbar.about")}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
                            {t("navbar.process")}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
                            {t("navbar.contact")}
                        </a>
                    </li>

                    {/* Input Mobile */}
                    <li className="md:flex p-1 border-2 border-orange-500 rounded-full md:hidden">
                        <input type="text" placeholder={t("navbar.search")} autoComplete='off' className="flex-1 h-[5vh] px-3 focus:outline-none " />
                        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                            <IoSearch />
                        </button>
                    </li>

                    {/* BOTÕES DE IDIOMA (MOBILE) */}
                    <div className="flex gap-3 mt-5">
                        <button
                            onClick={() => changeLanguage("pt")}
                            className={`px-4 py-1 rounded-full border ${i18n.language === "pt" ? "bg-orange-500 text-white" : "border-orange-500 text-orange-500"}`}
                        >
                            PT
                        </button>

                        <button
                            onClick={() => changeLanguage("en")}
                            className={`px-4 py-1 rounded-full border ${i18n.language === "en" ? "bg-orange-500 text-white" : "border-orange-500 text-orange-500"}`}
                        >
                            EN
                        </button>
                    </div>
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;
