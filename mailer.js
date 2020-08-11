const nodemailer = require("nodemailer") 

async function main() {

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "plannomad@gmail.com",
      pass: "UNCCBootcamp2020"
    }
  })

// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  }); 

 // send mail with defined transport object
 const sendMail =(Hotel,Airline, email) =>{
    let info = await transporter.sendMail({
    from: '"Nomad" <plannomad@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Your Itinerary", // Subject line
    text: Hotel, Airline // plain text body
    
 
  });

  console.log("Message sent:", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

main().catch(console.error);
};