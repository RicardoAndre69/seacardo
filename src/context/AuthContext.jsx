import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext(null)

const TOKEN_STORAGE_KEY = 'seacardo-token'

const getStoredToken = () => {
  if (typeof window === 'undefined') return null
  return window.localStorage.getItem(TOKEN_STORAGE_KEY)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState(getStoredToken)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      window.localStorage.setItem(TOKEN_STORAGE_KEY, token)
    } else {
      delete api.defaults.headers.common.Authorization
      window.localStorage.removeItem(TOKEN_STORAGE_KEY)
    }
  }, [token])

  useEffect(() => {
    const loadUser = async () => {
      const storedToken = getStoredToken()

      if (!storedToken) {
        setLoading(false)
        return
      }

      try {
        setToken(storedToken)

        const response = await api.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })

        setCurrentUser(response.data)
      } catch (error) {
        console.error('Erro ao restaurar sessão:', error)
        setCurrentUser(null)
        setToken(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const register = async ({ name, email, password }) => {
    try {
      const response = await api.post('/auth/register', {
        name,
        email,
        password,
      })

      const { token, user, message } = response.data

      setToken(token)
      setCurrentUser(user)

      return {
        success: true,
        message: message || 'Account created successfully.',
      }
    } catch (error) {
      const message =
        error.response?.data?.message || 'Unable to create account.'

      return {
        success: false,
        message,
      }
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      })

      const { token, user, message } = response.data

      setToken(token)
      setCurrentUser(user)

      return {
        success: true,
        message: message || 'Login successful.',
      }
    } catch (error) {
      const message =
        error.response?.data?.message || 'Unable to login.'

      return {
        success: false,
        message,
      }
    }
  }

  const logout = () => {
    setCurrentUser(null)
    setToken(null)
  }

  const value = useMemo(
    () => ({
      currentUser,
      token,
      loading,
      register,
      login,
      logout,
      isAuthenticated: !!currentUser,
    }),
    [currentUser, token, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)