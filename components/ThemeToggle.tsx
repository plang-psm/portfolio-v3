"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { LiaCookieSolid } from "react-icons/lia";
import { BiSolidCookie } from "react-icons/bi";

// Theme toggler -- forced client side rendering by using useEffect to prevent hydration error
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className='flex w-full h-full text-2xl items-center' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'dark' ? <LiaCookieSolid /> : <BiSolidCookie />}
    </button>
  )
}

export default ThemeToggle