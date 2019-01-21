import React, { Component } from 'react';
import '../styles/Contact.css';
import {connectTranslations} from '../context/TranslationContext';


class Contact extends Component {
  render() {
    const {texts} = this.props;
    return  (
        <div className="contact-main">
          <div className="contact">
            <div>
              <h1>{texts.footer.contact}</h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
            <form>
              <div className='form-inp'>
                <label htmlFor="text">{texts.header.firstName}</label>
                <input type="text" placeholder="First Name"/>
              </div>
              <div className='form-inp'>
                <label htmlFor="text">{texts.header.lastName}</label>
                <input type="text" placeholder="Last Name"/>
              </div>
              <div className='form-inp'>
                <label htmlFor="email">{texts.header.email}</label>
                <input type="email" placeholder="email@example.com"/>
              </div>
              <div className='form-inp'>
                <label htmlFor="message">{texts.header.message}</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button type='submit'>{texts.header.send}</button>
              </div>
            </form>
          </div>
      </div>
    )    
  }
}

export default connectTranslations(Contact);