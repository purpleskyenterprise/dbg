import React from 'react';

const FooterContact = () => {
    return (
        <div className="col-md-3 serives-name">
        <ul>
            <li>
                <a href="#;">
                    <img className="mr-5" src="/assests/images/footer-icon/location.svg" alt="loc_icon" />
                    55 Main Street, 2nd block Malborne, Australia 324565
                </a>
            </li>
            <li>
                <a className="mainTxt" href="#;">
                    <img className="mr-5" src="/assests/images/footer-icon/message.svg" alt="msg_icon" />
                    digitalbusinesss@gmail.com
                </a>
            </li>
            <li>
                <a href="#;">
                    <img className="mr-5" src="/assests/images/footer-icon/call.svg" alt="call_icon" />
                    +91-123-456-7890, +91-123-456-7890
                </a>
            </li>
        </ul>
    </div>
    );
};

export default FooterContact;