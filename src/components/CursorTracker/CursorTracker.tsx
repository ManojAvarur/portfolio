import { useRef, useEffect } from "react"

export default function CursorTracker(){
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function mouseMoveHandler(event: MouseEvent){
            const x = event.clientX;
            const y = event.clientY;
            
            if(divRef.current === null || !window.matchMedia("(pointer: fine)").matches){
                return
            }

            divRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(230, 242, 201, 0.15), rgba(140, 112, 96,  0.15), transparent 80%)`;
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        
        return () => document.removeEventListener('mousemove', mouseMoveHandler)
    }, []);

    return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-3000 transition-all duration-300" ref={divRef} />
}