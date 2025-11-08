"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function RotatingImage() {
    const cogRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cogRef.current) {
                cogRef.current.style.transform = "scale(1)"
                cogRef.current.style.opacity = "1"
            }
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="absolute top-0 md:top-2 -right-4 md:right-4 flex items-center justify-center">
            <div
                ref={cogRef}
                style={{
                    transform: "scale(0)",
                    opacity: 0,
                    transition: "transform 1s ease-out, opacity 1s ease-out",
                }}>
                <Image
                    src="/graphics/cog.png"
                    alt="cog"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className="size-40 md:size-100 pointer-events-none select-none transform object-cover animate-spin"
                />
            </div>
        </div>
    )
}
