import Image from "next/image"
import React from "react"

interface TrainerCardProps {
    imageSrc: string
    imageAlt: string
    name: string
    title: string
    organization: string
}

const TrainerCard: React.FC<TrainerCardProps> = ({
    imageSrc,
    imageAlt,
    name,
    title,
    organization,
}) => {
    return (
        <div className="group bg-gradient-to-b from-black/80 via-neutral-900/80 backdrop-blur-md to-neutral-950/80 col-span-1 flex h-120 md:h-90 w-full flex-col justify-between rounded-lg border border-dashed border-neutral-100/20 p-4">
            <div className="z-10 bg-black flex h-90 md:h-60 aspect-square w-full items-center justify-center overflow-hidden rounded-b-md border-x border-b border-neutral-100/5 bg-[url('/profileback.webp')] bg-cover bg-center pt-5 backdrop-opacity-20">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="group-hover:scale-[1.05] cursor-pointer h-full w-full object-cover brightness-100 grayscale-100 transition-all duration-300 ease-linear group-hover:grayscale-0"
                />
            </div>
            <div className="flex flex-col items-start">
                <h4 className="cursor-default mt-2.5 text-base font-semibold tracking-wide text-white capitalize">
                    {name}
                </h4>
                <p className="cursor-default text-sm font-medium text-neutral-400">{title}</p>
            </div>
            <p className="cursor-default mt-4 text-xs font-semibold text-neutral-600">
                {organization}
            </p>
        </div>
    )
}

export default TrainerCard
