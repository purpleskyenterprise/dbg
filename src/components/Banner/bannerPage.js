import React from 'react';
import Footer from '../Footer';

const BannerPage = ({ pageText = {} }) => {

  
    return (
        <>
        <section className="page-title-container about">
            <div className="container">
                <h1>{pageText.title}</h1>
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">

                        {
                            pageText.breadcrumb.map((item, index) => {
                                return (
                                    <li className="breadcrumb-item" key={index}>
                                        <a href={item.link}> {index != 0 && "/"} {item.text} </a>
                                    </li>
                                )

                            }
                            )
                        }
                    </ul>
                </nav>
            </div>
        </section>
        





        </>
    );
};

export default BannerPage;