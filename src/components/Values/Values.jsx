import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../../assets/basket-full-meats.png'
import { useTranslation } from 'react-i18next'

const Values = () => {

    const { t } = useTranslation()

    const leftValues = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div> 
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{t(item.title)}</h3>
                    <p className='text-zinc-600 mt-2'>{t(item.para)}</p>
                </div>
            </div>
        )
    })

    const rightValues = value.slice(2).map(item => {
        return (
            <div key={item.id} className='flex items-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div>
                    <h3 className='text-zinc-800 md:text-3xl font-bold'>{t(item.title)}</h3>
                    <p className='text-zinc-600 mt-2'>{t(item.para)}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight={t("values.highlight")} heading={t("values.heading")} />

                <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {leftValues}
                    </div> 

                    <div className='md:flex w-1/2 hidden'>
                        <img src={Basket} />
                    </div>

                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: "values.items.1.title",
        para: "values.items.1.para",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "values.items.2.title",
        para: "values.items.2.para",
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: "values.items.3.title",
        para: "values.items.3.para",
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: "values.items.4.title",
        para: "values.items.4.para",
        icon: <FaSeedling />
    }
]
