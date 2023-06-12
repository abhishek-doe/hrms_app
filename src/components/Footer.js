import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import "./Footer.css"

const Footer = () => {
  return (
    <main className='footer'>

      <section>
        <div className='logoDiv'>
          <img src="https://goodtechmind.com/static/images/logo-small.png" height="80px" />

        </div>
        <p className='description'> Our H.R.M.S. service is best platform for centerialized HR functions that integrates all HR functions.</p>
      </section>

      <section className='section'>
        <span>Company</span>
        <div className='div'>
          <li>About us</li>
          <li>Features</li>
          <li>News</li>
          <li>FAQ</li>
        </div>
      </section>

      <section className='section'>
        <span>Resources</span>
        <div className='div'>
          <li>Account</li>
          <li>Support Center</li>
          <li>Feedback</li>
          <li>Contact</li>
        </div>
      </section>

      <section className='section'>
        <span>Support</span>
        <div className='div'>
          <li>Events</li>
          <li>Promo</li>
          <li>Req Demo</li>
          <li>Careers</li>
        </div>
      </section>

      <section className='section' style={{ backgroundColor: "#2670c5" }}>
        <span>Contact Info</span>
          <div className='email-div'>
            <small className='email'>jobsearch@gmail.com</small>
          </div>
          <div className='icon-div'>
            <AiFillInstagram className='icon' />
            <BsFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
          </div>
      </section>

    </main>
  )
}

export default Footer
