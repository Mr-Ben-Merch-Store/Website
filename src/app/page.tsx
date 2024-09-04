import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Home',
};

export default function Home() {
    return (
        <>
            <h1>Welcome to Mr.Ben&apos;s Merch Store</h1>
            <hr />
            <h2 className="my-20 text-textLight text-center">Concept designs:</h2>
        
            <div className="w-1/2 mx-auto overflow-x-auto scrollable-gallery">
                <div className="whitespace-nowrap scroll-smooth snap-x snap-mandatory flex py-10">
                    <div className="inline-block w-64 h-64 m-4 bg-transparent snap-center flex-shrink-0">
                        <Image 
                            src="/gallery/bettereagle_chip.png" 
                            alt="Concept 1" 
                            className="w-full h-full object-cover rounded-lg" 
                            height={500}
                            width={500}   
                        />
                    </div>
                    <div className="inline-block w-64 h-64 m-4 bg-transparent snap-center flex-shrink-0">
                        <Image 
                            src="/gallery/spacecsdesign.jpg" 
                            alt="Concept 2" 
                            className="w-full h-full object-cover rounded-lg" 
                            height={500}
                            width={500}
                            />
                    </div>
                    <div className="inline-block w-64 h-64 m-4 bg-transparent snap-center flex-shrink-0">
                        <Image 
                            src="/gallery/mrbenword.png" 
                            alt="Concept 3" 
                            className="w-full h-full object-cover rounded-lg" 
                            height={500}
                            width={500}
                        />
                    </div>
                    <div className="inline-block w-64 h-64 m-4 bg-transparent snap-center flex-shrink-0">
                        <Image 
                            src="/ProdImages/shirt1.png" 
                            alt="Concept 4" 
                            className="w-full h-full object-cover rounded-lg" 
                            width={500}
                            height={500}
                            />
                    </div>
                </div>
            </div>
        </>
    );
}
