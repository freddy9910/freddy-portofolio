import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile.jpg'
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function Sidebar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link to="/" className="navbar-brand js-scroll-trigger">
                <span className="d-block d-lg-none">Freddy Hany</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="..." /></span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <Link to="about" className="nav-item"><a className="nav-link js-scroll-trigger">About</a></Link>
                    <Link to="experience" className="nav-item"><a className="nav-link js-scroll-trigger">Experience</a></Link>
                    <Link to="skills" className="nav-item"><a className="nav-link js-scroll-trigger" >Skills</a></Link>
                    <Link to="education" className="nav-item"><a className="nav-link js-scroll-trigger">Education</a></Link>
                    <Link to="courses" className="nav-item"><a className="nav-link js-scroll-trigger" >Courses</a></Link>
                </ul>
            </div>
        </nav>



















    
      {/* <header id="header" classNameName="header dark-background d-flex flex-column">
    <i classNameName="header-toggle d-xl-none bi bi-list"></i>

    <div classNameName="profile-img">
      <img src={profile} alt="" classNameName="img-fluid rounded-circle"/>
    </div>

    <a href="index.html" classNameName="logo d-flex align-items-center justify-content-center">
      <h1 classNameName="sitename">Freddy Hany</h1>
    </a>

    <div classNameName="social-links text-center">
      <a href="mailto:freddyhany99@gmail.com" classNameName="gmail"><i classNameName="fa-solid fa-envelope"></i></a>
      <a href="https://www.facebook.com/profile.php?id=100069671559905&mibextid=ZbWKwL" classNameName="facebook"><i classNameName="fa-brands fa-facebook"></i></a>
      <a href="https://www.instagram.com/freddy__hany?igsh=dTl0bGEzeW5rdzJu" classNameName="instagram"><i classNameName="fa-brands fa-instagram"></i></a>
      <a href="https://wa.me/+201210905008" classNameName="whatsapp"><i classNameName="fa-brands fa-whatsapp"></i></a>
      <a href="https://www.linkedin.com/in/freddy-hany-2aa80b216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" classNameName="linkedin"><i classNameName="fa-brands fa-linkedin"></i></a>
    </div>

    <nav id="navmenu" classNameName="navmenu">
      <ul>
        <li><Link to="home" classNameName="active"><i classNameName="fa-solid fa-house"></i>Home</Link></li>
        <li><Link to="about"><i classNameName="fa-solid fa-user"></i> About</Link></li>
        <li><Link to="skills"><i classNameName="fa-regular fa-file"></i> Skills</Link></li>
        <li><Link to="#portfolio"><i classNameName="bi bi-images navicon"></i> Portfolio</Link></li>
        <li><Link to="#services"><i classNameName="bi bi-hdd-stack navicon"></i> Services</Link></li>
        <li><a href="#contact"><i classNameName="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>
  </header> */}
    </>

  )
}
