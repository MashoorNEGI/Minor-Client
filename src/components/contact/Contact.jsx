import React from 'react'
import "./Contact.scss"
const ContactForm = () => {
    return (<>
        <div className="contact-page mt-5">
            <div className='contact-message mt-5'>
                <h3>Contact Information</h3>
                <p className='balance'>Fill up the form and our Team will get back to you within 24 hours.</p>
                <div class="contact-col">
                    <div>
                        <i class="fa fa-location-dot"></i>
                        <span>
                            <h5>Rz 26 P/113B </h5>
                            <p>Indra park palam colony </p>
                        </span>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <span>
                            <h5>+91 7292098071</h5>
                            <p></p>
                        </span>
                    </div>
                    <div>
                        <i class="fa fa-envelope-o"></i>
                        <span>
                            <h5>Ayushdeepnegi@gmail.com</h5>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='contact-form mt-5'>
                <h2 style={{ height: '7vh' }}>Get in touch</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            full Name
                        </label>
                        <input className="form-control" type="text" id="name" autoComplete='off' required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" autoComplete='off' required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </>
    )
}
export default ContactForm