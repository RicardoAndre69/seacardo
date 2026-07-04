import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { useCart } from '../../context/CartContext'

const Products = () => {

    const { t } = useTranslation()
    const { addToCart } = useCart()

    const categories = ["all", "meat", "seafood"]

    const [activeTab, setActiveTab] = useState("all")

    const filteredItems =
        activeTab === "all"
            ? ProductList
            : ProductList.filter(item => item.category === activeTab)

    const renderCards = filteredItems.slice(0, 8).map(product => (
        <Cards
            key={product.id}
            image={product.image}
            title={t(product.titleKey, { defaultValue: product.title })}
            price={product.price}
            product={product}
            onAddToCart={() => addToCart(product)}
        />
    ))

    return (
        <section >
            <div className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-20'>
                
                <Heading 
                    highlight={t("products.highlight")} 
                    heading={t("products.heading")} 
                />

                {/* Tabs */}
                <div className='flex flex-wrap gap-3 justify-center mt-10'>
                    {categories.map(category => (
                        <button f
                            key={category}
                            className={`px-5 py-2 text-lg rounded-lg cursor-pointer
                                ${activeTab === category
                                    ? 'bg-gradient-to-b from-red-400 to-red-500 text-white'
                                    : 'bg-zinc-100'}`}
                            onClick={() => setActiveTab(category)}
                        >

                            {t(`products.tabs.${category}`)}
                        </button>
                    ))}
                </div>

                {/* Product Listing */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-9 mt-20'>
                    {renderCards}
                </div>

                <div className='mt-15 mx-auto w-fit'>
                    <Link 
                        to="/allproducts" 
                        className='bg-gradient-to-b from-orange-400 to-orange-500 
                                   text-white px-8 py-3 rounded-lg md:text-lg text-md 
                                   hover:scale-105 hover:from-orange-600 
                                   transition-all duration-300 cursor-pointer'
                    >
                        {t("products.viewAll")}
                    </Link>
                </div>
                
            </div>
        </section>
    )
}

export default Products
