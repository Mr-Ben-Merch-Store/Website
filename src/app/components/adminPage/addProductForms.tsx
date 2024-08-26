/* This file is a component used on the admin dashboard to 
submit shirts to the store */

'use client'; // Client side form
import { useState } from 'react';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export function ShirtsForm() {
    const router = useRouter();
    async function submitShirt(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // prevent's the default form post thing that forms do
        const formData = new FormData(event.currentTarget); // Get data from the form
        const response = await fetch('/api/mongo/addProduct', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                description: formData.get('description'),
                imageURL: formData.get('imageURL'),
            }),
        }); // Send a response to the api at /api/admin (where authentication is handled)

        router.refresh();
    }
    return (
        <form
            className="flex flex-col m-5 p-5 items-center align-center"
            onSubmit={submitShirt}
        >
            <label className="text-xl text-green-400">Shirt Name</label>
            <input
                name="name"
                className="m-5 rounded border-white text-white bg-black p-2 transition ease-in-out delay-75 hover:text-black hover:bg-zinc-50 hover:border-black duration-150"
                type="text"
            />
            <label className="text-xl text-green-400">Description</label>
            <input
                name="description"
                className="m-5 rounded border-white text-white bg-black p-2 transition ease-in-out delay-75 hover:text-black hover:bg-zinc-50 hover:border-black duration-150"
                type="text"
            />
            <label className="text-xl text-green-400">imageURL</label>
            <input
                name="imageURL"
                className="m-5 rounded border-white text-white bg-black p-2 transition ease-in-out delay-75 hover:text-black hover:bg-zinc-50 hover:border-black duration-150"
                type="text"
            />
            <input
                type="submit"
                className="border border-white rounded p-3 bg-black text-white m-2"
                value="Upload"
            />
        </form>
    );
}
