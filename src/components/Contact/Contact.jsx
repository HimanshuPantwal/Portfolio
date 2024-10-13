import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Input from './Input';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hja7a4p', 'template_ih69q0g', form.current, '98sQQnDK9u8LQP3UX')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className='' id="contact">
            <div className='shadow-[rgb(38, 57, 77) 0px 20px 30px -10px] w-full min-h-full flex flex-col md:flex-row items-center justify-center p-8'>
                
                <img 
                    src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1728800772~exp=1728804372~hmac=c25e6caa4b49df1059d3f9d02d875c312e25b87ae6262de74a667ef3939933f6&w=740' 
                    className='w-full md:w-1/2 h-full md:h-full object-cover transition-all duration-500 hover:scale-105 rounded-full p-4' 
                    alt='Contact Background'
                />

                <div className='flex flex-col justify-center w-full md:w-1/2 h-full bg-[#090c20] p-6 md:p-8 rounded-3xl hover:scale-105 duration-300 transition-all'>
                    <h1 className='text-[2rem] md:text-[2.5rem] text-white font-bold animate-fadeInUp'>Contact Me</h1>
                    <hr className='w-0 h-[2px] ml-1 bg-green-500 hover:w-[10rem] transition-all duration-500 mt-2 mb-4' />
                    
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-6'>
                        <Input label="Full Name" placeholder="Enter your Name.." type="text" name="user_name" />
                        <Input label="Email" placeholder="Enter your Email.." type="email" name="user_email" />
                        <textarea 
                            name="message" 
                            rows="4" 
                            className="w-full p-3 border-b-2 bg-transparent border-white rounded-lg focus:ring-2 focus:ring-green-500 text-white outline-none placeholder-gray-400 transition-all duration-300"
                            placeholder='Your Message' 
                        />
                        <button 
                            type='submit' 
                            className='bg-green-500 text-white py-2 px-6 rounded-lg font-bold tracking-wide hover:bg-green-600 hover:scale-105 transition-transform duration-300 self-start'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
