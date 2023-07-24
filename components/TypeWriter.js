import React, { useState, useEffect } from 'react';

export default function TypeWriter({ appendClass, hats, prefix, startDelay }) {
    // Outer container base class + append custom class
    let className = "flex flex-col gap-4";
    if (appendClass) className += " " + appendClass;

    // Typewriter effect base class
    const typeWriterClass = "font-bold border-b-2 border-b-blue-400 border-r-2 pr-1"
        + "animate-cursor overflow-hidden whitespace-nowrap transition-[width] ease-in-out duration-1000 mr-auto";

    // State of current hat index
    const [currentHat, setCurrentHat] = useState(0);
    // State to toggle word collapse effect
    const [collapseClass, setCollapseClass] = useState(" w-0");

    useEffect(() => {
        // Function to increment the hat index and change the displayed text
        const incrementHat = async () => {
            // Set the width to 0 - transition duration is 1000ms
            setCollapseClass(" w-0");
            setTimeout(() => {
                /**
                 * After 1100ms, change the displayed text while the div
                 * is collapsed by incrementing the index
                 */
                setCurrentHat(oldVal => {
                    let hatIndex;
                    if (oldVal >= hats.length - 1) {
                        hatIndex = 0;
                    } else {
                        hatIndex = oldVal + 1;
                    }
                    return hatIndex;
                });
            }, 1100);
            // After 1000ms, set width to 100% - transition duration is 1000ms
            setTimeout(() => {
                setCollapseClass(" w-full");
            }, 1000);
        };

        // Start typewriter effect after the specified startDelay (in milliseconds)
        const startTypewriter = () => {
            setTimeout(() => {
                // Initial start of the typewriter effect
                setCollapseClass(' w-full');

                // Interval timer to change text every 2500ms
                const id = setInterval(incrementHat, 2500);

                // Cleanup interval timer
                return () => clearInterval(id);
            }, startDelay); // Set the start delay here (in milliseconds)
        };

        // Call the function to start the typewriter effect after the delay
        startTypewriter();

    }, [startDelay]); // Include startDelay in the dependency array

    return (
        <div className={className}>
            <div className="flex gap-2 text-2xl md:text-4xl mx-auto">
                <div className="shrink-0 whitespace-nowrap ml-auto">
                    {prefix}
                    {hats[currentHat].prep ? ` ${hats[currentHat].prep} ` : ''}
                </div>
                <div className={`${typeWriterClass}${collapseClass}`}>{hats[currentHat].suffix}</div>
            </div>
        </div>
    );
}
