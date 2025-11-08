"use client"
import React from "react"
import Paragraph from "../ui/text-reveal"

export default function Page() {
    const paragraph =
        "Take the next step in your career journey with our advanced training programs at the CAIES Foundation’s Education, Research, and Training Center in Maner, Patna. Our modern facility accommodates up to 50 dedicated learners, offering a focused and collaborative learning environment. If you’re part of a larger group of 100 or more, we’ll bring our training programs to you anywhere in your city. Experience interactive, hands-on learning designed around your regional needs and industry trends. Choose from our forward-thinking courses in AI, Data Science, Cybersecurity, Python Engineering, and Environmental Data Science, and unlock the skills that define the future of work. Register your interest today! Your registration fee will be fully credited toward your chosen training program. Don’t wait, start your transformation and shape tomorrow today."
    const words = paragraph.split(" ")
    return (
        <section
            id="textSection"
            className="flex h-full w-full items-center justify-center">
            <div className="mx-auto flex h-auto w-full items-center py-20">
                <div className="h-full max-h-[80vh] w-full items-start justify-center p-0">
                    <h2 className="font-robson text-6xl md:text-2xl font-extrabold tracking-wide text-white sm:text-3xl lg:text-5xl">
                        If you cannot{" "}
                        <span className="text-shadow-custom font-robson font-extrabold text-amber-200 [-webkit-text-stroke:1px_black] text-shadow-orange-400 sm:text-3xl lg:text-5xl">
                            come to us
                        </span>{" "}
                        we will{" "}
                        <span className="bg-yellow-450 inline-block rounded-full p-2">
                            <span className="font-robson rounded-full border-2 border-dashed border-black px-4 py-px text-4xl font-extrabold tracking-wide text-black sm:text-3xl lg:text-5xl">
                                come
                            </span>
                        </span>{" "}
                        to your city
                    </h2>
                    <Paragraph className="py-4 text-base md:text-xl text-neutral-100">
                        Move forward in your career with our training programs.
                        Join the advanced training programs at the CAIES
                        Foundation’s Education, Research, and Training Center in
                        Maner, Patna. If you are part of a larger group of 100
                        or more, we will bring our training programs to you
                        anywhere in your city. Institutions with 100+ learners
                        can invite us to their campus for this orientation
                        program.
                    </Paragraph>
                    {/* <Paragraph className="text-2xl text-neutral-100">
                        Move forward in your career with our training programs.
                        Join the advanced training programs at the CAIES
                        Foundation’s Education, Research, and Training Center in
                        Maner, Patna. Our modern facility accommodates up to 50
                        learning environment. If you are part of a group
                        learning environment. If you are part of a larger group
                        of 100 or more, we will bring our training programs to
                        you anywhere in your city. Experience interactive,
                        hands-on learning is designed around your regional needs
                        and industry trends. Choose from our forward-thinking
                        courses in AI, Data Science, Cybersecurity, Python
                        Engineering, Environmental Data Science, and unlock the
                        skills that define the future of work. Register your
                        interest today! Your registration fee will be fully
                        credited toward your chosen training program. Don’t
                        wait, start your transformation and shape tomorrow
                        today.
                    </Paragraph> */}
                </div>
            </div>
        </section>
    )
}
