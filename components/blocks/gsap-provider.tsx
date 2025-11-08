"use client"
import React, { useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useGSAP } from "@gsap/react"

interface GsapProviderProps {
    children: ReactNode
}

const GsapProvider = ({ children }: GsapProviderProps) => {
    const main = useRef<HTMLDivElement>(null)
    const smoother = useRef<ScrollSmoother | null>(null)

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    useGSAP(
        () => {
            smoother.current = ScrollSmoother.create({
                smooth: 2,
                effects: true,
                smoothTouch: 0.1,
                normalizeScroll: true,
            })
        },
        {
            scope: main,
        }
    )

    return (
        <main className="relative min-h-screen w-full" ref={main}>
            <div id="smooth-content">
                {children}
            </div>
        </main>
    )
}

export default GsapProvider
