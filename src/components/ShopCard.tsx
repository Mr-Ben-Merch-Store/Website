import Link from 'next/link';
import React from 'react';
import '../../public/products.json'
import Image from 'next/image';
import { Metadata } from 'next';
import products from '../../public/products.json';

export default function ShopCard() {
    var p = products.products;
    var products_load = p.map((item, index) => (item.map((item1, index1) =>
    <div className="max-w-sm max-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10 justify-items-center" key={index}>
        <h2>{item1.name}</h2>

        <Image 
                        alt="Mr. Ben Live Reacting"
                        width="400"
                        height="400"
                        className="object-contain hover:object-none"
                        src={item1.img}/>
        <p>{item1.content}</p>
    </div>
    )));

    var html = (
        <> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products_load}
            </div>
        </>
    );
        return html; // Here's what the empty tag fragment means if anyone needs it: https://stackoverflow.com/questions/59751733/react-native-what-exactly-is-the-empty-component

}  // Thank you stylo for making this a component
