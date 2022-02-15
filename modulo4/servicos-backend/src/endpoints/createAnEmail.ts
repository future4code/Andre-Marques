import { Request, Response } from "express"
import { mailTransporter } from "../services/mailTransporter"
import dotenv from "dotenv"

export async function createAnEmail(req:Request, res:Response):Promise<void>{
    let errorCode = 404

    try {
        const emailFor = req.body.emailFor
        // const email = await mailTransporter.sendMail({
        //     from:`<${process.env.NODEMAILER_USER}>`,
        //     to: emailFor,
        //     subject: "Email teste",
        //     text: `Olá segue esse e-mail como teste`,
        //     html: `<h1>Email de Teste</h1><br>
        //     <p>Eolaahuauhaauhahuauahuhauuahuahuahuahu</p>
        //     `
        // })

        const info = await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: emailFor,
            subject: "Mensagem de exemplo",
            text: "Este é um texto de exemplo",
            html: "<p>Exemplo em HTML</p>"
            })

        res.status(200).send({info, message: "Email enviado com sucesso!"})

    } catch (error) {
        if(error instanceof Error){
            res.send({ error, message: error.message })
        } else{
            res.send({ message: "Error 500!" })
        }
    }
}