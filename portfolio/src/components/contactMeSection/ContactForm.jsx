import React from 'react'
import  { useRef , useState } from "react";
import emailjs from "@emailjs/browser";



const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleName = (e) =>{
    setName(e.target.value);
  }
  const handleEmail = (e) =>{
        setEmail(e.target.value);
  }
  const handleMessage = (e) =>{
        setMessage(e.target.value);
  }



   const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm("service_kbmgmuf", "template_putrxrv", form.current, {
         publicKey: "d0LzR8APfFgLS5gNc",
       })
       .then(
         () => {
           setName('');
           setEmail('');
           setMessage('');
           setSuccess('Message Sent!')
         },
         (error) => {
           console.log("FAILED...", error.text);
         }
       );
   };


  return (
    <div>
      <p className='text-cyan'>{success}</p>
      <form className="flex flex-col text-white gap-4" ref={form} onSubmit={sendEmail}>
        <input
        name='from_name'
          type="text"
          placeholder="Your name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
        name='from_email'
          type="Email"
          placeholder="Your email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
           value={email}
          onChange={handleEmail}
        />
        <textarea
        name='message'
          type="Text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className=" rounded-lg bg-lightBrown p-2"
           value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm
