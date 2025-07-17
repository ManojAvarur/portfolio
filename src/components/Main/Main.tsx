"use client";

import { useEffect, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import final_logo from "../../assets/logos/final-logo.png";
import styles from "./Main.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Main() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* <div className="bg-dark"> */}
                <header className="glass-effect sticky inset-x-0 top-0 z-50 bg-white/1">
                    <nav aria-label="Global" className="overflow-hidden lg:px-8">
                        <div className="flex items-center justify-between p-1.5 lg:hidden">
                            <a href="#" className="">
                                <span className="sr-only">Manoj | Portfolio</span>
                                <img alt="Logo" src={final_logo} className="h-19 w-20" />
                            </a>

                            <div className="relative">
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className={`bg-nyanza absolute inline-flex h-12 w-12 rounded-full opacity-75 ${styles.ping}`}
                                    ></span>
                                </span>

                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(true)}
                                    className="relative z-10 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-2.5"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="text-nyanza size-7" />
                                </button>
                            </div>
                        </div>

                        <div className="hidden w-full items-center justify-center gap-x-20 lg:flex xl:gap-x-30">
                            <a
                                href="#"
                                className="text-nyanza hover-underline-animation text-xl font-semibold hover:cursor-pointer xl:text-2xl"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-nyanza hover-underline-animation text-xl font-semibold hover:cursor-pointer xl:text-2xl"
                            >
                                experience
                            </a>
                            <a href="#" className="-m-1.5 p-1.5 hover:cursor-pointer">
                                <span className="sr-only">Manoj | Portfolio</span>
                                <img alt="Logo" src={final_logo} className="h-24 w-25" />
                            </a>
                            <a
                                href="#"
                                className="text-nyanza hover-underline-animation text-xl font-semibold hover:cursor-pointer xl:text-2xl"
                            >
                                projects
                            </a>
                            <a
                                href="#"
                                className="text-nyanza hover-underline-animation text-xl font-semibold hover:cursor-pointer xl:text-2xl"
                            >
                                contact
                            </a>
                        </div>
                    </nav>
                    <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                </header>
            {/* </div> */}
            <section>
                <div aria-hidden="true" className="absolute inset-x-0 -top-4 -z-10  blur-3xl sm:-top-80 overflow-clip">
                    <div
                        style={{ clipPath: 'clip-path: polygon(50% 0%, 80% 10%, 66% 46%, 100% 70%, 69% 83%, 50% 100%, 31% 69%, 0% 70%, 0% 35%, 69% 82%);',}}
                        className="relative left-[calc(90%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[var(--color-dark-purple)] via-[var(--color-nyanza)] via-[var(--color-bole)] via-[var(--color-chamoisee)] to-[var(--color-raisin-black)] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>

                
            </section>
        </>


    );
    // return (
    //     <>
    //         <div aria-hidden="true" className="absolute inset-x-0 -top-4 -z-10  blur-3xl sm:-top-80">
    //             <div
    //                 style={{ clipPath: 'clip-path: polygon(50% 0%, 80% 10%, 66% 46%, 100% 70%, 69% 83%, 50% 100%, 31% 69%, 0% 70%, 0% 35%, 69% 82%);',}}
    //                 className="relative left-[calc(90%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[var(--color-dark-purple)] via-[var(--color-nyanza)] via-[var(--color-bole)] via-[var(--color-chamoisee)] to-[var(--color-raisin-black)] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
    //             />
    //         </div>

    //         <header className='hidden bg-transparent p-6 text-amber-50'>
    //             <nav className="lg:px-8" aria-label="Global">
    //                 {/* // about
    //                 // experience
    //                 // logo
    //                 // projects
    //                 // contact  */}

    //                 <ul className="flex items-center justify-evenly">
    //                     <li className="">
    //                         <a href='#'>About</a>
    //                     </li>
    //                     <li className="">
    //                         <a href='#'>Experience</a>
    //                     </li>
    //                     <li className="">
    //                         <a href='#'>Logo</a>
    //                     </li>
    //                     <li className="">
    //                         <a href='#'>Projects</a>
    //                     </li>
    //                     <li className="">
    //                         <a href='#'>Contact</a>
    //                     </li>
    //                 </ul>
    //             </nav>
    //         </header>
    //     </>
    // )
}
