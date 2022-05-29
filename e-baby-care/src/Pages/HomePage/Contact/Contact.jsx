import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact Us</span>
                    <div className="blur pink">
                </div>

                <div className="blur blue"></div>
                </div>
            </div>
            <div className="c-right">
                <form >
                    <input type="text" name="user-name" className="user" placeholder="Name"/>

                    <input type="email" name="user-email" className="user" placeholder="email" />

                    <textarea name="message" className="user" cols="30" rows="10"></textarea>

                    <input type="submit" value ='Send' className='button' name=""/>
                    <div className="blur pink"></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;