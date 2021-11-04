import nodemailer from 'nodemailer'
import { google } from "googleapis"
import { config } from 'dotenv'

config()

const OAuth2 = google.auth.OAuth2

const createTransporter = async () => {
    const oauth2client = new OAuth2(
        process.env['CLIENT_ID'],
        process.env['CLIENT_SECRET'],
        "https://developers.google.com/oauthplayground"
    )

    oauth2client.setCredentials({
        refresh_token: process.env["REFRESH_TOKEN"]
    })

    const accessToken = await new Promise((resolve, reject) => {
        oauth2client.getAccessToken((err, token) => {
            if (err) {
                reject()
            }
            resolve(token)
        })
    })

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: "OAuth2",
            user: process.env["MAIL"],
            accessToken,
            clientId: process.env["CLIENT_ID"],
            clientSecret: process.env["CLIENT_SECRET"],
            refreshToken: process.env["REFRESH_TOKEN"]
        }
    })

    return transporter;
};

const sendMail = async (opt) => {
    let transporter = await createTransporter()
    transporter.sendMail(opt)
}

export async function post(request) {
    const body = JSON.parse(request.body)
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env["RECAPTCHA_SECRET"]}&response=${body.token}`, { method: 'POST' })
    const response_json = await response.json()

    if (response_json.success) {
        sendMail(body.mailContent)
    } else {
        return {
            status: 401,
            body: {
                message: "reCaptcha not validated"
            }
        }
    }
    return {
        status: 200,
        body: {
            message: 'Mail sent successfully'
        }
    }
}