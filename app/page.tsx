import React from "react"
import HeroSection from "@/components/blocks/hero"
import FeaturesSection from "@/components/blocks/features"
import JourneySection from "@/components/blocks/journey"
import CourseSection from "@/components/blocks/courses"
import SpecialistSection from "@/components/blocks/specialist"
import RegisterSlotSection from "@/components/blocks/register-slot"
import RotatingImage from "@/components/ui/rotating-image"
import PyramidImage from "@/components/ui/pyramid-image"
import Image from "next/image"
import { cn } from "@/lib/utils"
import TaglineText from "@/components/blocks/tagline"

interface CustomMetadata {
    title: string;
    description: string;
    alternates?: {
        canonical?: string;
        languages?: {
            'en-US': string;
        };
    };
}

export const metadata: CustomMetadata = {
    title: "Training & Courses - CAIES Fondation",
    description: "Modular, research-aligned courses in AI, Cybersecurity, Data Science, Python, and Sustainability, preparing learners for advanced study and professional practice.",
    alternates: {
        canonical: "/",
        languages: {
            'en-US': '/',
        }
    },
};

const Homepage = () => {
    return (
        <section className="z-10 scroll-smooth flex min-h-screen w-full flex-col items-center justify-center bg-black">
            <div className="relative h-screen w-full">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:80px_80px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <RotatingImage />
                <PyramidImage />
                <div className="max-x-6xl flex min-h-screen w-full flex-col items-center justify-center">
                    <HeroSection />
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-t-[80px] bg-neutral-900 py-20">
                <div className="flex md:h-screen w-full max-md:min-h-screen max-w-6xl flex-col items-center justify-center">
                    <FeaturesSection />
                </div>
                <div id="courses" className="py-20 flex max-md:min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6">
                    <CourseSection />
                </div>
                <div className="relative border-t border-neutral-700 border-dashed pt-20 flex max-md:min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6">
                    <Image
                        src="/graphics/spring.png"
                        alt="spring"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                        className="animate-float pointer-events-none absolute top-20 -right-20 md:-right-40 size-50 md:size-80 object-cover opacity-95 select-none"
                    />
                    <JourneySection />
                </div>
                <div className="relative flex w-full max-md:min-h-screen max-md:mb-20 md:max-h-screen max-w-6xl flex-col items-center justify-center px-6">
                    <TaglineText />
                </div>
                <div className="flex w-full max-w-6xl max-md:min-h-screen flex-col items-center justify-center px-6">
                    <SpecialistSection />
                </div>
                <div className="relative flex w-full max-w-6xl flex-col max-md:min-h-screen items-center justify-center px-6">
                    <Image
                        src="/graphics/star.png"
                        alt="star"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                        className="animate-float pointer-events-none absolute -top-20 -left-10 size-60 object-cover opacity-95 select-none md:-top-40 md:-left-44 md:size-100"
                    />
                    <RegisterSlotSection />
                </div>
            </div>
        </section>
    )
}

export default Homepage
