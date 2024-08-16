import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { from, to, subject, text } = await request.json();

        if (!from || !to || !subject || !text) {
            return NextResponse.json({ message: 'Todos os campos são obrigatórios.' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT as string, 10),
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json({ message: 'Ocorreu um erro ao enviar o e-mail.' }, { status: 500 });
    }
}