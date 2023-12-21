import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { images } from '../data'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa"

function FooterContact() {
  return (
    <section className='footer-contact'>
        <img src={images.random[2].url} alt="" />
        <h4>Contact</h4>
        <p><b>Address: </b>562 Wellington Road, Street 32, San Francisco</p>
        <p><b>Phone: </b>+1 2222 365 / +92 319 0093491</p>
        <p><b>Hours: </b>10:00 - 18:00, Mon - Sat</p>
        <h4 className='footer-follow'>Follow Us</h4>
        <ul>
            <li><FaFacebook className='social-media-icon'/></li>
            <li><FaTwitter className='social-media-icon'/></li>
            <li><FaInstagram className='social-media-icon'/></li>
            <li><FaPinterest className='social-media-icon'/></li>
            <li><FaYoutube className='social-media-icon'/></li>
        </ul>
    </section>
  )
}

export default FooterContact
