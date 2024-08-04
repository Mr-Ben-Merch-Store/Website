import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import BottomBar from '@/components/BottomBar';
export const metadata: Metadata = {
    title: 'BenMerch',
    description: 'Created by the Mr. Ben Merch Store Club',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-zinc-900">
                <header>
                    <a
                        className="text-center underline text-emerald-400 bg-emerald-900 block p-3 text-lg"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf6iXstrTxNUmbAa-qJzJ3uC-TM6Z5IR7FIXPfo379ju6VaBg/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
                    >
                        Interested in our Merch store? Fill out this interest form!
                    </a>
                    <Navbar />
                </header>
                <main className="text-center mt-12 min-h-screen">{children}</main>

                <div className="">
                    <BottomBar />
                </div>
            </body>
        </html>
    );
}
