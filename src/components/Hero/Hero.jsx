import React from 'react'
import MeatSeaFood from  '../../assets/meat-and-seafood.png';
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex-row flex-col md:flex items-center md:pt-25 pt-35">
                {/* Hero Content  */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>{t("hero.badge")}</span>

                    <h1 className='text-7xl/20 text-5xl/14 font-bold mt-4 '>
                        {t("hero.title1")}
                        <span className='text-black'> {t("hero.title2")} </span>
                        <span className='text-black'> {t("hero.title3")} </span>
                        <br /> In Your City
                    </h1>
                    <p className='text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10'>
                        {t("hero.subtitle")}
                    </p>
                    <Button content={t("hero.button")} />
                </div>

                {/* Hero Image */}

                <div className='flex-1'>
                    <img src={MeatSeaFood} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero