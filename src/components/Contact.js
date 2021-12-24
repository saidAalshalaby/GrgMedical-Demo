import React from 'react';

const Contact = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    /*
    do submit code
     */
  }
  return (

    <div id="contact">
      <div className="contact-left-side">
        <p >Contact Us</p>
        <p>Tel: <a href="tel:+9714-2616966">+9714-2616966&nbsp;</a></p>
        <p> Email: <a rel="noreferrer noopener" href="mailto:info@grgmedical.com" target="_blank">info@grgmedical.com</a></p>
      </div>
      <div className="contact-right-side">
        <h5 className="gutentor-single-item-title">Request A Callback </h5>
        <form onSubmit={handleSubmit}>
          <p><label>Your name</label></p>
          <input type="text"></input>
          <p><label>Your email</label></p>
          <input type="text"></input>
          <p><label>Subject</label></p>
          <input type="text"></input>
          <p><label>Your message (optional)</label></p>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
