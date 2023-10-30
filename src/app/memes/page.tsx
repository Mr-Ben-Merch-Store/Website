import Image from 'next/image';
import mrBenImage from '@/../public/MRBENLIVEREACTION.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Memes',
};

export default function Memes() {
    return (
        <>
            <h1>Congradulations! You found the meme webpage!</h1>
            <h2>Great job buddy!</h2>
            <p> The next piece of the puzzle:</p>
            <p className="break-words w-1/3 m-auto text-left">
                VGhlIGJlc3Qgc2NpZW5jZSB0ZWFjaGVyIGF0IHRoZSBoaWdoIHNjaG9vbApUaGUgZ3JlYXRlc3Qgb25lIG9mIHRoZW0gYWxsCkkgdGhpbmsgaGUncyBiZWF0ZW4gSmltbXkgYXQgdGhlIGdhbWUgcG9vbApOZXZlciBkaWQgSmltbXkgYmF3bAoKSGUgaGVscHMgb3RoZXJzIHdpdGggdGhlaXIgd29yawpIZSBhY3R1YWxseSB0ZWFjaGVzCkhlIGRvZXNuJ3QgZWF0IHBvcmsgKHByb2JhYmx5KQpIZSBhbHdheXMgZ2l2ZXMgZ29vZCBzcGVlY2hlcwoKSGUncyBnb29kIGF0IG1hdGgKSGUgZG9lc24ndCBwbGF5IGdhbWVzClRoYXQncyBqdXN0IGEgZmFjdApIZSBpc24ndCBsYW1lCgooV2hvIGlzIHRoaXMgcGVyc29uPykKKGZvcm1hdCB3aXRoIG5vIHNwYWNlcywgbm8gY2Fwcywgbm8gcGVyaW9kcyk=
            </p>
            <br />
            <p className="mb-10">Hint: CYBER CHEF?!</p>
            <Image
                src={mrBenImage}
                alt="Mr. Ben Live Reacting"
                width="800"
                className="m-auto w-1/3"
            />
        </>
    );
}
