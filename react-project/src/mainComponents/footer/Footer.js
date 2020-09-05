import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap wrap">
        <nav className="footer__menu">
          <ol className="footer__list list">
            <li className="list__item">
                <a className='list__link' href='https://www.facebook.com/correctarium/'>Facebook</a>
            </li>
            <li className="list__item">
                <a className='list__link' href='mailto:manager@correctarium.com'>manager@correctarium.com</a>
            </li>
          </ol>
        </nav>
        <div className='lang'>
            <button className='lang__item' type="button">Українська</button>
            <button className='lang__item' type="button">Русский</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
