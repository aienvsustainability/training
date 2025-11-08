import React from "react"
import "./shimmer-button.css"
import Link from "next/link"

interface ShimmerButtonProps {
    href: string
    children: React.ReactNode
    className?: string
}

const ShimmerButton = ({
    href,
    children,
    className = "",
}: ShimmerButtonProps) => {
    return (
        <Link href={href} className={`shiny-cta ${className}`}>
            {children}
        </Link>
    )
}

export default ShimmerButton
