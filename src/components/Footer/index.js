import React from 'react';
import FooterAddress from './FooterAddress';
import FooterMenu from './FooterMenu';
import FooterContact from './FooterContect';
import GetUpdate from './GetUpdate';
import Copyright from './Copyright';


const Footer = () => {
    return (
        <footer className="footer-sect">
            <div className="container">
                <div className="row">   
                    <FooterAddress/>
                    <FooterMenu/>
                    <FooterContact/>
                    <GetUpdate />
                    <Copyright />
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;