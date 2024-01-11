import Image from 'next/image';
import { Metadata } from 'next';
import ShopCard from '@/components/ShopCard';
import products from '../../../public/products.json';

export const metadata: Metadata = {
    title: 'Store',
};

export default function store() {

    return (
        <> 
            <h1>Store</h1>
            
            <ShopCard></ShopCard>
        </>
    );


}
