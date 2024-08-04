'use client';
import { FormEvent } from 'react';

export default function About() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/admin', {
            method: 'POST',
            body: formData,
        });
        // Handle response if necessary
        const data = await response.json();
        alert(data.hello);
    }
    return (
        <>
            <h1>Admin Panel Login</h1>
            <form
                onSubmit={onSubmit}
                className="flex flex-col m-10 p-10 items-center align-center"
            >
                <label htmlFor="username">Username</label>
                <input className="m-5" type="text" />
                <label>Password</label>
                <input className="m-5" type="text" />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
