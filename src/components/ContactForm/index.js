import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
        <form 
        className="u-text-left u-margin-bottom"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p style={{display: 'none'}}>
                <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
                </label>
            </p>
            <div className="form__group">
                <label className="form__label u-color-dark">Your name:</label>
                <input className="form__input u-color-dark u-margin-bottom" type="text" name="full-name" onChange={this.handleChange}/>
            </div>
            <div className="form__group">
                <label className="form__label u-color-dark">Your email:</label>
                <input className="form__input u-color-dark u-margin-bottom" type="email" name="email" onChange={this.handleChange}/>
            </div>
            <div className="form__group">
                <label className="form__label u-color-dark">Your message:</label>
                <textarea className="form__input form__input--textarea u-margin-bottom u-color-dark" name="message" onChange={this.handleChange}></textarea>
            </div>
            <div className="form__group">
                <button className="button button-secondary u-color-white" type="submit">Send</button>
            </div>
        </form>
    );
  }
}