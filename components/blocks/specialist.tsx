import React from "react"
import TrainerCard from "../ui/trainer-card"

const SpecialistSection = () => {
    return (
        <div className="z-20 flex h-full w-full flex-col items-start py-2">
            <div className="flex flex-col items-start justify-start">
                <h3 className="text-sm font-medium tracking-wide text-neutral-400 uppercase sm:text-base">
                    Our Specialists
                </h3>
                <h2 className="mt-2 font-robson text-6xl font-extrabold tracking-wide text-white sm:text-3xl lg:text-6xl">
                    Gain{" "}
                    <span className="text-shadow-custom font-robson font-extrabold text-orange-600 [-webkit-text-stroke:1px_black] text-shadow-amber-200 sm:text-3xl lg:text-6xl">
                        expertise, inspiration & mentorship
                    </span>{" "}
                    from industry-leading specialists
                </h2>
                {/* <p className="mt-3 text-sm leading-relaxed tracking-wide text-neutral-200 sm:mt-4 sm:text-lg md:text-xl">
                    Our courses are crafted and delivered by industry experts
                    and academic leaders, ensuring you receive top-tier
                    education and insights into the latest AI advancements.
                </p> */}
            </div>
            <div className="mt-8 grid w-full grid-cols-1 items-center justify-center gap-4 sm:gap-6 md:grid-cols-4">
                <TrainerCard
                    imageSrc="/sushant.png"
                    imageAlt="Sushant"
                    name="Dr. Sushant K Singh"
                    title="AI & Environmental Data Science Specialist"
                    organization="India"
                />
                <TrainerCard
                    imageSrc="/caleb.png"
                    imageAlt="Caleb"
                    name="Dr. Caleb Strait"
                    title="Full-Stack AI Engineer"
                    organization="USA"
                />
                <TrainerCard
                    imageSrc="/ershad.png"
                    imageAlt="Ershad"
                    name="Dr. Ershad Sharifahmedian"
                    title="Hi-Tech AI & ML Specialist"
                    organization="USA"
                />
                <TrainerCard
                    imageSrc="/jie.png"
                    imageAlt="Jie"
                    name="Dr. Jie Feng"
                    title="AI Specialist"
                    organization="USA"
                />
                <TrainerCard
                    imageSrc="/swati.png"
                    imageAlt="Swati"
                    name="Dr. Swati Suman"
                    title="Geo-AI Specialist"
                    organization="USA"
                />
                <TrainerCard
                    imageSrc="/eshan.png"
                    imageAlt="Eshan"
                    name="Eshan Singh"
                    title="Junior Penetration Tester, and Python Practitioner"
                    organization="India"
                />
            </div>
        </div>
    )
}

export default SpecialistSection
