import React from 'react';
import Link from 'next/link';

const ServiceBox = () => {
    return (
        <div className="container digital-market-service" id='service'>
            <div className="market-servicesTxt">
                <h1>
                    Popular Digital Marketing Services<br /> to Build your Business
                </h1>
                <div>
                    <button type="button" className="btn m-btn btn-primary">View all services
                        <img src="/assests/images/Arrow-Right.svg" className='ms-2' alt="arrow" width={12} />
                    </button>
                </div>
            </div>
            <div className="market-services-cards">
                
                <div className="graphic-design card-medium">
                    <figure>
                        <img src="/assests/images/digital-market-icon/graphic.svg" alt="ai_icon" />
                    </figure>
                    <h4>Graphic Designing</h4>
                    
                    <p>
                        Dbg is a graphic design company that offers a wide range of graphic design services.
                    </p>
                    <Link href="/dbg-services/graphic-designing">
                        <span className='fullLink'></span>
                    </Link>
                </div>
                <div className="card-medium web-develp">
                    <figure>
                        <img src="/assests/images/digital-market-icon/web-devlop.svg" alt="str_icon" />
                    </figure>
                    <h4>Web Development</h4>
                    
                    <p>
                        We are a web development company that offers a wide range of web development services.
                    </p>
                    <Link href="/dbg-services/web-development">
                        <span className='fullLink'></span>
                    </Link>
                </div>
                <div className="app-develp card-medium">
                    <figure>
                        <img src="/assests/images/digital-market-icon/app-devlop.svg" alt="d_icon" />
                    </figure>
                    <h4>App Development</h4>
                    
                    <p>
                        We are an app development company that offers a wide range of app development services.
                    </p>
                    <Link href="/dbg-services/app-development">
                        <span className='fullLink'></span>
                    </Link>
                </div>
                <div className="product card-medium">
                    <figure>
                        <img src="/assests/images/digital-market-icon/product-icon1.svg" alt="d_icon" />
                    </figure>
                    <h4>Product</h4>
                    
                    <p>
                        We are a product company that offers a wide range of product services.
                    </p>
                    <Link href="">
                        <span className='fullLink'></span>
                    </Link>
                </div>
            </div>
            <div className="market-services-cards market-cards-mrgTop">
                
                <div className="media-market card-medium">
                    <figure>
                        <img src="/assests/images/digital-market-icon/media-marketing.svg" alt="ai_icon" />
                    </figure>
                    <h4>Social Media Marketing</h4>
                    
                    <p>
                        We are a social media marketing company that offers a wide range of social media marketing services.
                    </p>
                    <Link href="">
                        <span className='fullLink'></span>
                    </Link>
                </div>
                <div className="src-engine-opt card-medium">
                    <figure>
                        <img src="/assests/images/digital-market-icon/src-engine.svg" alt="str_icon" />
                    </figure>
                    <h4>Search Engine Optimization</h4>
                    
                    <p>
                        We are a search engine optimization company that offers a wide range of search engine optimization services.
                    </p>
                    <Link href="/dbg-services/seo-services">
                        <span className='fullLink'></span>
                    </Link>
                </div>
                <div className="google-extractor card-medium">
                    <figure>
                        <img src="/assests/images/digital-market-icon/extractor.svg" alt="d_icon" />
                    </figure>
                    <h4>Google Extractor</h4>
                    
                    <p>
                        We are a google extractor company that offers a wide range of google extractor services.
                    </p>
                    <Link href="">
                        <span className='fullLink'></span>
                    </Link>
                </div>
                <div className="digital-market card-medium">
                    <figure>
                        <img src="/assests/images/digital-market-icon/digital-mark.svg" alt="d_icon" />
                    </figure>
                    <h4>Digital Marketing</h4>
                    
                    <p>
                        We are a digital marketing company that offers a wide range of digital marketing services.
                    </p>
                    <Link href="">
                        <span className='fullLink'></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceBox;
