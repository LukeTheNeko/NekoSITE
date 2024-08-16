import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Page() {
    return (
        <>
            <div className="bg-zinc-800">
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center bg-zinc-800">
                <Contact />
            </div>
            <Footer />
        </>
    )
}