import Link from 'next/link';
import React from 'react';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Bottombar() {
    return (
        <nav className="absolute bg-zinc-950 p-4 static bottom-0 left-0 right-0 z-5 w-full">
            <ul className="flex justify-between text-emerald-400 mx-10">
                <div className="flex items-center space-x-6 ">
                    <li>
                    Developed by the Allen High School Web Development 
                    looking to contribute learn more at our websites github page <a href ="https://github.com/Mr-Ben-Merch-Store/Website">HERE</a>!  
                    </li>
                </div>
                
            </ul>
        </nav>
    );
}
