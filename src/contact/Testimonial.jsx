import React from 'react'

function Testimonial({image, name}) {
  return (
    <section className="testimonial">
        <img src={image} alt="" />
        <section className="testimonial-content">
            <h3>{name}</h3>
            <p>Senior Marketing Manager</p>
            <p>Phone: +000 123 3343232</p>
            <p>Email: contact@example.com</p>
        </section>
    </section>
  )
}

export default Testimonial
