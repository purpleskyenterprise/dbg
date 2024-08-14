import React from 'react';

const Banner = () => {
    return (
        <div className="hero-sec">
            <div className="hero-main">
                <div className="male-imgCont">
                    <figure className="male-img">
                        <img src="/assests/images/maleImg.png" alt="male_img" className='up-down-animation' />
                    </figure>
                </div>
                <div className="title-txtSec ">
                    <div className="subTitle">
                        <h6>DIGITAL MARKETING AGENCY</h6>
                    </div>
                    <div className="title">
                        <h1>Quality <b>Digital Marketing</b>
                            <br/>to Grow your Business
                        </h1>
                        <p>
                            <strong>DBG</strong> is a digital marketing company that offers a wide range of digital marketing services. 
                            We are a team of experienced professionals who have a passion for digital marketing.
                            Our goal is to help you grow your business by providing you with the best digital marketing services.
                        </p>
                    </div>
                    <div className="btnBlock">
                        <button type="button" onClick={() => { window.location.href = "/contact" }}  className="btn m-btn btn-primary ml-20">Get Started 
                            <img src="/assests/images/Arrow-Right.svg" className='ms-2' alt="arrow" width={12}/>
                        </button>
                        <button type="button" onClick={() => {window.location.href = "/#service"}} className="btn m-btn btn-secondary-ghost ml-20">Explore More 
                            <img src="/assests/images/Arrow-Right.svg" className='ms-2' alt="arrow" width={12}/>
                        </button>
                    </div>
                </div>

                <div className="female-imgCont">
                    <figure className="female-img">
                        <img src="/assests/images/FemaleImg.png" alt="female_img" className='up-down-animation' />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;