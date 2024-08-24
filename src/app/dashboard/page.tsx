import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Current products: </h2>
            <h2>Add a product</h2>
            <form></form>
        </>
    );
}
