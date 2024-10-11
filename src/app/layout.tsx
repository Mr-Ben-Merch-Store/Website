import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import BottomBar from '@/app/components/BottomBar';
import type { Viewport } from 'next';

export const viewport: Viewport = {
    themeColor: '#ff9b05',
};
export const metadata: Metadata = {
    title: 'BenMerch',
    description: 'Created by the Mr. Ben Merch Store Club',
    twitter: {
        card: 'summary_large_image',
        title: 'Mr. Ben Merch Store',
        description: 'This website helps provide funds to the Allen CS club.',
        creator: 'Merch Store Club',
        images: ['https://www.bensmerch.org/favicon.ico'], // Must be an absolute URL
    },
    metadataBase: new URL('https://bensmerch.org'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-zinc-900">
                <header>
                    <Navbar />
                </header>
                <main className="text-center min-h-screen">{children}</main>

                <div className="">
                    <BottomBar />
                </div>
            </body>
        </html>
    );
}
