"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

interface ProjetosBannerProps {
    image: string;
    alt: string;
    title: React.ReactNode;
    content: React.ReactNode;
    icons: string[];
    href: string;
}

export default function ProjetosBanner({ image, alt, title, content, icons, href }: ProjetosBannerProps) {

    useEffect(() => {
        Aos.init({
          duration: 1200,
        });
      }, [])
    

    return (
        <div data-aos="zoom-in" className="p-4">
            <div className="flex flex-col bg-gray-950 w-72 rounded-3xl p-4 gap-5 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center items-center p-4">
                    <Image src={image} alt={alt} width={110} height={110} />
                </div>

                <div className="flex flex-col justify-center items-center text-center font-bold text-2xl text-white">
                    <div className="bg-gradient-to-r from-purple-950 to-fuchsia-500 text-transparent bg-clip-text text-3xl font-black">
                        {title}
                    </div>
                </div>

                <div className="flex justify-center items-center text-center text-gray-300 p-4 h-24">
                    {content}
                </div>

                <div className="flex justify-center items-center">
                    <a href={href} target='blank' className="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center transition-transform duration-300 hover:scale-110">
                        <span>
                            <p>Ver no Github ➜</p>
                        </span>
                    </a>
                </div>

                <div className="flex justify-center items-center gap-4 p-4">
                    {icons.map((icon, index) => (
                        <img key={index} width={25} height={25} src={icon} alt={`Icon ${index}`} />
                    ))}
                </div>
            </div>
        </div >
    );
}