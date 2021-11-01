import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config()

const createTransporter = async () => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
            user: process.env['MAIL'],
            pass: process.env['SECRET'],
        },
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    })

    return transporter;
};

const sendMail = async (opt) => {
    let transporter = await createTransporter()
    const response = await transporter.sendMail(opt)
    return response
}

export async function post(request) {
    await sendMail(request.body)
    return {
        status: 200,
        body: {
            message: 'Mail sent successfully'
        }
    }
}