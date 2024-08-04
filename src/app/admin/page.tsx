/*
This file is for the client side login that sends a post request 
to get access to the dashboard. See ../dashboard/.
*/
'use client';
import { useState } from 'react';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function About() {
    const { push } = useRouter();
    const [showInvalid, setInvalid] = useState(false); // For invalid credentials
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // prevent's the default form post thing that forms do
        const formData = new FormData(event.currentTarget); // Get data from the form
        const response = await fetch('/api/admin', {
            method: 'POST',
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password'),
            }),
        }); // Send a response to the api at /api/admin (where authentication is handled)

        const data = await response.json();

        if (!data.loggedIn) {
            // If the post request returns that the user did not log in, it sets the <p> element to notify the user
            // Note: The above has nothing to do with security and is just used for redirecting the user (A JWT token is used instead in middleware to detect login)
            setInvalid(true);
        } else {
            push('/dashboard'); // If the user logged in, redirect to the dashboard
        }
    }
    return (
        <>
            <h1>Admin Panel Login</h1>
            <form
                onSubmit={onSubmit}
                className="flex flex-col m-10 p-10 items-center align-center"
            >
                <label className="text-xl text-green-400">Username</label>
                <input
                    name="username"
                    className="m-5 rounded border-white text-white bg-black p-2 transition ease-in-out delay-75 hover:text-black hover:bg-zinc-50 hover:border-black duration-150"
                    type="text"
                />
                <label className="text-xl text-green-400">Password</label>
                <input
                    name="password"
                    className="m-5 rounded border-white text-white bg-black p-2 transition ease-in-out delay-75 hover:text-black hover:bg-zinc-50 hover:border-black duration-150"
                    type="text"
                />
                <input
                    type="submit"
                    className="border border-white rounded p-3 bg-black text-white m-2"
                    value="Submit"
                />
            </form>

            {showInvalid && <p className="">Invalid Credentials!</p>}
        </>
    );
}
