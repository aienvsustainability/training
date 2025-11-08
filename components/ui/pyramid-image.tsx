"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function PyramidImage() {
    const pyramidRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (pyramidRef.current) {
                pyramidRef.current.style.transform = "scale(1)"
                pyramidRef.current.style.opacity = "1"
            }
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="absolute bottom-2 -left-10 md:left-6 flex items-center justify-center">
            <div
                ref={pyramidRef}
                style={{
                    transform: "scale(0)",
                    opacity: 0,
                    transition: "transform 1s ease-out, opacity 1s ease-out",
                }}>
                <Image
                    src="/graphics/pyramid.png"
                    alt="pyramid"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className="pointer-events-none select-none animate-float size-40 md:size-80 transform object-cover"
                />
            </div>
        </div>
    )
}
