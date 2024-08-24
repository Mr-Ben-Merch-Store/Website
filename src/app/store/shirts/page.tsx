import Image from 'next/image';
import { Metadata } from 'next';
import ShopCard from '@/app/components/ShopCard';
import products from '../../../../public/products.json';

export const metadata: Metadata = {
    title: 'Shirts',
};

export default function shirts() {
    return (
        <>
            <h1>Hi</h1>
        </>
    );
}
