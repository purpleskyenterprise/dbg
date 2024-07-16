import React from 'react';

const MakeBusiness = () => {
    // Your component logic goes here

    return (
        <div className="quality-dedicated-bgColor business-visible-bgColor">
        <div className="container">
            <div className="row quality-dedicated-sect business-visible-sect">
                <div className="col-md-6">
                    <div>
                        <img src="/assests/images/busi-visible.png" alt="busi_img"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="quality-dedicated-Text">
                        <h1>Make Your Business
                        Visible Online</h1>
                        <p>
                            Business visibility is the key to success in today digital world. If your business is not visible online, you are missing out on a huge opportunity to reach potential customers. We can help you make your business visible online by providing you with the best digital marketing services. Our team of experts will work with you to create a customized digital marketing strategy that will help you reach your target audience and grow your business.
                             </p>
                    </div>
                    <div>
                        <button type="button" onClick={()=>{window.location.href="/contact"}} className="btn m-btn btn-secondary-ghost">Get Started 
                            <img src="/assests/images/Arrow-Right.svg" className="ms-2" alt="arrow" width={12}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MakeBusiness;