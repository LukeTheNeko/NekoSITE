export default function notfound() {
    return (
        <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl md:text-xl dark:text-gray-300">A página que você está procurando não existe.</p>
                    <a href="/" className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200">Voltar</a>
                </div>
            </div>
        </section>
    );
}