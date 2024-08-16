'use client'

import Image from 'next/image';
import { FormEvent, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaPhone, FaUser } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
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
        return formData.name && formData.email && formData.message;
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
                    text: `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`,
                }),
            });

            if (adminResponse.ok) {
                setSuccessMessage('E-mail enviado com sucesso!');
                setFormData({
                    name: '',
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
        <div className="flex justify-center items-center p-8 bg-zinc-800">
            <div className="relative bg-gradient-to-br from-indigo-950 to-slate-950 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 p-2 md:p-10 rounded-3xl w-full max-w-4xl">
                <div data-aos="fade-right" className="hidden md:flex items-center justify-center h-36 w-48 md:h-36 md:w-72 flex-shrink-0">
                    <Image
                        src="/images/icons/mail.svg"
                        alt="Ícone de email"
                        className="object-contain"
                    />
                </div>
                <div data-aos="fade-right" data-aos-delay="300" className="p-2 rounded-3xl w-full max-w-md">
                    <h3 className="text-white text-center mb-6 font-bold text-4xl md:text-6xl">Contato</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="w-full">
                                <div className="flex items-center space-x-2 mb-2">
                                    <FaUser className="text-white" />
                                    <label htmlFor="name" className="text-white">
                                        Nome:
                                    </label>
                                </div>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Digite seu nome..."
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md"
                                />
                            </div>

                            <div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <IoMdMail className="text-white" />
                                    <label htmlFor="email" className="text-white">
                                        Email:
                                    </label>
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Digite um e-mail para contato..."
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md"
                                />
                            </div>

                            <div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <FaMessage className="text-white" />
                                    <label htmlFor="message" className="text-white">
                                        Mensagem:
                                    </label>
                                </div>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Digite sua mensagem..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center pt-2 pr-2">
                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                className="mx-auto"
                                onChange={(value) => setCaptcha(value)}
                                ref={recaptchaRef}
                            />
                            <button
                                type="submit"
                                className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center space-x-2 ${!captcha ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!captcha || loading}
                            >
                                {loading ? (
                                    <span>Enviando...</span>
                                ) : (
                                    <>
                                        <Image
                                            src="/images/icons/send.svg"
                                            alt="Ícone"
                                            className="w-5 h-5"
                                        />
                                        <span>Enviar</span>
                                    </>
                                )}
                            </button>
                        </div>
                        {successMessage && (
                            <p className="text-green-500 mt-4 font-semibold text-center">{successMessage}</p>
                        )}
                        {error && <p className="text-red-400 mt-4 font-semibold text-center">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}