'use client'

import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaMailBulk, FaPhone, FaSeedling, FaUser } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { LuSend } from "react-icons/lu";

type FormData = {
    name: string;
    number: string;
    email: string;
    message: string;
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        number: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [captcha, setCaptcha] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState('');

    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isFormValid = () => {
        return formData.name && formData.number && formData.email && formData.message;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid()) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        if (!captcha) {
            setError('Por favor, resolva o CAPTCHA antes de enviar.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccessMessage('');

        try {
            const adminResponse = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: formData.email,
                    to: 'no-reply@mjrochaconsultoria.com.br',
                    subject: `Contato de ${formData.name}`,
                    text: `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.number}\n\nMensagem: ${formData.message}`,
                }),
            });

            if (adminResponse.ok) {
                setSuccessMessage('E-mail enviado com sucesso!');
                setFormData({
                    name: '',
                    number: '',
                    email: '',
                    message: '',
                });
                setCaptcha(null);
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
            } else {
                throw new Error('Erro ao enviar e-mail');
            }
        } catch (error) {
            setError('Ocorreu um erro ao enviar o e-mail.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
                    <div className="">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-sky-500">
                                Contato
                            </p>
                            <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl">
                                Entre em contato
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-gray-300 ">
                                    Preencha os campos abaixo e envie sua mensagem ou dúvida. Seja para discutir um projeto ou fazer uma pergunta, responderei o mais rápido possível.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-500 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white ">Contato</h3>
                                            <p className="text-gray-300 ">Email: contato@luketheneko.dev</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12 text-white" id="form">
                                <h2 className="mb-4 text-2xl font-bold">Envie sua dúvida</h2>
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <div className="flex gap-1 font-bold">
                                                    <FaUser />
                                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Nome</label>
                                                </div>
                                                <input
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    id="name"
                                                    autoComplete="given-name"
                                                    placeholder="Seu Nome..."
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="name" />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <div className="flex gap-1 font-bold">
                                                    <FaPhone />
                                                    <label htmlFor="number" className="pb-1 text-xs uppercase tracking-wider">Numero</label>
                                                </div>
                                                <input
                                                    name="number"
                                                    type="text"
                                                    placeholder="(00) 00000-0000"
                                                    value={formData.number}
                                                    onChange={handleChange}
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                                                />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <div className="flex gap-1 font-bold">
                                                    <FaMailBulk />
                                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email</label>
                                                </div>
                                                <input
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    placeholder="Seu e-mail..."
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="email" />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="flex gap-1 font-bold">
                                                <FaMessage />
                                                <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider">Mensagem</label>
                                            </div>
                                            <textarea
                                                value={formData.message}
                                                onChange={handleChange}
                                                id="message" name="message" cols={30} rows={5} placeholder="Sua Mensagem ou dúvida..."
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center pt-2 pr-2">
                                        <button
                                            type="submit"
                                            className={`bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center space-x-2 ${!captcha ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={!captcha || loading}
                                        >
                                            {loading ? (
                                                <span>Enviando...</span>
                                            ) : (
                                                <>
                                                    <LuSend size={20} className="inline-block" />
                                                    <span className="inline-block">Enviar</span>
                                                </>
                                            )}
                                        </button>
                                        <ReCAPTCHA
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                            className="mx-auto mt-4"
                                            onChange={(value) => setCaptcha(value)}
                                            ref={recaptchaRef}
                                        />
                                    </div>
                                    {successMessage && (
                                        <p className="text-green-500 mt-4 font-semibold text-center">{successMessage}</p>
                                    )}
                                    {error && <p className="text-red-400 mt-4 font-semibold text-center">{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}