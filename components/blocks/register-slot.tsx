"use client"
import React, { useEffect, useState } from "react"
import { SlidingNumber } from "../motion-primitives/sliding-number"
import ShimmerButton from "../ui/shimmerbutton"

const RegisterSlotSection = () => {
    const [time, setTime] = useState({
        hours: "00",
        minutes: "00",
        seconds: "00",
    })

    useEffect(() => {
        const target = new Date(`2026-01-10T00:00:00`)
        const updateCountdown = () => {
            const now = new Date()
            if (now > target) target.setFullYear(target.getFullYear() + 1)

            const diff = target.getTime() - now.getTime()

            // If countdown is complete, set all to 00
            if (diff <= 0) {
                setTime({
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                })
                return
            }

            const hours = Math.floor(diff / (1000 * 60 * 60))
            const minutes = Math.floor((diff / (1000 * 60)) % 60)
            const seconds = Math.floor((diff / 1000) % 60)

            setTime({
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="z-20 flex h-full w-full flex-col items-center justify-center py-6 sm:py-10">
            <div className="bg-yellow-450 flex w-full max-w-6xl flex-col items-center justify-center space-y-4 rounded-xl px-4 py-6 backdrop-blur-md sm:space-y-6 sm:px-8 sm:py-10">
                <h3 className="font-robson leading-primary w-full px-2 text-center text-2xl font-extrabold text-black capitalize sm:text-4xl md:text-5xl lg:text-7xl">
                    One-day{" "}
                    <span className="inline-block rounded-full bg-white p-2">
                        <span className="font-robson rounded-full border-2 border-dashed border-yellow-700 px-4 py-px text-2xl font-extrabold tracking-wide text-yellow-700 sm:text-3xl lg:text-7xl">
                            AI & Data Science
                        </span>
                    </span>{" "}
                    Orientation Program
                </h3>
                <p className="max-w-3xl px-2 text-center text-xs font-medium text-yellow-800/80 sm:text-sm md:text-base">
                    The AI and Data Science One-Day Orientation Program by CAIES
                    Foundation is a dynamic introduction for aspiring students
                    and working professionals, offering hands-on exposure,
                    real-world relevance, and ethical insights to kickstart a
                    meaningful journey in AI and data science.
                </p>
                <div className="mt-4 grid w-full max-w-xs grid-cols-3 items-center justify-center gap-2 text-center sm:mt-6 sm:max-w-sm sm:gap-0 md:max-w-md">
                    <span className="col-span-1 flex w-full flex-col items-center justify-center space-y-1 overflow-hidden text-2xl font-black tracking-tighter text-white sm:space-y-2 sm:text-4xl">
                        <SlidingNumber
                            value={parseInt(time.hours)}
                            padStart={true}
                        />
                        <span className="text-xs font-semibold tracking-wide text-yellow-800/80 uppercase sm:text-sm">
                            Hours
                        </span>
                    </span>
                    <span className="col-span-1 flex w-full flex-col items-center justify-center space-y-1 overflow-hidden border-x border-dashed border-neutral-600 text-2xl font-black tracking-tighter text-white sm:space-y-2 sm:text-4xl">
                        <SlidingNumber
                            value={parseInt(time.minutes)}
                            padStart={true}
                        />
                        <span className="text-xs font-semibold tracking-wide text-yellow-800/80 uppercase sm:text-sm">
                            Minutes
                        </span>
                    </span>
                    <span className="col-span-1 flex w-full flex-col items-center justify-center space-y-1 overflow-hidden text-2xl font-black tracking-tighter text-white sm:space-y-2 sm:text-4xl">
                        <SlidingNumber
                            value={parseInt(time.seconds)}
                            padStart={true}
                        />
                        <span className="text-xs font-semibold tracking-wide text-yellow-800/80 uppercase sm:text-sm">
                            Seconds
                        </span>
                    </span>
                </div>
                <div className="z-20 mt-4 flex w-full items-center justify-center px-2 sm:mt-6">
                    <ShimmerButton
                        href="https://caienvsus.org/contact"
                        className="relative isolate z-20 flex h-14 w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 text-sm font-medium uppercase">
                        Reserve your slot
                    </ShimmerButton>
                </div>
            </div>
        </div>
    )
}

export default RegisterSlotSection
