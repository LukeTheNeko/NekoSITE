/* import { NextResponse } from 'next/server';
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
} */



    import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { from, to, subject, text } = await request.json();

        if (!from || !to || !subject || !text) {
            return NextResponse.json({ message: 'Todos os campos são obrigatórios.' }, { status: 400 });
        }

        // Transporter para o e-mail do administrador
        const adminTransporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT as string, 10),
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Opções para o e-mail do administrador
        const adminMailOptions = {
            from: from,
            to: process.env.ADMIN_EMAIL, // Substitua com seu e-mail ou o e-mail desejado
            subject: 'Novo Contato',
            text: `Nome: ${from}\nE-mail: ${to}\nTelefone: [Telefone não incluído]\nMensagem: ${text}`,
        };

        // Enviar e-mail para o administrador
        await adminTransporter.sendMail(adminMailOptions);

        // Transporter para o e-mail de confirmação
        const userTransporter = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
                user: "api",
                pass: "5c733c85e7b04e70cbf888291c2ba64f"
            }
        });

        // Opções para o e-mail de confirmação
        const userMailOptions = {
            from: process.env.ADMIN_EMAIL, // E-mail do administrador para o remetente
            to: from, // E-mail do usuário
            subject: 'Confirmação: Recebemos sua mensagem',
            text: 'Recebemos sua mensagem e entraremos em contato em breve.',
        };

        // Enviar e-mail de confirmação para o usuário
        await userTransporter.sendMail(userMailOptions);

        return NextResponse.json({ message: 'E-mails enviados com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json({ message: 'Ocorreu um erro ao enviar os e-mails.' }, { status: 500 });
    }
}
