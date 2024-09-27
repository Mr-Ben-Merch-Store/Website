import Image from 'next/image';
import { Metadata } from 'next';
import Products from '../components/Products';
export const metadata: Metadata = {
    title: 'Store',
};

export default function store() {
    return (
        <>
            <h1>Store</h1>
            <Products/>
        </>
    );
}
