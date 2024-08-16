import Image from 'next/image';
import React from 'react';

const iconsData = [
    { src: "/images/icons/js.svg", alt: "JavaScript", delay: 500 },
    { src: "/images/icons/ts.svg", alt: "TypeScript", delay: 600 },
    { src: "/images/icons/node.svg", alt: "Node", delay: 700 },
    { src: "/images/icons/nextjs.svg", alt: "Next", delay: 800 },
    { src: "/images/icons/react.svg", alt: "React", delay: 900 },
    { src: "/images/icons/NestJS.png", alt: "NestJS", delay: 1000 },
    { src: "/images/icons/tailwind.svg", alt: "Tailwind", delay: 1100 },
    { src: "/images/icons/sass.svg", alt: "SASS", delay: 1200 },
    { src: "/images/icons/firebase.svg", alt: "Firebase", delay: 1300 },
    { src: "/images/icons/mongodb.svg", alt: "MongoDB", delay: 1400 },
];

const Icon = ({ src, alt, delay }: { src: string, alt: string, delay: number }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay={delay}
            className="group bg-white h-20 w-20 rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
            <div className="h-10 w-10">
                <Image
                    src={src}
                    alt={alt}
                    className="filter grayscale transition-all duration-300 group-hover:filter-none"
                />
            </div>
        </div>
    );
};

export default function Icons() {
    return (
        <div className="flex p-14 justify-center gap-6 flex-wrap">
            {iconsData.map((icon, index) => (
                <Icon key={index} src={icon.src} alt={icon.alt} delay={icon.delay} />
            ))}
        </div>
    );
}