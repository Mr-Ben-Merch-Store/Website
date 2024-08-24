import { Metadata } from 'next';
import { getShirts } from '@/lib/mongodb/admin';

export const metadata: Metadata = {
    title: 'Dashboard',
};

async function shirts() {
    let shirts = await getShirts();

    let html = shirts.map((item: any, index: any) => (
        <div key={index}>
            <h1 className="text-sm">{String(item._id)}</h1>
            <p>{item.description}</p>
        </div>
    ));
    return html;
}

export default async function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <h2>Current products: </h2>
            {await shirts()}
            <h2>Add a Shirt</h2>
        </>
    );
}
