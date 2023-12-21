import React from 'react'
import { images } from '../data'

function FooterInstallApp() {
  return (
    <section className='footer-install'>
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <section className='btns'>
            <button><img src={images.pay[0].url} alt="" /></button>
            <button><img src={images.pay[2].url} alt="" /></button>
        </section>
        <p>Secure payment Gateways</p>
        <img src={images.pay[1].url} alt="" />
    </section>
  )
}

export default FooterInstallApp
