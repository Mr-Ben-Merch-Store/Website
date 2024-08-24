import Image from 'next/image';
import { Metadata } from 'next';
import ShopCard from '@/app/components/ShopCard';
import products from '../../../public/products.json';

export const metadata: Metadata = {
    title: 'Store',
};

export default function store() {
    return (
        <>
            <h1>Store</h1>
            <hr></hr>
            <ShopCard></ShopCard>
        </>
    );
}
