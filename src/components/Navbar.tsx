import Link from 'next/link';
import React from 'react';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return (
        <nav className="bg-zinc-950 p-4">
            <ul className="flex justify-between text-emerald-400 mx-10">
                <div className="flex items-center space-x-6 text-2xl">
                    <li>
                        <Link href=".">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/store">Store</Link>
                    </li>
                </div>

                <li>
                    <Link href="/cart">
                        <ShoppingCartIcon className="w-10 h-10" />
                    </Link>
                </li>

                
            </ul>
        </nav>
    );
}
