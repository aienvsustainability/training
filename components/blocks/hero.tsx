import React from "react"
import Link from "next/link"

const HeroSection = () => {
    return (
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h2 className="font-robson max-w-4xl text-center text-6xl md:text-9xl font-extrabold tracking-wide text-white">
                    Stay{" "}
                    <span className="font-robson font-extrabold text-transparent [-webkit-text-stroke:1px_white]">
                        ahead
                    </span>{" "}
                    in the{" "}
                    <span className="text-shadow-custom font-robson font-extrabold text-orange-600 [-webkit-text-stroke:1px_black] text-shadow-orange-300">
                        AI-First
                    </span>{" "}
                    World
                </h2>
                <p className="mt-4 max-w-2xl px-4 text-center text-base text-neutral-200 sm:text-lg md:text-2xl">
                    Build hands-on capabilities that translate directly into
                    workplace advantage & tangible outcomes.
                </p>
            </div>
            <div className="mt-6 flex w-full max-w-lg flex-col items-center justify-center space-y-4">
                <Link
                    href="/"
                    className="flex h-12 w-full items-center justify-center rounded-none bg-orange-500 px-4 text-sm font-medium tracking-wide text-white sm:px-6 sm:text-base">
                    Explore Courses
                </Link>
                <Link
                    href="/"
                    className="flex h-12 w-full items-center justify-center backdrop-blur-xs bg-white/20 px-4 text-sm font-medium tracking-wide text-white sm:px-6 sm:text-base">
                    Invite Us
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
