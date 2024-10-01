import React from 'react'
import profile from '../../assets/profile.jpg'
export default function About() {
  return (
    <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Freddy
                        <span className="text-primary">Hany</span>
                    </h1>
                    <div className="subheading mb-5">
                        Cairo · Egypt ·
                        <a href="mailto:freddyhany99@gmail.com">freddyhany99@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I'm a skilled frontend developer with over 2 years of experience, I specialize in creating responsive, user-friendly web applications using HTML, CSS, and JavaScript. My expertise includes modern frameworks like React ensuring seamless integration and performance. I am passionate about delivering high-quality code and enhancing user experiences through innovative design and functionality.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/freddy-hany-2aa80b216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/freddy9910"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://wa.me/+201210905008"><i className="fab fa-whatsapp"></i></a>
                        <a className="social-icon" href="https://www.instagram.com/freddy__hany?igsh=dTl0bGEzeW5rdzJu"><i className="fab fa-instagram"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/profile.php?id=100069671559905&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
    </>
  )
}
