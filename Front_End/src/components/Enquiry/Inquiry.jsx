import React, { useState } from 'react'
import axios from 'axios';

import './Inquiry.css'
const Inquiry = () => {
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
            await axios.post('https://coaching-web-backend.onrender.com/inquiry', {
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
        <div className='inquiry' id='home'>

            <div className="inquiry-col">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="" id="name" placeholder='Enter Your Name Here' required value={Name} onChange={handleNameChange} />

                    <label htmlFor="ph_Number">Phone-Number</label>
                    <input type="text" name="" id="ph_Number" placeholder='Enter Your Phone-Number' required value={ph_Number}
                        onChange={handlePhNumberChange} />

                    <label htmlFor="Text_Message">Write Your Message Here</label>
                    <textarea name="" id="Text_Message" rows={6} placeholder='Enter Your Message Here' required value={message}
                        onChange={handleMessageChange}></textarea>
                    <button type='submit' className='btn seeMoreBtn'>Inquiry Now</button>
                </form>
                <span id='sendMessage'>{successMsg}</span>
                {/* <span>Message Send</span> */}
            </div>
        </div>
    )
}
export default Inquiry
