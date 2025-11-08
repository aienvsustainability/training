"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"

const links = [
    { href: "#courses", label: "explore courses" },
    { href: "https://caienvsus.org/about/our-vision", label: "About Us" },
    { href: "https://caienvsus.org/contact", label: "Contact" },
    {
        href: "https://caienvsus.org/",
        label: "foundation homepage",
    },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const navLinkClass =
        "text-sm font-medium tracking-wide text-neutral-300 capitalize transition-colors hover:text-white"

    return (
        <header className="fixed top-0 z-50 h-16 w-full overflow-hidden">
            <div
                className={`mx-auto flex h-full w-full items-center justify-center px-6 transition-all duration-300 ${
                    scrolled ? "bg-neutral-950" : "bg-transparent"
                }`}>
                <div className="flex w-full max-w-6xl items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/graphics/logo.webp"
                            alt="CAIES Foundation Logo"
                            sizes="100vw"
                            priority
                            width={0}
                            height={0}
                            className="h-12 w-auto object-contain md:h-10"
                        />
                    </Link>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <Bars3BottomRightIcon className="size-6 text-white" />
                            </SheetTrigger>
                            <SheetContent
                                side="top"
                                className="z-[999] mt-16 h-120 w-full bg-black/90 backdrop-blur-xs">
                                <SheetHeader className="sr-only" />
                                <div className="mt-2 flex w-full flex-col space-y-6 px-8">
                                    {links.map(({ href, label }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            // scroll={false}
                                            className="w-full border-b border-white/15 py-1.5 text-2xl font-medium tracking-wide text-neutral-300 capitalize transition-colors hover:text-white">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden items-center space-x-8 md:flex">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                // scroll={false}
                                className={navLinkClass}>
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}
