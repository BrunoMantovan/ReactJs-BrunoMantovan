import React, { useEffect, useRef, useState } from 'react'
import estilos from "./Footer.module.css"
import { NavLink } from 'react-router-dom'

export default function Footer() {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 481);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 481);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return isWideScreen ? (
    <footer className={estilos.footer}>
      <section className={estilos.brand}>
        <NavLink to={"/"}><h1>Galactic Shipyard</h1></NavLink>
      </section>
      <section className={estilos.info}>
        <h3>Contact us</h3>
        <p>123 Street, City. Country</p>
        <p>Email: info@example.com</p>
        <p>Phone: +12 345 6789</p>
      </section>
      <section className={estilos.social}>
        <h3>Follow us</h3>
        <div>
          <a className={estilos.a} href="https://www.linkedin.com" target="_blank"><i className={`${"fa-brands fa-facebook-f"}`}></i></a>
          <a className={estilos.a} href="https://www.linkedin.com" target="_blank"><i className={`${"fa-brands fa-instagram"}`}></i></a>
          <a className={estilos.a} href="https://www.linkedin.com" target="_blank"><i className={`${"fa-brands fa-x-twitter"}`}></i></a>
        </div>
      </section>
    </footer>
  ) : (
    <footer className={estilos.footer}>
      <section className={estilos.brand}>
        <NavLink to={"/"}><h1>Galactic Shipyard</h1></NavLink>
      </section>
      <section className={estilos.combined}>
        <section className={estilos.info}>
          <h3>Contact us</h3>
          <p>123 Street, City. Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +12 345 6789</p>
        </section>
        <section className={estilos.social}>
          <h3>Follow us</h3>
          <div>
            <a className={estilos.a} href="https://www.linkedin.com" target="_blank"><i className={`${"fa-brands fa-facebook-f"}`}></i></a>
            <a className={estilos.a} href="https://www.linkedin.com" target="_blank"><i className={`${"fa-brands fa-instagram"}`}></i></a>
            <a className={estilos.a} href="https://www.linkedin.com" target="_blank"><i className={`${"fa-brands fa-x-twitter"}`}></i></a>
          </div>
        </section>
      </section>
    </footer>
  )

}
