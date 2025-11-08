"use client"
import { useRef, ReactNode } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParagraphProps {
    children: ReactNode
    className?: string
}

export default function Paragraph({ children, className }: ParagraphProps) {
    const container = useRef<HTMLParagraphElement>(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    })
    const elements = Array.isArray(children) ? children : [children]

    return (
        <p
            ref={container}
            className={cn("flex w-full h-full text-left flex-wrap text-xl leading-none text-white", className)}>
            {elements.map((child, index) => {
                if (typeof child === "string") {
                    const words = child.split(" ")
                    return words.map((word, i) => {
                        const start = i / words.length
                        const end = start + 1 / words.length
                        return (
                            <Word
                                key={`${index}-${i}`}
                                progress={scrollYProgress}
                                range={[start, end]}>
                                {word}
                            </Word>
                        )
                    })
                }
                return <span key={index}>{child}</span>
            })}
        </p>
    )
}

interface WordProps {
    children: ReactNode
    progress: MotionValue<number>
    range: [number, number]
}

const Word = ({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className="relative mt-3 mr-2">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    )
}
