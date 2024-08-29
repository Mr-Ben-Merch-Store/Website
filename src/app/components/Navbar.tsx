"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-zinc-950 p-4 relative">
            <div className="flex items-center justify-between mx-10">
                <button onClick={toggleMenu} className="lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-20">
                    {isOpen ? <XMarkIcon className="w-10 h-10 text-textLight" /> : <Bars3Icon className="w-10 h-10 text-textLight" />}
                </button>

                <div className="flex items-center space-x-4 text-2xl text-textLight flex-1">
                    <li className="list-none">
                        <Link href=".">Home</Link>
                    </li>
                    <li className="lg:flex hidden">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="lg:flex hidden">
                        <Link href="/store">Store</Link>
                    </li>
                </div>

                <div className="flex items-center lg:hidden absolute right-0 ml-auto pr-4">
                    <Link href="/cart">
                        <ShoppingCartIcon className="w-10 h-10 text-textLight" />
                    </Link>
                </div>
                <div className="hidden lg:flex items-center">
                    <Link href="/cart">
                        <ShoppingCartIcon className="w-10 h-10 text-textLight" />
                    </Link>
                </div>
            </div>

            <ul className={`absolute top-16 left-0 bg-zinc-950 ${isOpen ? 'block' : 'hidden'} text-textLight transition-all duration-300 ease-in-out z-10 w-auto max-w-xs p-4`}>
                <li className="py-4 border-b border-gray-700">
                    <Link href="/">Home</Link>
                </li>
                <li className="py-4 border-b border-gray-700">
                    <Link href="/about">About</Link>
                </li>
                <li className="py-4 border-b border-gray-700">
                    <Link href="/store">Store</Link>
                </li>
            </ul>
        </nav>
    );
}
