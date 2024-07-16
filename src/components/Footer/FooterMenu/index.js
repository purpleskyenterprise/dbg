import React from 'react';
import Link from 'next/link';

const FooterMenu = () => {
    return (
        <>
            <div className="col-md-2">
                <div className="serives-name">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Popular Service
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Team Member
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    About Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Blogs
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Pricing Package
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Reviews
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="serives-name">
                    <ul>
                        <li>
                            <Link href="/dbg-services/graphic-designing">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Graphic Designing
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dbg-services/web-development">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Web Development
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dbg-services/app-development">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    App Development IOS/Android
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Product advertising
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Social Media Marketing
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dbg-services/seo-services">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Search Engine Optimization
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img className="mr-5" src="/assests/images/footer-icon/right-arrow.svg" alt="rgt_icon" />
                                    Google Extractor
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterMenu;
