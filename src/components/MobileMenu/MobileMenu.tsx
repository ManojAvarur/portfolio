import { Dialog, DialogPanel } from "@headlessui/react";
import final_logo from "../../assets/logos/final-logo.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./MobileMenu.css";
import { useEffect, useRef } from "react";


type MobileMenuPops = {
    mobileMenuOpen: boolean,
    setMobileMenuOpen: (value: boolean) => void
}

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuPops) {
    const dialogPannelRef = useRef<HTMLElement>(null);

    function animationEndHandler(){
        if(dialogPannelRef.current?.classList.contains('open')){
            return
        }

        setMobileMenuOpen(false)
    }

    function onCloseHandler(){
        dialogPannelRef.current?.classList.toggle('open');
    }

    return (
        <Dialog
            open={mobileMenuOpen}
            onClose={onCloseHandler}
            className="lg:hidden"
        >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className={`fixed inset-0 z-50 w-full overflow-y-auto bg-yellow-200 menu open`} ref={dialogPannelRef} onAnimationEnd={animationEndHandler}>
                
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