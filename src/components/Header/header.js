import React, { useRef,useState,useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const navListRef = useRef(null);
    const menuBtnRef = useRef(null);
    const bodyRef = useRef(null);

    const [menuActive, setMenuActive] = useState(false);

    const handleMenuClick = () => {
        menuBtnRef.current.classList.toggle('menuBtn-active');
        bodyRef.current.classList.toggle('body-overlay');
        navListRef.current.classList.toggle('navBar-active');
       
        setMenuActive(!menuActive);
    }

    useEffect(() => {
        if (menuActive) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
       
      }, [menuActive]);
    

    return (
        <header className="mainHeader" ref={bodyRef}>
            <div className="mainHeader-cont container">
                <div className="mainHeader__logo">
                    <button className="menuBtn" onClick={handleMenuClick} ref={menuBtnRef} type="button">
                        <span className="menuBtn__line one"></span>
                        <span className="menuBtn__line two"></span>
                        <span className="menuBtn__line three"></span>
                    </button>
                    <Link href="/" passHref>
                        <img className="desktop-logo" src="/assests/images/dbg-logo.svg" alt="logo" />
                        <img className="mobile-logo" src="/assests/images/dbg-logo.svg" alt="logo" />
                    </Link>
                </div>
                <nav id="nav_List" className="navBar" ref={navListRef}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/#service" className="icons">Services</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="mainHeader__rightSide">
                    <a className="contact-no" href="tel:9650232509">
                        <i className="fa-solid fa-phone-volume">
                            <img src="/assests/images/callIcon.svg" alt="phone" width={15} />
                        </i>
                        +91 965 023 2509
                    </a>
                    <button type="button" onClick={() => { window.location.href = "tel:9650232509" }} className="btn hrd-btn btn-primary ml-20">
                        Let&apos;s Talk
                        <img src="/assests/images/Arrow-Right.svg" className="ms-2" alt="arrow" width={12} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
