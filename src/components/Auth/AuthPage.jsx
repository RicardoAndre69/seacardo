import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const AuthPage = () => {
    const [mode, setMode] = useState('login')
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { login, register } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.from?.pathname || '/allproducts'

    const handleChange = (event) => {
        setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setSuccess('')

        let result

        if (mode === 'register') {
            result = await register(form)
        } else {
            result = await login(form.email, form.password)
        }

        if (!result.success) {
            setError(result.message)
            return
        }

        setSuccess(result.message)

        setTimeout(() => navigate(redirectPath, { replace: true }), 200)
    }

    return (
        <section className='min-h-screen bg-zinc-50 pt-[14vh] px-6 py-20'>
            <div className='mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl lg:flex-row'>
                <div className='flex-1 bg-gradient-to-br from-orange-500 to-red-500 p-10 text-white'>
                    <p className='text-sm font-semibold uppercase tracking-[0.3em]'>SeaCardo</p>
                    <h1 className='mt-6 text-4xl font-bold'>Welcome back!</h1>
                    <p className='mt-4 max-w-md text-lg text-orange-50'>
                        Create an account or sign in to save your cart and shop faster.
                    </p>
                    <div className='mt-10 rounded-2xl bg-white/15 p-6 backdrop-blur-sm'>
                        <p className='text-sm font-semibold uppercase tracking-[0.3em]'>Why join?</p>
                        <ul className='mt-4 space-y-3 text-sm text-orange-50'>
                            <li>• Save your favorite products</li>
                            <li>• Keep a persistent cart</li>
                            <li>• Enjoy a faster checkout experience</li>
                        </ul>
                    </div>
                </div>

                <div className='flex-1 p-8 md:p-12'>
                    <div className='flex gap-3'>
                        <button
                            type='button'
                            onClick={() => setMode('login')}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'login' ? 'bg-red-500 text-white' : 'bg-zinc-100 text-zinc-700'}`}
                        >
                            Login
                        </button>
                        <button
                            type='button'
                            onClick={() => setMode('register')}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'register' ? 'bg-red-500 text-white' : 'bg-zinc-100 text-zinc-700'}`}
                        >
                            Register
                        </button>
                    </div>

                    <form className='mt-8 space-y-4' onSubmit={handleSubmit}>
                        {mode === 'register' && (
                            <div>
                                <label className='mb-2 block text-sm font-medium text-zinc-700'>Full name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    className='w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-orange-500'
                                    placeholder='Your name'
                                />
                            </div>
                        )}

                        <div>
                            <label className='mb-2 block text-sm font-medium text-zinc-700'>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                className='w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-orange-500'
                                placeholder='you@example.com'
                            />
                        </div>

                        <div>
                            <label className='mb-2 block text-sm font-medium text-zinc-700'>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={form.password}
                                onChange={handleChange}
                                className='w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-orange-500'
                                placeholder='••••••••'
                            />
                        </div>

                        {error && <p className='rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600'>{error}</p>}
                        {success && <p className='rounded-xl bg-green-50 px-4 py-3 text-sm text-green-600'>{success}</p>}

                        <button
                            type='submit'
                            className='w-full rounded-xl bg-gradient-to-b from-red-400 to-red-500 px-4 py-3 font-semibold text-white transition hover:from-red-500'
                        >
                            {mode === 'login' ? 'Sign In' : 'Create account'}
                        </button>
                    </form>

                    <p className='mt-6 text-sm text-zinc-500'>
                        Continue shopping{' '}
                        <Link to='/allproducts' className='font-semibold text-red-500'>here</Link>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AuthPage
