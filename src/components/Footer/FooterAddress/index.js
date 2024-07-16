import React from 'react';

const FooterAddress = () => {
    return (
        <div className="col-md-4 social-cont">
                    <a className="foo-logo" href="#;">
                        <img src="/assests/images/footer-icon/footer-logo.svg" alt="foo_logo" />
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Velit interdum ornare dictum turpis a urna. Sagittis consequat pellentesque mauris tristique nunc.
                    </p>
                    <ul>
                        <li>
                            <a href="#;">
                                <img src="/assests/images/footer-icon/facebook.svg" alt="face-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#;">
                                <img src="/assests/images/footer-icon/insta.svg" alt="insta-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#;">
                                <img src="/assests/images/footer-icon/linkedin.svg" alt="link-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#;">
                                <img src="/assests/images/footer-icon/x.svg" alt="x-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
    );
};

export default FooterAddress;