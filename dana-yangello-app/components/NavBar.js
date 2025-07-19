'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NavBar ({ activeItem }) {
    const [open, setOpen] = useState(false);
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: 'https://sites.google.com/view/dreambigcontent/home' },
        { name: 'Resume', href: 'Resume' },
        { name: 'Gallery', href: 'Gallery' },
        { name: 'Contact', href: 'Contact' }
    ];

    //Common styling for every nav item
    const navBaseStyle = 'text-base font-open-sans px-3 py-1';
    return (
        <nav className="w-full py-3 pr-7 flex">
            {/* Hamburger button (shown on small only) */}
            <button
                className="md:hidden p-2 focus:outline-none"
                onClick={() => setOpen(o => !o)}
            >
                {open ? <XMarkIcon className="h-6 w-6 text-dark-primary" /> : <Bars3Icon className="h-6 w-6 text-dark-primary" />}
            </button>
            {/* Desktop menu (hidden on small) */}
            <ul className="hidden md:flex space-x-4">
                {navItems.map(item => {
                    const isActive = activeItem === item.name;
                    const activeClasses = isActive ? "bg-dark-primary text-white" : "text-dark-primary hover:text-dark-gray";
                    return (
                        <li key={item.name} className={`${navBaseStyle} ${activeClasses}`}>
                            <a href={item.href}>{item.name}</a>
                        </li>                          
                    );
                })}
            </ul>

            {/* Mobile menu (shown when open) */}
            {open && (
                <ul className="md:hidden absolute top-full right-0 w-48 bg-white shadow-lg rounded-b overflow-hidden">
                {navItems.map(item => {
                    const isActive = activeItem === item.name;
                    const activeCls = isActive
                    ? 'bg-dark-primary text-white'
                    : 'text-dark-primary hover:bg-gray-100';
                    return (
                    <li key={item.name} className={`${navBase} ${activeCls}`}>
                        <a href={item.href} onClick={() => setOpen(false)}>
                        {item.name}
                        </a>
                    </li>
                    );
                })}
                </ul>
            )}
        </nav>
    );
};