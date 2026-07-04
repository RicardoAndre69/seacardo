import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Banner } from '../Banner/Banner'
import { useCart } from '../../context/CartContext'

const CategoryPage = ({title, bgImage, categories=[]}) => {
    const { addToCart } = useCart()
    const { t } = useTranslation()
    const [searchParams] = useSearchParams()
    const searchTerm = (searchParams.get('search') || '').trim().toLowerCase()

    let filteredItems = categories.includes('All')
    ? ProductList
    : ProductList.filter(item=> categories.includes(item.category))

    if (searchTerm) {
        filteredItems = filteredItems.filter((product) => {
            const translatedName = t(product.titleKey, { defaultValue: product.title })
            const haystack = `${translatedName} ${product.name || ''} ${product.category || ''}`.toLowerCase()
            return haystack.includes(searchTerm)
        })
    }

    const renderProduct = filteredItems.map(product=>{
        return (
            <Cards
                key={product.id}
                image={product.image}
                title={t(product.titleKey, { defaultValue: product.title })}
                price={product.price}
                product={product}
                onAddToCart={() => addToCart(product)}
            />
        )
    })

  return (
    <div>
        <Banner title={title} bgImage={bgImage}/>
        <div className='max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-20'>
            {searchTerm && (
                <p className='mb-6 text-lg text-zinc-600'>Showing results for: <span className='font-semibold text-zinc-800'>"{searchTerm}"</span></p>
            )}

            {filteredItems.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-9'>
                    {renderProduct}
                </div>
            ) : (
                <div className='rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm'>
                    <h3 className='text-2xl font-semibold text-zinc-800'>No products found</h3>
                    <p className='mt-3 text-zinc-600'>Try another keyword like “salmon”, “beef”, or “seafood”.</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default CategoryPage