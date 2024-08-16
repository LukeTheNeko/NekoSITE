import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projetos from "@/components/Projetos/Projetos";

export default function Page() {
    return (
        <>
            <div className="bg-zinc-800">
                <Header />
                <div className="p-5">
                    <Projetos />
                </div>
            </div>
            <Footer />
        </>
    )
}