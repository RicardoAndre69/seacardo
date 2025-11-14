import React from 'react'
import Heading from '../Heading/Heading'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Category = () => {

    const { t } = useTranslation()

    const renderCards = category.map(card => {
        return (
            <div className="basis-[300px]" key={card.id}>
                <div className="w-full min-h-[30vh] relative -mb-10">
                    <img src={card.image} className="absolute bottom-0" />
                </div>

                <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
                    <h3 className="text-zinc-800 text-3xl font-bold">{t(card.title)}</h3>
                    <p className="text-zinc-600 mt-3 mb-9">{t(card.description)}</p>
                    <Link
                        to={card.path}
                        className="bg-gradient-to-b from-red-400 to-red-500 
                    text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 
                    hover:from-red-600 transition-all duration-300 cursor-pointer"
                    >
                        {t("category.button")}
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight={t("category.highlight")} heading={t("category.heading")} />

                <div className="flex flex-wrap gap-10 md:mt-15 justify-center">
                    {renderCards}
                </div>
            </div>
        </section>
    )
}

export default Category

const category = [
    {
        id: 1,
        title: "category.items.1.title",
        description: "category.items.1.description",
        image: SeaFoodCat,
        path: "/seafood"
    }
]
