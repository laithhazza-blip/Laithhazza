import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
export default function ThemeToggle() { const { theme, setTheme } = useTheme(); const [mounted, setMounted] = useState(false); useEffect(()=> setMounted(true), []); if(!mounted) return null; return (<button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded border dark:border-gray-600" aria-label="Toggle Theme">{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>);
}
