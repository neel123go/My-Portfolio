import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactImg from '../../../assets/contact.jpg';


function ContactForm() {
    const [state, handleSubmit] = useForm("xqknjbkj");
    let element;
    if (state.succeeded) {
        element = <p className='text-green-600 text-xl mb-5'>Thanks for joining!</p>;
    }
    return (
        <div className='px-5 md:px-20 lg:32' id='contactMe'>
            <h2 className='text-4xl mb-10'>Contact Me -</h2>
            <div className='md:flex justify-center items-center bg-white p-10 rounded-3xl'>
                <div className='w-full md:w-1/2'>
                    <form onSubmit={handleSubmit}>
                        {element}
                        <div>
                            <label className='block text-xl' htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className='mt-5 rounded-lg border-2 border-gray-400 w-full md:w-3/4 px-2 py-2'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className='mt-10'>
                            <label className='block text-xl'>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className='rounded-lg mt-5 border-2 border-gray-400 w-full md:w-3/4 px-2 py-2'
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button type="submit" className='btn btn-secondary w-full md:w-3/4 mt-5' disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>

                <div className='w-full md:w-1/2'>
                    <img src={ContactImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;