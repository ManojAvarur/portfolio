import { Dialog, DialogPanel } from "@headlessui/react";
import final_logo from "../../assets/logos/final-logo.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./MobileMenu.module.css";
import { useEffect, useRef } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";


type MobileMenuPops = {
    mobileMenuOpen: boolean,
    setMobileMenuOpen: (value: boolean) => void
}

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuPops) {
    const dialogPannelRef = useRef<HTMLDivElement>(null);
    const headerContentRef = useRef<HTMLDivElement>(null);
    const mainContentRef = useRef<HTMLDivElement>(null);

    function animationEndHandler(){
        if(dialogPannelRef.current?.classList.contains(styles.open)){
            headerContentRef.current?.classList.add('animate-slide-in');
            mainContentRef.current?.childNodes.forEach(el => (el as HTMLAnchorElement).classList.add('animate-slide-in'))
            return
        }

        setMobileMenuOpen(false)
    }

    function onCloseHandler(){
        headerContentRef.current?.classList.replace('animate-slide-in', 'animate-slide-out');
        mainContentRef.current?.childNodes.forEach(el => {
            const anchorTag = (el as HTMLAnchorElement);
            anchorTag.style.animationDelay = "0s";
            anchorTag.classList.replace('animate-slide-in', 'animate-slide-out');
        });

        dialogPannelRef.current?.classList.remove(styles.open);
    }

    return (
        <Dialog
            open={mobileMenuOpen}
            onClose={onCloseHandler}
            className="lg:hidden"
        >
            {/* <div className="fixed inset-0 z-50" /> */}
            <div className={`bg-chamoisee transform-gpu max-w-full max-h-full ${styles.menu} ${styles.open}`} ref={dialogPannelRef} onAnimationEnd={animationEndHandler} />
            <DialogPanel>
                <div className="absolute top-0 left-1 z-50 w-full opacity-0" ref={headerContentRef}>
                    <div className="flex items-center justify-between px-5">
                        <a href="https://manoj.dedyn.io">
                            <span className="sr-only">Manoj's Portfolio icon</span>
                            <img alt="AM Logo" src={final_logo} className="w-25 h-auto" />
                        </a>
                        <button
                            type="button"
                            onClick={onCloseHandler}
                            className="-m-2.5 rounded-md p-2.5 text-nyanza cursor-pointer"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-7" />
                        </button>
                    </div>
                </div>
                <div className="absolute text-center top-1/2 left-1/2 z-50 -translate-1/2 [--delaySec:.1s]"  ref={mainContentRef}>
                    <a
                        href="#"
                        className="text-nyanza text-4xl font-semibold block my-10 overflow-hidden opacity-0"
                        style={{ animationDelay: "calc(var(--delaySec) + .0s)" }}
                    >
                        About
                        {/* <ArrowUpRightIcon strokeWidth="3" width="30" className="ml-2 inline" /> */}
                    </a>
                    <a
                        href="#"
                        className="text-nyanza text-4xl font-semibold block my-10 overflow-hidden opacity-0"
                        style={{ animationDelay: "calc(var(--delaySec) + .1s)" }}
                    >
                        experience
                        {/* <ArrowUpRightIcon strokeWidth="3" width="30" className="ml-2 inline" /> */}
                    </a>
                    <a
                        href="#"
                        className="text-nyanza text-4xl font-semibold block my-10 overflow-hidden opacity-0"
                        style={{ animationDelay: "calc(var(--delaySec) + .2s)" }}
                    >
                        projects
                        {/* <ArrowUpRightIcon strokeWidth="3" width="30" className="ml-2 inline" /> */}
                    </a>
                    <a
                        href="#"
                        className="text-nyanza text-4xl font-semibold block my-10 overflow-hidden opacity-0"
                        style={{ animationDelay: "calc(var(--delaySec) + .3s)" }}
                    >
                        contact
                        {/* <ArrowUpRightIcon strokeWidth="3" width="30" className="ml-2 inline" /> */}
                    </a>
                </div>

            </DialogPanel>
        </Dialog>
    )
}

// export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuPops) {
//     return (
//         <Dialog
//             open={mobileMenuOpen}
//             onClose={setMobileMenuOpen}
//             className={`${mobileMenuOpen ? "hiddesn" : "null"} lg:hidden`}
//         >
//             <div className="fixed inset-0 z-50" />
//             <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass-effect bg-raisin-black/50 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//                 <div className="flex items-center justify-between">
//                     <a href="#" className="-m-1.5 p-1.5">
//                         <span className="sr-only">Your Company</span>
//                         <img alt="" src={final_logo} className="h-8 w-auto" />
//                     </a>
//                     <button
//                         type="button"
//                         onClick={() => setMobileMenuOpen(false)}
//                         className="-m-2.5 rounded-md p-2.5 text-nyanza cursor-pointer"
//                     >
//                         <span className="sr-only">Close menu</span>
//                         <XMarkIcon aria-hidden="true" className="size-6" />
//                     </button>
//                 </div>
//                 <div className="mt-6 flow-root">
//                     <div className="-my-6 divide-y divide-gray-500/10">
//                         <div className="space-y-2 py-6">
//                             <a
//                                 href="#"
//                                 className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                             >
//                                 Something
//                             </a>
//                             <a
//                                 href="#"
//                                 className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                             >
//                                 Something
//                             </a>
//                             <a
//                                 href="#"
//                                 className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                             >
//                                 Something
//                             </a>
//                             <a
//                                 href="#"
//                                 className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                             >
//                                 Something
//                             </a>

//                         </div>
//                         {/* <div className="py-6">
//                         <a
//                             href="#"
//                             className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                         >
//                             Log in
//                         </a>
//                         </div> */}
//                     </div>
//                 </div>
//             </DialogPanel>
//         </Dialog>
//     )
// }