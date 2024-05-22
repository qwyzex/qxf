"use client"
// import Image from "next/image";
// import styles from "./page.module.css";
import nodemailer from "nodemailer";
import { useEffect } from "react";

// export default function Home() {
//     useEffect(() => {
//         return () => {
//             console.log("Home");
//         };
//     }, []);

//     return (
//         <main>
//             HELLOW WORLDDD <button onClick={() => console.log("asd")}>CLICK</button>
//         </main>
//     );
// }



// export default async function handler(req:any, res:any) {
//     console.log('SENDING EMAIL')
//     try {
//         // Create a Nodemailer transporter
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com", // e.g., 'smtp.gmail.com'
//             port: 587, // or the appropriate port for your SMTP host
//             secure: false, // true for 465, false for other ports
//             auth: {
//                 user: "xaliscoral@gmail.com", // your SMTP username
//                 pass: "8my5tYm5", // your SMTP password
//             },
//         });

//         // Define the email options
//         const mailOptions = {
//             from: "xaliscoral@gmail.com", // sender address
//             to: "qwyzex@gmail.com", // list of receivers
//             subject: "Daily Email", // Subject line
//             text: "This is a daily email sent from your Next.js app.", // plain text body
//             // html: '<b>This is a daily email sent from your Next.js app.</b>', // html body
//         };

//         // Send the email
//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         res.status(500).json({ message: "Error sending email" });
//     }
// }




export default async function home() {
    return console.log("Home", home.toString());
}
