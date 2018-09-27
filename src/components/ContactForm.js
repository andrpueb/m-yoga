import React, { Component } from 'react'

//Style
import '../styles/contactForm.scss'

const ContactForm = () => {
    return (
        <section className="contactForm">
            <div className="formWrapper">
                <h2>Get in touch :)</h2>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                                <label htmlFor="textarea2">Message</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Send Message
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default ContactForm