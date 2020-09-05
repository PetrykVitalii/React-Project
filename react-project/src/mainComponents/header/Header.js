import React from 'react';
import './Header.css';
import Logo from '../logo/Logo';



function Header() {

     

    return ( 
        <header className='header'>
            <div className='header__wrap wrap'>
                <div className='header__info'>
                    <div className='header__logo'>
                        <a href='#'>
                            <Logo></Logo>
                        </a>
                    </div>
                    <nav className='header__menu'>
                        <ol className='header__list list'>
                            <li className='list__item'>Про нас</li>
                            <li className='list__item'>Ціни</li>
                            <li className='list__item'>Редактори</li>
                            <li className='list__item'>Блог</li>
                        </ol>
                    </nav>
                </div>
                <div className='header__check check'>
                    <button className='check__button' type='button'>Перевірити текст</button>
                </div>
            </div>
        </header>
    );
}

 
export default Header;