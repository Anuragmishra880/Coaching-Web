import React, { useState } from 'react'
import axios from 'axios';

import './Contact.css'
const Contact = () => {
    const [Name, setName] = useState('')
    const [ph_Number, setPhNumber] = useState('')
    const [message, setMessage] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleNameChange = (e) => {
        const cleanName = e.target.value.replace(/[^a-zA-Z ]/g, '');
        setName(cleanName);
    }
    const handlePhNumberChange = (e) => {
        const cleanPhNumber = e.target.value.replace(/[^0-9]/g, '');
        setPhNumber(cleanPhNumber);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://coaching-web-backend.onrender.com/contact', {
                name: Name,
                phNumber: ph_Number,
                message: message
            });

            setName('');
            setPhNumber('');

            setMessage('');
        }
        catch (err) {
            console.error(err);
            setSuccessMsg('Failed to send email');
        }
    }
    return (
        <div className='contact' id='contact'>
            <div className="contact-col">
                <h3>Sends Us a Message <a href="sms:+7209079099"><i className="fa-solid fa-message"></i></a> </h3>
                <p>Have questions or feedback? Reach out via the contact form or use the details below. We truly value your input as we work to provide the best possible coaching experience.</p>
                <ul>
                    <a href="mailto:anuragkumar575957@gmail.com"><li> <i class="fa-solid fa-envelope" ></i>contacta@gmail.com</li></a>

                    < a href="tel:+917209079099"><li> <i class="fa-solid fa-phone"></i>+91 654646546546</li> </a>
                    <a href="https://maps.app.goo.gl/SB8TpTo8gv2PYL8u7?g_st=ac" target="_blank">
                        <li><i class="fa-solid fa-location-dot"></i> BST IGNOU BCA, MCA Classes, west metro station, Deepak Vihar, Uttam Nagar, New Delhi, Delhi  </li>
                    </a>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="" id="name" placeholder='Enter Your Name Here' required value={Name} onChange={handleNameChange} />

                    <label htmlFor="ph_Number">Phone-Number</label>
                    <input type="text" name="" id="ph_Number" placeholder='Enter Your Phone-Number' required value={ph_Number}
                        onChange={handlePhNumberChange} />

                    <label htmlFor="Text_Message">Write Your Message Here</label>
                    <textarea name="" id="Text_Message" rows={6} placeholder='Enter Your Message Here' required value={message}
                        onChange={handleMessageChange}></textarea>
                    <button type='submit' className='btn seeMoreBtn'>Submit  Now</button>
                </form>
                <span id='sendMessage'>{successMsg}</span>
                {/* <span>Message Send</span> */}
            </div>
        </div>
    )
}
export default Contact
