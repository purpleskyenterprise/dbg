import React from 'react';
import TotalCounter from '../TotalCounter';

const WorkProcess = () => {
    return (
        <div className="container digital-business">
        <div className="digital-businessTxt">
            <h1>
                Digital Business Grower’s<br/> Work Process
            </h1>
            <div>
                <button type="button" className="btn m-btn btn-primary">Get Started 
                    <img src="/assests/images/Arrow-Right.svg" className='ms-2' alt="arrow" width={12}/>
                </button>
            </div>
        </div>
        <div className="digital-business-cards">
            
            <div className="strategy-research card-large">
                <figure>
                    <img src="/assests/images/strategy-research.png" alt="strategy-research"/>
                </figure>
               <h4>Strategy & Research</h4>
               <p>
                Research is the key to success in any business. We will help you develop a strategy that will help you grow your business.
                 </p>
                <ul>
                    <li>
                        <img src="/assests/images/checkBox.svg" alt="checkBox"/>
                        Design should stich our day
                    </li>
                    <li>
                        <img src="/assests/images/checkBox.svg" alt="checkBox"/>
                        Visual design challenges
                    </li>
                </ul>
            </div>
            <div className="web-integration card-large">
               <figure>
                    <img src="/assests/images/integration.png" alt="integration"/>
               </figure>
               <h4>Web Integration Design</h4>
               <p>
                Our team of experts will help you design a website that will help you grow your business and reach your target audience.
                 </p>
               <ul>
                <li>
                    <img src="/assests/images/checkBox.svg" alt="checkBox"/>
                    Design should stich our day
                </li>
                <li>
                    <img src="/assests/images/checkBox.svg" alt="checkBox"/>
                    Visual design challenges
                </li>
            </ul>
            </div>
            <div className="business-visible card-large">
                <figure>
                    <img src="/assests/images/business-visible.png" alt="business-visible"/>
                </figure>
                <h4>Business Visible</h4>
                <p>
                    We will help you make your business visible online by providing you with the best digital marketing services.
                </p>
                <ul>
                    <li>
                        <img src="/assests/images/checkBox.svg" alt="checkBox"/>
                        Design should stich our day
                    </li>
                    <li>
                        <img src="/assests/images/checkBox.svg" alt="checkBox"/>
                        Visual design challenges
                    </li>
                </ul>
            </div>
        </div>
        <TotalCounter/>
    </div> 

    );
};

export default WorkProcess;