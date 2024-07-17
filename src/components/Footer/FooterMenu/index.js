import React from 'react';
import Link from 'next/link';

const FooterMenu = () => {
    const menuItems1 = [
        { href: "#", text: "Popular Service" },
        { href: "/dbg-team", text: "Team Member" },
        { href: "/about", text: "About Us" },
        { href: "#", text: "Blogs" },
        { href: "#", text: "Pricing Package" },
        { href: "#", text: "Reviews" },
        { href: "/contact", text: "Contact" },
    ];

    const menuItems2 = [
        { href: "/dbg-services/graphic-designing", text: "Graphic Designing" },
        { href: "/dbg-services/web-development", text: "Web Development" },
        { href: "/dbg-services/app-development", text: "App Development IOS/Android" },
        { href: "#", text: "Product advertising" },
        { href: "#", text: "Social Media Marketing" },
        { href: "/dbg-services/seo-services", text: "Search Engine Optimization" },
        { href: "#", text: "Google Extractor" },
    ];

    const renderMenuItems = (items) => {
        return items.map((item, index) => (
            <li key={index}>
                <Link href={item.href}>
                    
                        <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                        {item.text}
                   
                </Link>
            </li>
        ));
    };

    return (
        <>
            <div className="col-md-2">
                <div className="serives-name">
                    <ul>
                        {renderMenuItems(menuItems1)}
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="serives-name">
                    <ul>
                        {renderMenuItems(menuItems2)}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterMenu;
