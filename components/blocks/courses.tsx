import React from "react"
import CourseCard from "../ui/course-card"

const CourseSection = () => {
    return (
        <div className="z-20 flex h-full w-full flex-col items-start max-md:px-4">
            <div className="flex flex-col items-start justify-start">
                <h3 className="text-sm font-medium tracking-wide text-neutral-400 uppercase sm:text-base">
                    Industry ready tracks
                </h3>
                <h2 className="font-robson text-6xl font-extrabold tracking-wide text-white sm:text-3xl lg:text-5xl">
                    Explore{" "}
                    <span className="bg-yellow-450 inline-block -rotate-6 rounded-full p-2">
                        <span className="font-robson rounded-full border-2 border-dashed border-black px-4 py-px text-5xl font-extrabold tracking-wide text-black sm:text-3xl lg:text-5xl">
                            Our
                        </span>
                    </span>{" "}
                    Courses & Training Programs
                </h2>
                {/* <p className="mt-4 leading-relaxed tracking-wide text-neutral-200 sm:text-lg md:text-xl">
                    The AI and Data Science One-Day Orientation Program by CAIES
                    Foundation is a dynamic introduction for aspiring students
                    and working professionals, offering hands-on exposure,
                    real-world relevance, and ethical insights to kickstart a
                    meaningful journey in AI and data science.
                </p> */}
            </div>
            <div className="z-20 mt-16 grid w-full max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3">
                <CourseCard
                    title="Artificial Intelligence"
                    description="Kickstart your journey in Artificial Intelligence with our comprehensive program."
                    tasks={5}
                    projects={2}
                    imageSrc="/graphics/cog.png"
                    imageAlt="Artificial Intelligence"
                    enrollLink="/courses/ai"
                    startDate="Coming Soon"
                    tickerText="New"
                    bgColor="bg-yellow-450"
                    textColor="text-yellow-950"
                    secondaryTextColor="text-yellow-900"
                    infoTextColor="text-yellow-700"
                />
                <CourseCard
                    title="Data Science"
                    description="Kickstart your journey in Data Science with our comprehensive program."
                    tasks={5}
                    projects={2}
                    imageSrc="/graphics/pyramid.png"
                    imageAlt="Data Science"
                    enrollLink="/courses/data-science"
                    startDate="coming soon"
                    tickerText="Recommended"
                    bgColor="bg-blue-400"
                    textColor="text-blue-950"
                    secondaryTextColor="text-blue-900"
                    infoTextColor="text-blue-700"
                />
                <CourseCard
                    title="Cybersecurity"
                    description="Kickstart your journey in Cybersecurity with our comprehensive program."
                    tasks={5}
                    projects={2}
                    imageSrc="/graphics/spring.png"
                    imageAlt="Cybersecurity"
                    enrollLink="/courses/cybersecurity"
                    startDate="coming soon"
                    tickerText="New"
                    bgColor="bg-green-400"
                    textColor="text-green-950"
                    secondaryTextColor="text-green-900"
                    infoTextColor="text-green-700"
                />
                <CourseCard
                    title="Python Engineering"
                    description="Kickstart your journey in Python Engineering with our comprehensive program."
                    tasks={5}
                    projects={2}
                    imageSrc="/graphics/star.png"
                    imageAlt="Python Engineering"
                    enrollLink="/courses/python-engineering"
                    startDate="coming soon"
                    tickerText="New"
                    bgColor="bg-rose-400"
                    textColor="text-rose-950"
                    secondaryTextColor="text-rose-900"
                    infoTextColor="text-rose-700"
                />
                <CourseCard
                    title="Environmental Data Science"
                    description="Kickstart your journey in Environmental Data Science with our comprehensive program."
                    tasks={5}
                    projects={2}
                    imageSrc="/cylinder.png"
                    imageAlt="Environmental Data Science"
                    enrollLink="/courses/environmental-data-science"
                    startDate="coming soon"
                    tickerText="New"
                    bgColor="bg-pink-400"
                    textColor="text-pink-950"
                    secondaryTextColor="text-pink-900"
                    infoTextColor="text-pink-700"
                />
            </div>
        </div>
    )
}

export default CourseSection
