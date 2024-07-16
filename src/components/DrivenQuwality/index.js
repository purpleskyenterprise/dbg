import React from 'react';

const DrivenQuwality = () => {
    return (
        <div className="quality-dedicated-bgColor">
        <div className="container">
            <div className="row quality-dedicated-sect">
                <div className="col-md-6">
                    <div>
                        <img src="/assests/images/driven-qualtit.png" alt="dri_img"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="quality-dedicated-Text">
                        <h1>Driven by Quality & Dedicated</h1>
                        <p>
                             Quality and dedication are the core values of our company. We are committed to providing our clients with the best possible service and we work hard to ensure that every project is completed to the highest standard. Our team of experts is dedicated to delivering quality work on time and within budget. We take pride in our work and we are passionate about what we do.
                         </p>
                    </div>
                    <div>
                        <button type="button" onClick={()=>{window.location.href="/contact"}} className="btn m-btn btn-secondary-ghost">Get Started 
                            <img src="/assests/images/Arrow-Right.svg" className='ms-2' alt="arrow" width={12}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DrivenQuwality;