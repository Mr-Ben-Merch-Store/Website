import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
};
export default function Fallback() {
    return (
        <>
        <object data="./fallback.txt"></object>
        </>
    );
}
