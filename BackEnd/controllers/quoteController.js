import quoteModel from "../models/quote";
import nodemailer from 'nodemailer'

const QuoteController = async (req,res)=> {
    try {
        const {name,email,service,message} = req.body;

        const quote = await quoteModel.create({
            name,
            email,
            service,
            message,
        })
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass:process.env.EMAIL_PASSWORD
            }
        })

    } catch (error) {
        
    }
}