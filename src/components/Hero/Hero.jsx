import React from 'react'
import MeatSeaFood from  '../../assets/meat-and-seafood.png';
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="min-h-screen max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-20 lg:py-24">
                {/* Hero Content  */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>{t("hero.badge")}</span>

                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 leading-tight'>
                        {t("hero.title1")}
                        <span className='text-black'> {t("hero.title2")} </span>
                        <span className='text-black'> {t("hero.title3")} </span>
                        <br /> {t("hero.title4")}
                    </h1>
                    <p className='text-zinc-600 text-base sm:text-lg max-w-[530px] mt-5 mb-10'>
                        {t("hero.subtitle")}
                    </p>
                    <Button content={t("hero.button")} />
                </div>

                {/* Hero Image */}

                <div className='flex-1 w-full max-w-[520px]'>
                    <img src={MeatSeaFood} alt="Hero Image" className="w-full h-auto object-contain" />
                </div>
            </div>
        </section>
    )
}

export default Hero