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
        const target = new Date(`${new Date().getFullYear()}-11-01T00:00:00`)
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
            <div className="flex w-full max-w-6xl flex-col items-center justify-center space-y-4 sm:space-y-6 rounded-xl bg-yellow-450 backdrop-blur-md py-6 px-4 sm:py-10 sm:px-8">
                <h3 className="font-robson text-black leading-primary w-full text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold capitalize px-2">
                    One-day <span className="bg-white inline-block rounded-full p-2">
                            <span className="font-robson rounded-full border-2 border-dashed border-yellow-700 px-4 py-px text-2xl font-extrabold tracking-wide text-yellow-700 sm:text-3xl lg:text-7xl">AI & Data Science</span>
                    </span> Orientation Program
                </h3>
                <p className="max-w-3xl text-center text-xs sm:text-sm md:text-base font-medium text-yellow-800/80 px-2">
                    The AI and Data Science One-Day Orientation Program by CAIES
                    Foundation is a dynamic introduction for aspiring students
                    and working professionals, offering hands-on exposure,
                    real-world relevance, and ethical insights to kickstart a
                    meaningful journey in AI and data science.
                </p>
                <div className="mt-4 sm:mt-6 grid w-full max-w-xs sm:max-w-sm md:max-w-md grid-cols-3 items-center justify-center text-center gap-2 sm:gap-0">
                    <span className="col-span-1 flex w-full overflow-hidden flex-col items-center justify-center space-y-1 sm:space-y-2 text-4xl sm:text-6xl font-black tracking-tighter text-white">
                        <SlidingNumber
                            value={parseInt(time.hours)}
                            padStart={true}
                        />
                        <span className="text-xs sm:text-sm font-semibold tracking-wide text-yellow-800/80 uppercase">
                            Hours
                        </span>
                    </span>
                    <span className="col-span-1 flex w-full flex-col items-center overflow-hidden justify-center space-y-1 sm:space-y-2 border-x border-dashed border-neutral-600 text-4xl sm:text-6xl font-black tracking-tighter text-white">
                        <SlidingNumber
                            value={parseInt(time.minutes)}
                            padStart={true}
                        />
                        <span className="text-xs sm:text-sm font-semibold tracking-wide text-yellow-800/80 uppercase">
                            Minutes
                        </span>
                    </span>
                    <span className="col-span-1 flex w-full flex-col items-center overflow-hidden justify-center space-y-1 sm:space-y-2 text-4xl sm:text-6xl font-black tracking-tighter text-white">
                        <SlidingNumber
                            value={parseInt(time.seconds)}
                            padStart={true}
                        />
                        <span className="text-xs sm:text-sm font-semibold tracking-wide text-yellow-800/80 uppercase">
                            Seconds
                        </span>
                    </span>
                </div>
                <div className="z-20 flex w-full mt-4 sm:mt-6 items-center justify-center px-2">
                    <ShimmerButton
                        href="/"
                        className="relative isolate overflow-hidden h-14 w-full max-w-sm flex items-center justify-center px-6 rounded-full cursor-pointer text-sm font-medium uppercase z-20">
                        Reserve your slot
                    </ShimmerButton>
                </div>
            </div>
        </div>
    )
}

export default RegisterSlotSection
