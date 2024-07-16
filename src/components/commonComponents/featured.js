import React from 'react';

const Featured = ({Featured=[]}) => {
  
    return (
        <section className="service-featured-courses">
  <div className="container">
    <h3>Featured</h3>
    <div className="row">
      <ul className="course-list">
          {
            Featured?.map((item,index)=>{


             return  <li key={index}>
              <div className="img-box"><img src={item?.FeaturedImg} alt=""/></div>
              <div className="content-box">
                <div className="title">{item?.FeaturedTitle}</div>
                <div className="custom-btn"><a href="#">Explore more <i className="fa fa-long-arrow-down" aria-hidden="true"></i></a></div>
              </div>
            </li>
            })
          }
       
       
      </ul>
    </div>
  </div>
</section>
    );
};

export default Featured;