'use client';

import { useEffect } from 'react';

export default function SmoothCursor() {
    useEffect(() => {
        const cursor = document.getElementById('magicMouseCursor');
        const pointer = document.getElementById('magicPointer');

        // variables
        let pointerX = 0;
        let pointerY = 0;
        let targetX = 0;
        let targetY = 0;

        // update the position of the cursor and pointer
        const onMouseMove = (e: MouseEvent) => {
            //  update the small cursor to the mouse position
            if (cursor) {
                cursor.style.left = `${e.clientX}px`; 
                cursor.style.top = `${e.clientY}px`; 
            }
            //  target position for the larger circle
            targetX = e.clientX;
            targetY = e.clientY;
        };

        // smooth effect i think
        const followPointer = () => {
            pointerX += (targetX - pointerX) * 0.1; // Adjust the 0.1 for faster/slower following
            pointerY += (targetY - pointerY) * 0.1;
            if (pointer) {
                pointer.style.left = `${pointerX - 20}px`; // Center the pointer
                pointer.style.top = `${pointerY - 20}px`;  // Center the pointer
            }
            requestAnimationFrame(followPointer);
        };

        // event listener for mouse move
        document.addEventListener('mousemove', onMouseMove);


        followPointer();

        // cleanup function
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            {/* Small white dot */}
            <div
                id="magicMouseCursor"
                style={{
                    width: '5px',
                    height: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderRadius: '50%',
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    left: '0px',
                    top: '0px',   
                    transition: 'transform 0.15s ease-out',
                }}
            ></div>

            {/* Larger outline circle */}
            <div
                id="magicPointer"
                style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid rgba(255, 255, 255, 1)',
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    left: '0px',
                    top: '0px', 
                    transition: 'transform 0.3s ease-out',
                }}
            ></div>
        </>
    );
}
