'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NavBar ({
  activeItem,
  textColor = "text-dark-primary",
  textHoverColor = "text-dark-gray"
}) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: 'https://sites.google.com/view/dreambigcontent/home' },
    { name: 'Resume', href: 'Resume' },
    { name: 'Gallery', href: 'Gallery' },
    { name: 'Contact', href: 'Contact' }
  ];

  const navBaseStyle = 'text-base font-open-sans px-3 py-1';

  return (
    <nav className="w-full py-3 pr-7 flex">
      {/* Hamburger */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setOpen(o => !o)}
      >
        {open
          ? <XMarkIcon className={`h-6 w-6 ${textColor}`} />
          : <Bars3Icon className={`h-6 w-6 ${textColor}`} />
        }
      </button>

      {/* Desktop */}
      <ul className="hidden md:flex space-x-4">
        {navItems.map(item => {
          const isActive = activeItem === item.name;
          const activeClasses = isActive
            ? "bg-dark-primary text-white"
            : `${textColor} hover:${textHoverColor}`;
          return (
            <li key={item.name} className={`${navBaseStyle} ${activeClasses}`}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>

      {/* Mobile dropdown */}
      {open && (
        <ul className="
            fixed inset-x-0 top-0
            pt-16
            bg-white shadow-md z-50
            space-y-1
            rounded-b-lg
          ">
          {/* Exit icon */}
          <li className="flex justify-end pr-4">
            <button
              onClick={() => setOpen(false)}
              className="p-2 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6 text-dark-primary" />
            </button>
          </li>

          {navItems.map(item => {
            const isActive = activeItem === item.name;
            const activeCls = isActive
              ? 'bg-dark-primary text-white'
              : `${textColor} hover:bg-gray-100`;
            return (
              <li key={item.name} className={`${navBaseStyle} ${activeCls}`}>
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
