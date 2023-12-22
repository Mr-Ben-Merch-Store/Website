import { Metadata } from 'next';
import products from '../../../public/products.json';

export const metadata: Metadata = {
    title: 'Store',
};

export default function store() {
    var p = products.products
    var html = (
        <> 
            <h1>Store</h1>
            
            {p.map((item, index) => (item.map((item1, index1) =>
            <div>
                <h2>{item1.name}</h2>
            </div>
            )
            ))}
            
        </>
    )


    return html;  // Here's what the empty tag fragment means if anyone needs it: https://stackoverflow.com/questions/59751733/react-native-what-exactly-is-the-empty-component
}
