import Link from 'next/link';
import React from 'react';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Bottombar() {
    return (
        <footer className="static bottom-0 bg-zinc-950 p-4 z-5 w-full justify-end">
            Developed by the Mr. Ben Merch Store club at Allen High School. To contribute
            see
            <a
                className="text-teal-300"
                href="https://github.com/Mr-Ben-Merch-Store/Website"
            >
                {' '}
                our repository
            </a>
            !
        </footer>
    );
}
