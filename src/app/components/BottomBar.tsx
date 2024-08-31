import Link from 'next/link';
import React from 'react';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function BottomBar() {
    return (
        <footer className="static bottom-0 bg-zinc-950 p-4 z-5 w-full justify-end">
            Developed by the Mr. Ben Merch Store club at Allen High School. To contribute,
            see <a className="text-blue-500" href="https://discord.gg/E8NzVDaAS9">  our discord server!</a>
        </footer>
    );
}
