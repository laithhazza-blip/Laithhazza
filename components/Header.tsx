import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(()=> setMounted(true), []);
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/"> 
          <a className="font-bold text-xl flex items-center gap-2">
            <span className="text-primary">Techno</span>
            <span className="text-accent">Light</span>
          </a>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/projects"><a>المشاريع</a></Link>
          <Link href="/blog"><a>المدونة</a></Link>
          <Link href="/cv"><a>ا��سيرة</a></Link>
          <Link href="/contact"><a>تواصل</a></Link>
          <Link href="/dashboard"><a className="px-3 py-1 bg-primary text-white rounded">لوحة التحكم</a></Link>
          <ThemeToggle />
        </nav>
        <div className="md:hidden"><HiMenu size={24} /></div>
      </div>
    </header>
  );
}
