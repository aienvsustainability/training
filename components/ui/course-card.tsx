import Image from "next/image"
import Link from "next/link"
import React from "react"
import { GoTasklist } from "react-icons/go"
import { PiBagLight } from "react-icons/pi"

interface CourseCardProps {
    title: string
    description: string
    tasks: number
    projects: number
    imageSrc: string
    imageAlt: string
    enrollLink: string
    startDate?: string
    tickerText?: string
    bgColor?: string
    textColor?: string
    secondaryTextColor?: string
    infoTextColor?: string
}

const CourseCard: React.FC<CourseCardProps> = ({
    title,
    description,
    tasks,
    projects,
    imageSrc,
    imageAlt,
    enrollLink,
    textColor,
    secondaryTextColor,
    infoTextColor,
    startDate = "Coming Soon",
    tickerText = "New",
    bgColor = "bg-yellow-450"
}) => {
    return (
        <div className="group hover:scale-[102%] hover:-translate-y-1 transition-all duration-300 ease-linear cursor-default col-span-1 flex h-60 w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-700 p-1">
            <div className={`${bgColor} shadow-none flex h-full flex-col rounded-2xl p-4`}>
                <div className="flex w-full items-start justify-start">
                        <p className={`sr-only flex w-auto items-center justify-center rounded-full bg-neutral-100/15 px-2 py-1 text-xs font-medium tracking-wide ${textColor}`}>
                            {tickerText}
                        </p>
                </div>
                <div className="mt-4 grid grid-cols-6 items-center justify-center gap-6">
                    <div className="col-span-4 flex w-full flex-col items-start justify-between space-y-3">
                        <h3 className={`w-full text-base font-semibold ${textColor} capitalize`}>
                            {title}
                        </h3>
                        <p className={`text-xs font-medium ${secondaryTextColor}`}>
                            {description}
                        </p>
                        <div className="sr-only mt-2 flex w-full items-center justify-between">
                            <p className={`flex items-center justify-between gap-1 text-sm font-medium tracking-wide ${infoTextColor}`}>
                                <GoTasklist className="size-5" /> {tasks} Tasks
                            </p>
                            <p className={`flex items-center justify-between gap-1 text-sm font-medium tracking-wide ${infoTextColor}`}>
                                <PiBagLight className="size-5 stroke-2" /> {projects} Projects
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            className="h-full w-full contrast-125 brightness-95 grayscale-100"
                            width={0}
                            sizes="100vw"
                            height={0}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-between p-4">
                <div className="flex items-center justify-center">
                    <p className="text-sm capitalize font-bold tracking-wide text-white">
                        {startDate}
                        {/* <span className="capitalize font-medium text-neutral-400">
                            {startDate}
                        </span> */}
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Link
                        href={enrollLink}
                        className="group-hover:scale-105 transition-all duration-300 ease-linear rounded-full bg-neutral-400 px-4 py-2 text-sm font-semibold text-neutral-900">
                        Enroll Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard
