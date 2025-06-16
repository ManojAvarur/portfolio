// Functional Imports
import React from "react";

// Style Imports
import styles from "./Loading.module.css"

type LoadingProps = {
    onComplete?: React.AnimationEventHandler<HTMLDivElement>;
};

export default function Loading({ onComplete }: LoadingProps){

    return (
        <div className="max-h-screen overflow-hidden [--rotate:50deg]  sm:[--rotate:70deg]">
            <div className={`h-[100vh] backdrop-blur-lg opacity-50 ${styles.backdrop}`} onAnimationEnd={onComplete} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className={`${styles.logo} glass-effect m-100 p-1 rounded-2xl [--logo-stroke-width:4] w-xs sm:w-lg`} width="594" height="209" viewBox="0 0 594 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className="stroke-(length:--logo-stroke-width)" y1="-0.5" x2="324.24" y2="-0.5" transform="matrix(0.770994 -0.636843 0.586538 0.809922 1 207.82)" />
                    <line className="stroke-(length:--logo-stroke-width)" y1="-0.5" x2="74.4846" y2="-0.5" transform="matrix(0.999803 0.0198655 -0.0174177 0.999848 250.517 1)" />
                    <path className="stroke-(length:--logo-stroke-width)" d="M325 66L323.988 209" />
                    <line className="stroke-(length:--logo-stroke-width)" y1="-0.5" x2="179.625" y2="-0.5" transform="matrix(0.741801 0.67062 -0.570361 0.821394 324 2)" />
                    <line className="stroke-(length:--logo-stroke-width)" y1="-0.5" x2="180.733" y2="-0.5" transform="matrix(0.75613 -0.654421 0.518742 0.854931 457 120.276)" />
                    <line className="stroke-(length:--logo-stroke-width)" y1="-0.5" x2="174.48" y2="-0.5" transform="matrix(0.756532 0.653957 -0.553128 0.833096 325 65.8974)" />
                    <line className="stroke-(length:--logo-stroke-width)" y1="-0.5" x2="181.182" y2="-0.5" transform="matrix(0.756145 -0.654404 0.518725 0.854941 457 180)" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="515.68" y1="208.616" x2="593.68" y2="143.616" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="593.5" y1="2" x2="593.5" y2="61" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="277.5" y1="53" x2="277.5" y2="157" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="325" y1="208.5" x2="151" y2="208.5" />
                    <line className="stroke-(length:--logo-stroke-width)" y1="-0.5" x2="81.7701" y2="-0.5" transform="matrix(0.770985 -0.636854 0.586549 0.809914 151.03 209)" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="214" y1="156.5" x2="277" y2="156.5" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="93.7827" y1="207.437" x2="277.679" y2="53.6165" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="1" y1="207.5" x2="94" y2="207.5" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="593.5" y1="144" x2="593.5" y2="209" />
                    <line className="stroke-(length:--logo-stroke-width)" x1="516" y1="208.5" x2="593" y2="208.5" />
                </svg>
            </div>
        </div>
    );    
}