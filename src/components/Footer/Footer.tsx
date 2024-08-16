import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <footer className="bg-white shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div data-aos="fade-right">
                            <a href="/" className="text-white font-bold text-2xl">
                                <p className="transition-transform duration-300 hover:scale-110 text-center">LukeTheNeko</p>
                            </a>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium justify-center text-gray-500 sm:mb-0 dark:text-gray-400">
                            <div data-aos="zoom-in" className="flex justify-center items-center gap-3 p-2">
                                <a href="https://github.com/LukeTheNeko/" target="_blank" rel="noopener noreferrer">
                                    <BsGithub color='#fff' size={25} className="opacity-40 hover:opacity-100 transition-transform duration-300 hover:scale-110" />
                                </a>
                                <a href="https://discord.com/users/265766165958230016" target="_blank" rel="noopener noreferrer">
                                    <BsDiscord color='#fff' size={25} className="opacity-40 hover:opacity-100 transition-transform duration-300 hover:scale-110" />
                                </a>
                                <a href="https://www.twitter.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                    <BsTwitter color='#fff' size={25} className="opacity-40 hover:opacity-100 transition-transform duration-300 hover:scale-110" />
                                </a>
                                <a href="https://www.instagram.com/LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                    <BsInstagram color='#fff' size={25} className="opacity-40 hover:opacity-100 transition-transform duration-300 hover:scale-110" />
                                </a>
                                <a href="https://www.tiktok.com/@LukeTheNeko" target="_blank" rel="noopener noreferrer">
                                    <BsTiktok color='#fff' size={25} className="opacity-40 hover:opacity-100 transition-transform duration-300 hover:scale-110" />
                                </a>
                            </div>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                    <div>
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center"><a href="/" className="hover:underline"></a>Todos os direitos reservados. © 2023-{new Date().getFullYear()}</span>
                    </div>
                </div>
            </footer >
        </>
    )
}