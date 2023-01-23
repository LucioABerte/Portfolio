import React from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';

function Contact () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Portfolio/lucioBerté', 'portfolioTemplate', e.target, '6IHj7qpZfC_IracpM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert('Message sent successfully! thank you very much.')
  };

  return (
    <div id="contact" className='contact' >
      <div className='container'>
          <div className='contact-form'>
            <span className='contact-title'>Send me an email to be at your disposal</span>
            <h2 className='contact-subtitle'>Contact</h2>
            <br />
            <form method='post' onSubmit={sendEmail}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                        type='text'
                        className='form-control'
                        name='name'
                        id='name'
                        placeholder='Name'
                        required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Email' name='email' required
                    id='email'/>{''}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'    
                    className='message'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='submit' value='SEND'/>{' '}
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
