import { Metadata } from 'next';
import { getShirts } from '@/lib/mongodb/admin';
import { ShirtsForm } from '@/app/components/adminPage/addProductForms';

export const metadata: Metadata = {
    title: 'Dashboard',
};

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

export default async function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Current products: </h2>
            <div className="flex flex-col m-5 p-5 items-center align-center">
                {await shirts()}
            </div>
            <h2>Add a Shirt</h2>
            <ShirtsForm />
        </>
    );
}
