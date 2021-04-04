import nodemailer from 'nodemailer'

export const mail = (recipient) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kalyan.dk10@gmail.com',
            pass: 'uvsriqpziekmpwwp'
        }
    });
    
    var mailOptions = {
        from: 'kalyan.dk10@gmail.com',
        to: recipient,
        subject: 'Sending Email using Node.js',
        html: '<h1>Welcome</h1><p>That was easy!</p>'
    }
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
