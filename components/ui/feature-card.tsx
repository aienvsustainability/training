import React from "react"

interface FeatureCardProps {
    icon: React.ComponentType<{ strokeWidth?: number; className?: string }>;
    title: string;
    description: string;
    className?: string;
    textClassName?: string;
    descriptionClassName?: string;
    iconClassName?: string;
    iconColorClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className, textClassName, descriptionClassName, iconClassName, iconColorClassName }) => {
    return (
        <div className={`cursor-default group col-span-1 flex w-full flex-col justify-start ${className}`}>
            <span className={`cursor-default flex size-16 items-center justify-center rounded-full transition-shadow duration-300 ease-linear group-hover:scale-105 ${iconClassName}`}>
                <Icon
                    strokeWidth={1.2}
                    className={`size-10 stroke-1 ${iconColorClassName}`}
                />
            </span>
            <h4 className={`cursor-default capitalize mt-4 text-lg font-semibold ${textClassName}`}>
                {title}
            </h4>
            <p className={`cursor-default text-sm text-neutral-300 ${descriptionClassName}`}>
                {description}
            </p>
        </div>
    )
}

export default FeatureCard
