import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Button from '../Button/Button'

const Cards = ({ image, name, title, price, product, onAddToCart }) => {
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    const productName = name || title || product?.name || product?.title || 'Product'
    const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00'

    const handleAddToCart = () => {
        if (!currentUser) {
            navigate('/auth', { state: { from: { pathname: '/allproducts' } } })
            return
        }

        if (onAddToCart) {
            onAddToCart(product || { id: product?.id, name: productName, title: productName, price, image })
        }
    }

    return (
        <div className='group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
            <div className='mb-4 flex items-center justify-between'>
                <span className='rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600'>
                    Fresh
                </span>
            </div>

            <div className='mb-5 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 via-white to-zinc-100 p-4'>
                <img
                    src={image}
                    alt={productName}
                    className='h-full w-full object-contain transition-transform duration-300 group-hover:scale-105'
                />
            </div>

            <div className='mt-auto flex flex-col text-left'>
                <h3 className='min-h-[3.25rem] text-lg font-semibold leading-snug text-zinc-800'>
                    {productName}
                </h3>

                <div className='mt-3 flex items-center justify-between'>
                    <p className='text-xl font-bold text-orange-600'>${formattedPrice}</p>
                    <span className='text-sm font-medium text-zinc-500'>Free delivery</span>
                </div>

                <div className='mt-4'>
                    <button
                        type='button'
                        onClick={handleAddToCart}
                        className='w-full rounded-xl bg-gradient-to-b from-red-400 to-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:from-red-500'
                    >
                        {currentUser ? 'Add to cart' : 'Login to add'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards