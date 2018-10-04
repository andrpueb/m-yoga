import React, { Component } from 'react'

//Style
import '../styles/contactForm.scss'

class ContactForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data
        })
    }

    render() {
        return (
            <section className="contactForm" >
                <div className="formWrapper">
                    <h2>Get in touch :)</h2>

                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit} name="contactForm">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate" name="firstName" />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" name="lastName" />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="email" type="email" className="validate" name="email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea2" className="materialize-textarea" data-length="120" name="textArea"></textarea>
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
}

export default ContactForm