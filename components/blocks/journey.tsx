import {
    AcademicCapIcon,
    Bars3BottomLeftIcon,
    BellAlertIcon,
    CalendarDateRangeIcon,
    CursorArrowRaysIcon,
    DocumentTextIcon,
    IdentificationIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline"
import React from "react"
import FeatureCard from "../ui/feature-card"

const JourneySection = () => {
    return (
        <div className="z-10 flex w-full flex-col items-start justify-between">
            <div className="flex flex-col items-start justify-start">
                <h3 className="mb-2 text-sm font-medium tracking-wide text-neutral-400 uppercase sm:text-base">
                    Upcoming courses & training
                </h3>
                <h2 className="font-robson text-6xl md:text-2xl font-extrabold tracking-wide text-white sm:text-3xl lg:text-6xl">
                    One day{" "}
                    <span className="text-shadow-custom font-robson font-extrabold text-amber-200 [-webkit-text-stroke:1px_black] text-shadow-orange-400 sm:text-3xl lg:text-6xl">
                        AI &amp; Data Science
                    </span>{" "}
                    Orientation Program
                </h2>
                <p className="mt-3 text-sm leading-relaxed tracking-wide text-neutral-200 sm:mt-4 sm:text-lg md:text-xl">
                    The AI and Data Science One-Day Orientation Program by CAIES
                    Foundation is a dynamic introduction for aspiring students
                    and working professionals, offering hands-on exposure,
                    real-world relevance, and ethical insights to kickstart a
                    meaningful journey in AI and data science.
                </p>
                {/* <p className="mt-3 text-sm leading-relaxed tracking-wide text-neutral-200 sm:mt-4 sm:text-lg md:text-xl">
                    Embark on a transformative journey with CAIES Foundation's
                    AI and Data Science One-Day Orientation Program. Whether
                    you're a student eager to explore the world of AI or a
                    working professional seeking to upskill, this program offers
                    hands-on exposure, real-world relevance, and ethical
                    insights to kickstart your meaningful journey in AI and data
                    science.
                </p> */}
            </div>
            <div className="mt-8 grid w-full grid-cols-2 gap-6 sm:mt-12 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
                <FeatureCard
                    icon={DocumentTextIcon}
                    iconClassName="bg-yellow-450 shadow-[4px_4px_0] shadow-orange-500"
                    textClassName="tracking-wide text-yellow-450"
                    title="Interest Submission"
                    description="Fill out a simple form to express your interest in the program."
                />
                <FeatureCard
                    icon={CursorArrowRaysIcon}
                    iconClassName="bg-orange-500 shadow-[4px_4px_0] shadow-yellow-450"
                    textClassName="tracking-wide text-orange-500"
                    title="District Prioritization"
                    description="Based on the number of submissions, we prioritize districts for program rollout."
                />
                <FeatureCard
                    icon={BellAlertIcon}
                    iconClassName="bg-yellow-450 shadow-[4px_4px_0] shadow-orange-500"
                    textClassName="tracking-wide text-yellow-450"
                    title="Aspirant notification"
                    description="Receive notifications about the program and its updates."
                />
                <FeatureCard
                    icon={Bars3BottomLeftIcon}
                    iconClassName="bg-orange-500 shadow-[4px_4px_0] shadow-yellow-450"
                    textClassName="tracking-wide text-orange-500"
                    title="Final registration"
                    description="Complete your registration to secure your spot in the program."
                />
                <FeatureCard
                    icon={CalendarDateRangeIcon}
                    iconClassName="bg-yellow-450 shadow-[4px_4px_0] shadow-orange-500"
                    textClassName="tracking-wide text-yellow-450"
                    title="Program Calendar"
                    description="View the schedule of the program and important dates."
                />
                <FeatureCard
                    icon={MapPinIcon}
                    iconClassName="bg-orange-500 shadow-[4px_4px_0] shadow-yellow-450"
                    textClassName="tracking-wide text-orange-500"
                    title="Orientation Day"
                    description="Participate in the one-day orientation program to kickstart your AI journey."
                />
                <FeatureCard
                    icon={IdentificationIcon}
                    iconClassName="bg-yellow-450 shadow-[4px_4px_0] shadow-orange-500"
                    textClassName="tracking-wide text-yellow-450"
                    title="Certificate & Resources"
                    description="Receive a certificate of completion and access to additional learning resources."
                />
                <FeatureCard
                    icon={AcademicCapIcon}
                    iconClassName="bg-orange-500 shadow-[4px_4px_0] shadow-yellow-450"
                    textClassName="tracking-wide text-orange-500"
                    title="Academic Support"
                    description="Get access to academic resources and support throughout the program."
                />
            </div>
        </div>
    )
}

export default JourneySection
