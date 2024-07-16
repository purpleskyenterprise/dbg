import React from 'react';
import Link from 'next/link';

const Header = () => {

   const handleMenuClick = () => {
        let navList = document.getElementById('nav_List');
        let bodyMain = document.querySelector('body');
        let menuBtn = document.querySelector('.menuBtn');
        menuBtn.classList.toggle('menuBtn-active');
        bodyMain.classList.toggle('body-overlay');
        navList.classList.toggle('navBar-active');
   }
   
    return (
        <header className="mainHeader">
            <div className="mainHeader-cont container">
                <div className="mainHeader__logo">
                    <button className="menuBtn" onClick={() => handleMenuClick()} >
                        <span className="menuBtn__line one"></span>
                        <span className="menuBtn__line two"></span>
                        <span className="menuBtn__line three"></span>
                    </button>
                    <Link href="/">
                        <a>
                            <img className="desktop-logo" src="/assests/images/dbg-logo.svg" alt="logo"/>
                            <img className="mobile-logo" src="/assests/images/dbg-logo.svg" alt="logo"/>
                        </a>
                    </Link>
                </div>
                <nav id="nav_List" className="navBar">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#service">
                                <a className="icons">Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="mainHeader__rightSide">
                    <a className="contact-no" href="tel:9650232509">
                        <i className="fa-solid fa-phone-volume">
                            <img src="/assests/images/callIcon.svg" alt="phone" width={15}/>
                        </i>
                        +91 965 023 2509
                    </a>
                    <button type="button" onClick={() => {window.location.href = "tel:9650232509"}} className="btn hrd-btn btn-primary ml-20">
                        Let&apos;s Talk
                        <img src="/assests/images/Arrow-Right.svg" className="ms-2" alt="arrow" width={12}/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
