import { cn } from "@/lib/utils"
import React from "react"

const Footer = () => {
    return (
        <footer className="relative h-80 md:h-120 overflow-hidden flex w-full flex-col items-center justify-between rounded-t-[60px] bg-white py-10">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:80px_80px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
            <div className="z-10 max-w-6xl flex flex-col items-center justify-center w-full h-full">
                <h3 className="text-4xl md:text-8xl max-w-6xl w-full font-robson text-center text-yellow-450 text-shadow-custom text-shadow-black font-extrabold [-webkit-text-stroke:1px_black] uppercase">Let's unlock your potential with <span className="md:text-9xl font-robson font-extrabold text-orange-500 text-shadow-custom text-shadow-orange-700">CAIES Foundation</span></h3>
                <p className="mt-6 text-center text-neutral-400 tracking-wide max-w-3xl px-4 text-sm font-medium">Copyright © {new Date().getFullYear()} CAIES Foundation. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
