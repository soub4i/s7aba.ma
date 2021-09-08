import * as Yup from 'yup';
const mail = require('@sendgrid/mail');

mail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

const handler = async (req, res) => {
    const Schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        msg: Yup.string().required()
    });

    try {
        const body = await Schema.validate(req.body);
        const message = `
            Name: ${body.name}\r\n
            Email: ${body.email}\r\n
            Message: ${body.msg}
        `;
        const data = {
            to: `${process.env.MAIL_TO_ADDRESS}`, // your email where you'll receive emails
            from: `${process.env.MAIL_FROM_ADDRESS}`, // your website email address here
            subject: 'S7aba Contact Form',
            text: message,
            html: message.replace(/\r\n/g, '<br>')
        };

        await mail.send(data);

        res.status(200).json({ message: 'success!' });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export default handler;
