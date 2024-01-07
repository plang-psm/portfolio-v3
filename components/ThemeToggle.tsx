'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LiaCookieSolid } from 'react-icons/lia';
import { BiSolidCookie } from 'react-icons/bi';

// Theme toggler -- forced client side rendering by using useEffect to prevent hydration error
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // Renders the light/dark toggle icon depending on theme.
  const renderThemeToggler = () => {
    if (!mounted) return null;

    const currTheme = theme === 'system' ? systemTheme : theme;
    if (currTheme === 'dark') {
      return <LiaCookieSolid onClick={() => setTheme('light')} />;
    } else {
      return <BiSolidCookie onClick={() => setTheme('dark')} />;
    }
  };

  return (
    <button className='flex w-full h-full text-2xl items-center'>
      {renderThemeToggler()}
    </button>
  );
};

export default ThemeToggle;
