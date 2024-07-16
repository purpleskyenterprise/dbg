import React from 'react';
import ClientTestimonial from '../ClientTestimonial';

const DeliverdProject = () => {
    return (
         <div className="white-bgColor">
        <div className="container">
            <div className="delivered-projectTxt">
                <h1>
                    Delivered-Products
                </h1>
                <div>
                    <button type="button" className="btn m-btn btn-primary">View All Projects 
                        <img src="/assests/images/Arrow-Right.svg" className='ms-2' alt="arrow" width={12}/>
                    </button>
                </div>
            </div>
            <div className="delivered-projects-cont">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <img src="/assests/images/orange-room.svg" alt="orng_img"/>
                        </div>
                        <div className="org-room-dels">
                            <h4>Orange Rooms</h4>
                            <p>
                            Start your weekend in style! Bottomless cocktail sessions available from only £22 - 2 hours unlimited cocktails!
                            </p>
                            <p>
                                <a href="https://www.orangerooms.co.uk/">
                                    <img src="/assests/images/angle-sm-arr.svg" alt="angle_arr"/>
                                    https://www.orangerooms.co.uk/
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img src="/assests/images/flo-pro.svg" alt="flo_img"/>
                        </div>
                        <div className="org-room-dels flo-pro">
                            <h4>Flo-Pro</h4>
                            <p>
                            FLO~PRO performance mufflers are designed to boost the horsepower generated from your street vehicle.
                            </p>
                            <p>
                                <a href="https://www.flo-pro.co.uk/">
                                    <img src="/assests/images/angle-sm-arr.svg" alt="angle_arr"/>
                                    https://www.flo-pro.co.uk/
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
       <ClientTestimonial/>
    </div>
    );
};

export default DeliverdProject;