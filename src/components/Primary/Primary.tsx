import Header from "../Header/Header";

export default function Primary() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900">
                <Header />
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
                            patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none"></path>
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
                        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth="0"></path>
                    </svg>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
                </svg>
                <div
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                    aria-hidden="true">
                    <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#6b21a8] to-[#2e1065] opacity-20"
                    >
                    </div>
                </div>
                <div className="mt-[-50px] flex h-screen items-center justify-center">
                    <div data-aos="fade-right" data-aos-delay="300" className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
                        <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            <span className="text-sky-500">Lucas</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Desenvolvedor FullStack</p>
                        <p className="text-lg leading-8 text-gray-300">Crio soluções digitais inovadoras, do back-end ao front-end.</p>
                        <div className="mt-5 flex items-center justify-center gap-x-6">
                            <a href="https://github.com/LukeTheNeko"
                                target="blank"
                                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                                rel="noreferrer">GitHub →</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}