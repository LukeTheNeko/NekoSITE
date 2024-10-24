import Image from "next/image";
import Icons from "../Icons/Icons";

export default function About() {
    return (
        <div className="bg-zinc-800">
            <div data-aos="fade-right" className="sm:flex max-w-screen-xl p-5">
                <div className="p-4 md:p-8 lg:p-16 xl:p-24">
                    <div className="hidden md:block max-w-96 image object-center text-center">
                        <Image src="/images/banner/dev.svg" width={400} height={400} alt="imagem" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="300" className="sm:w-1/2 p-4">
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl sm:text-4xl text-white">
                            Sobre <span className="text-sky-500">Min</span>
                        </h2>
                        <div>
                            <p className="text-gray-300 mt-2 mb-2">
                                Desde os 14 anos, estudo programação iniciando com o Minecraft e desenvolvendo interesse em Java. Atualmente, me dedico a projetos criativos, utilizando diversas linguagens para transformar ideias inovadoras em realidade.
                            </p>
                            <p className="text-gray-300 mt-2">
                                Sou um entusiasta da programação e tenho especial afinidade com JavaScript, TypeScript e NodeJs onde consigo expressar minha criatividade e desenvolver soluções inovadoras.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="p-10">
                    <div data-aos="fade-right" data-aos-delay="400" className="text-white flex flex-col justify-center text-center">
                        <h2 className="text-5xl font-bold text-sky-500">Tecnologias</h2>
                        <h2  className="text-5xl font-bold">que utilizo</h2>
                    </div>
                    <Icons />
                </div>
            </section>
        </div>
    );
}