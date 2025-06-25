// Functional Imports
import React, { useEffect, useRef, useState } from "react";

// Style Imports
import styles from "../Main/Main.module.css"

type LoadingProps = {
    onComplete?: React.AnimationEventHandler<HTMLDivElement>;
};

export default function WorkingOnIt({ onComplete }: LoadingProps){
    const [isLoading, setIsLoading] = useState(false);
    const pTagRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if(isLoading || pTagRef.current === null) return;

        const type = (msg: string, speed = 100) => {
            const msgLen = msg.length;
            const contentLen = pTagRef.current?.textContent?.length;

            if(pTagRef.current === null || contentLen === undefined || msgLen === contentLen){
                return
            }

            pTagRef.current.textContent = msg.substring(0, contentLen + 1);
            setTimeout(type, speed, msg, speed);
        }

        // pTagRef.current.textContent = `🚧 Oops! My portfolio website is getting a makeover right now (turns out, building it takes longer than expected!). In the meantime, feel free to check out my GitHub page for my projects — it's definitely less "under construction" than my portfolio. 😅🔧`
        // type("🚧 Oops! My portfolio website is getting a makeover right now (turns out, building it takes longer than expected!).", 5);
    }, [isLoading])

    return (
        <>
            <div className="max-h-screen overflow-hidden [--rotate:50deg] sm:[--rotate:70deg]">
                <div className={`h-[100vh] backdrop-blur-lg opacity-50 custom-linear-gradient-bg-img rotate-[var(--rotate)] scale-[5]`} onAnimationEnd={() => setIsLoading(false)} />
                <div className={"absolute glass-effect rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[50%] " + styles['main-content']}>
                    {!isLoading && (
                        <>
                            <p ref={pTagRef} className="text-4xl lg:text-6xl text-left font-bold italic text-raisin-black m-2.5 font-[IndieFlower]">
                                🚧 Oops! My portfolio website is getting a makeover right now (turns out, building it takes longer than expected!). 
                                <br /> 
                                <br /> 
                                In the meantime, feel free to check out my <a className="hover-underline-animation text-nyanza before:context" href="https://github.com/ManojAvarur">GitHub page</a> for my projects — it's definitely less "under construction" than my portfolio. 😅🔧
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );    
}