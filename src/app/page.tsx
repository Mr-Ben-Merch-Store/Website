import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
};
export default function Home() {
    return (
        <>
            <h1>Welcome to the Mr. Ben Merch Store</h1>
            <hr />
            <h2 className="my-80 text-textLight">Coming Soon!!</h2>
        </>
    );
}
