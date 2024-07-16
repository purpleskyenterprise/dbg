import React from 'react';

const GetUpdate = () => {
    return (
        <div className="row join-sect">
                <div className="col-md-4">
                    <div className="bellCont">
                        <a className="bell-icon" href="#;">
                            <img src="/assests/images/footer-icon/bell.png" alt="bell_img" />
                            Get More Update to Join Us
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="input-box">
                        <input className="input-field" type="text" placeholder="Enter your email address" />
                        <button type="button" className="btn m-btn-sm btn-primary">Subscribe <i className="ml-10 fa-solid fa-arrow-right"></i></button>
                     </div>
                </div>
                <div className="col-md-4">
                    <div className="boosterCont">
                        <a href="#;">
                            <img className="booster-icon" src="/assests/images/footer-icon/booster.png" alt="booster_img" />
                            Back to top
                        </a>
                    </div>
                </div>
             </div>
    );
};

export default GetUpdate;