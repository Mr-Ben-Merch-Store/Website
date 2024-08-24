import React from 'react';
async function submitShirt() {}

export function shirtsForm() {
    return (
        <form
            className="flex flex-col m-5 p-5 items-center align-center"
            onSubmit={submitShirt}
        >
            <input
                name="name"
                className="m-5 rounded border-white text-white bg-black p-2 transition ease-in-out delay-75 hover:text-black hover:bg-zinc-50 hover:border-black duration-150"
                type="text"
            />
            <input
                name="description"
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
