import React from "react"

const FeaturesSection = () => {
    const features = [
        {
            title: "Hands-on Technology Mastery",
            description: "Immersive, hands-on engagement with the latest tools, frameworks, and technologies."
        },
        {
            title: "Mastering Core Concepts",
            description: "A strong theoretical foundation to tackle complex, evolving challenges."
        },
        {
            title: "Sustainability-Driven Education",
            description: "Understand the ethical considerations and societal impact of AI and data science."
        },
        {
            title: "Diverse Career Pathways",
            description: "Flexible pathways to thrive in careers across industry, academia, government, nonprofits, or entrepreneurial ventures."
        }
    ]
    return (
        <div className="z-10 flex h-full w-full flex-col justify-center rounded-xl bg-[url('/background.png')] bg-cover bg-bottom bg-no-repeat">
            <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-between px-10 sm:px-6">
                <div className="flex flex-col items-center justify-start text-center sm:items-start sm:text-left">
                    {/* <h3 className="text-sm font-medium tracking-wide text-neutral-400 uppercase sm:text-base">
                        AI for All Stages
                    </h3> */}
                    <h2 className="font-robson text-6xl md:text-2xl font-extrabold tracking-wide text-white sm:text-3xl lg:text-5xl">
                        Transforming Learners into{" "}
                        <span className="inline-flex -rotate-6 rounded-full bg-orange-500 p-2">
                            <span className="font-robson rounded-full border-2 border-dashed border-black px-4 py-2 text-4xl md:text-2xl font-extrabold tracking-wide text-black sm:text-3xl lg:text-5xl">
                                Innovators
                            </span>
                        </span>
                    </h2>
                    <p className="mt-6 md:mt-16 leading-relaxed tracking-wide text-neutral-200 text-base md:text-xl">
                        The training programs and courses offered by the CAIES
                        Foundation are at the forefront of Artificial
                        Intelligence, Cybersecurity, Data Science, Python
                        Engineering, and Environmental Sustainability. Our
                        programs are modular, adaptive, and outcome-focused,
                        with a single goal: to turn students into industry-ready
                        innovators who can close the knowledge gap. They are
                        academically grounded and refined by real-world
                        applications. Whether you are a student, an emerging
                        professional, or a researcher, every program is crafted
                        to ensure:
                    </p>
                </div>
                <div className="relative grid w-full grid-cols-1 items-center justify-center gap-4 py-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className={`z-10 flex h-40 w-full flex-col items-start justify-between space-y-4 rounded-md bg-gradient-to-tr from-neutral-900/70 via-neutral-950/60 to-black/70 px-4 py-6 backdrop-blur-2xl backdrop-opacity-95 sm:h-44 ${index >= 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                            <h4 className="text-base font-semibold text-white sm:text-lg">
                                {feature.title}
                            </h4>
                            <p className="text-xs text-neutral-300 sm:text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection
