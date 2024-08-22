import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Page() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-zinc-800">
                <Header />
                <div className="flex-grow">
                    <Contact />
                </div>
                <Footer />
            </div>
        </>
    );
}