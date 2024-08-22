import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projetos from "@/components/Projetos/Projetos";

export default function Page() {
    return (
        <>
            <div className="bg-zinc-800 min-h-screen">
                <Header />
                <div className="p-5">
                    <Projetos />
                </div>
            </div>
            <Footer />
        </>
    )
}