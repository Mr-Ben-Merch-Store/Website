import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <>
        
            <h1>About</h1>
            <hr/>
            <div className="max-w-2xl m-auto">
                <section className="my-20">
                    <h2>What is the Mr. Ben Merch Store?</h2>
                    <p className="text-left my-10">
                        The Mr. Ben Merch store is created by students for students. The Merch
                        Store provides funds to the Computer Science Club as a whole. All
                        merch is to follow school rules. If you wish to contribute, please
                        join our <a href="https://discord.gg/E8NzVDaAS9">discord server</a>.
                    </p>
                </section>
                <hr className="bg-textMid h-1 border-none"/>
                    <section className="my-20">
                    <h2>Club Leadership</h2>
                    <h3>Current Club President</h3>
                    <p>Julian</p>
                    <h3>Current Club Vice President</h3>
                    <p>James</p>
                </section>
            </div>
        </>
    );
}
