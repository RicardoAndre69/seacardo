import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'seacardo-cart'

const readStoredCart = () => {
  if (typeof window === 'undefined') return []
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(readStoredCart)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
    }
  }, [cartItems])

  const addToCart = (product) => {
    if (!product) return

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name || product.title || 'Product',
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ]
    })
  }

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.flatMap((item) => {
        if (item.id !== id) return [item]
        if (item.quantity === 1) return []
        return [{ ...item, quantity: item.quantity - 1 }]
      }),
    )
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const clearCart = () => setCartItems([])

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const totalAmount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      totalItems,
      totalAmount,
    }),
    [cartItems, totalItems, totalAmount],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
