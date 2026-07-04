import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const CartPage = () => {
  const { cartItems, totalItems, totalAmount, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart()

  return (
    <section className='min-h-screen bg-zinc-50 px-6 py-24 pt-[16vh]'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-orange-500'>Your cart</p>
            <h1 className='text-4xl font-bold text-zinc-800'>Ready to checkout?</h1>
          </div>
          <Link to='/allproducts' className='rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-red-500 hover:text-red-500'>
            Continue shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className='rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm'>
            <h2 className='text-2xl font-semibold text-zinc-800'>Your cart is empty</h2>
            <p className='mt-3 text-zinc-600'>Add some fresh products and they will appear here.</p>
            <Link to='/allproducts' className='mt-6 inline-flex rounded-full bg-gradient-to-b from-red-400 to-red-500 px-6 py-3 font-semibold text-white'>
              Browse products
            </Link>
          </div>
        ) : (
          <div className='grid gap-8 lg:grid-cols-[1.7fr_0.8fr]'>
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <div key={item.id} className='flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm md:flex-row md:items-center'>
                  <div className='flex h-24 w-full items-center justify-center rounded-2xl bg-zinc-100 p-3 md:w-28'>
                    <img src={item.image} alt={item.name} className='h-full w-full object-contain' />
                  </div>

                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-zinc-800'>{item.name}</h3>
                    <p className='mt-2 text-xl font-bold text-orange-600'>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <button onClick={() => decreaseQuantity(item.id)} className='h-10 w-10 rounded-full border border-zinc-300 text-xl transition hover:border-red-500 hover:text-red-500'>-</button>
                    <span className='min-w-8 text-center text-lg font-semibold'>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className='h-10 w-10 rounded-full border border-zinc-300 text-xl transition hover:border-red-500 hover:text-red-500'>+</button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className='rounded-full px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50'>Remove</button>
                </div>
              ))}
            </div>

            <div className='rounded-3xl bg-zinc-900 p-7 text-white shadow-xl'>
              <h2 className='text-2xl font-semibold'>Summary</h2>
              <div className='mt-6 space-y-4 text-sm text-zinc-300'>
                <div className='flex justify-between'>
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className='flex justify-between border-t border-zinc-700 pt-4 text-base font-semibold text-white'>
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <button className='mt-8 w-full rounded-full bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-3 font-semibold text-white transition hover:scale-[1.01] hover:from-orange-500'>
                Checkout soon
              </button>
              <button onClick={clearCart} className='mt-3 w-full rounded-full border border-zinc-700 px-4 py-3 font-semibold text-zinc-200 transition hover:border-red-500 hover:text-red-400'>
                Clear cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartPage
