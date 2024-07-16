import React from 'react';

const IncreaseSell = () => {
    // Your code goes here

    return (
        <div className="white-bgColor">
       
       <div className="container">
        <div className="sales-growSect">
            <div className="sales-growTxt">
                <h1>Increasing Sales & Grow Business by SEO </h1>
                <p>
                    
                    IncreaseSell and grow your business with the help of our SEO services. We are a team of experienced professionals who have a passion for SEO. Our goal is to help you increase your sales and grow your business by providing you with the best SEO services.
                </p>
                <div className="btnBlock btnBlockStart">
                    <button onClick={()=>{window.location.href= "/dbg-services/seo-services"}} type="button" className="btn m-btn btn-primary">Get Started 
                        <img src="/assests/images/Arrow-Right.svg" className='ms-2' alt="arrow" width={12}/>
                    </button>
                </div>
            </div>
            <div className="modern-tech card-small">
                <figure>
                    <img src="/assests/images/ai-icon.svg" alt="ai_icon"/>
                </figure>
               <h4>Modern Ai Technology</h4>
               <p>
                 including speech recognition, image recognition, and natural language processing.
               </p>
            </div>
            <div className="seo-strategy card-small">
               <figure>
                    <img src="/assests/images/strategy.png" alt="str_icon"/>
               </figure>
               <h4>Growth SEO Strategy</h4>
               <p>
                     including keyword research, on-page optimization, and off-page optimization.
               </p>
            </div>
            <div className="digital-audit card-small">
                <figure>
                    <img src="/assests/images/d-audit.png" alt="d_icon"/>
                </figure>
                <h4>Optimize Digital Audit</h4>
                <p>
                    including website audit, content audit, and social media audit, W3C Validation . 
                </p>
            </div>
        </div>
       </div> 
    </div>
    );
};

export default IncreaseSell;