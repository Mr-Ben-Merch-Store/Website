import { Metadata } from 'next';
import { getShirts } from '@/lib/mongodb/admin';



async function shirts() {
    let shirts = await getShirts();

    let html = shirts.map((item: any, index: any) => (
        <div key={index}>
            <div className="bg-gradient-to-r from-gray-600 to-black min-w-36 rounded-lg shadow-sm">
                <h2 className="text-lg m-3 p-3">{String(item._id)}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    ));
    return html;
}
export default async function Products() {
    return (
        <>
\            <h2>Current products: </h2>
            <div className="flex m-5 p-5 items-center align-center">
                {await shirts()}
            </div>
        </>
    );
}
