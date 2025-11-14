import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='bg-zinc-100 py-20'>
            <div className='flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10'>
                
                <div className='flex-1 basis-[300px]'>
                    <a href="#" className="text-3xl font-bold">
                        SeaCardo
                    </a>

                    <p className='text-zinc-600 mt-6 max-w'>
                        {t("footer.description")}
                    </p>

                    <p className='text-zinc-800 mt-6'>
                        2025 &copy; {t("footer.rights")}
                    </p>
                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>
                            {t("footer.company.title")}
                        </h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>{t("footer.company.about")}</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>{t("footer.company.faq")}</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>
                            {t("footer.support.title")}
                        </h5>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>{t("footer.support.center")}</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>{t("footer.support.feedback")}</a>
                    </li>
                    <li className='mt-6'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>{t("footer.support.contact")}</a>
                    </li>
                </ul>

                <div className='flex-1'>
                    <h5 className='text-zinc-800 text-2xl font-bold'>
                        {t("footer.stay.title")}
                    </h5>

                    <p className='mt-6 text-zinc-600'>
                        {t("footer.stay.text")}
                    </p>

                    <div className='flex bg-white p-1 rounded-lg mt-6'>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete='off'
                            placeholder={t("footer.stay.placeholder")}
                            className='h-[5vh] pl-4 flex-1 focus:outline-none'
                        />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
