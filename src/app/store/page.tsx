import Image from 'next/image';
import { Metadata } from 'next';
import products from '../../../public/products.json';

export const metadata: Metadata = {
    title: 'Store',
};

export default function store() {
    var p = products.products;
    var products_load = p.map((item, index) => (item.map((item1, index1) =>
    <div className="container mx-auto px-0" key={index}>
        <h2>{item1.name}</h2>

        <Image 
                        alt="Mr. Ben Live Reacting"
                        width="100"
                        height="100"
                        className="object-contain hover:object-scale-down"
                        src={item1.img}/>
        <p>{item1.content}</p>
    </div>
    )));

    var html = (
        <> 
            <h1>Store</h1>
            <div>
            {products_load}
            </div>
        </>
    );


    return html;  // Here's what the empty tag fragment means if anyone needs it: https://stackoverflow.com/questions/59751733/react-native-what-exactly-is-the-empty-component
}
