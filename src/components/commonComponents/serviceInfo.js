import React from 'react';

const ServiceInfo = ({serviceTitle = "" , 
  serviceSummary = "" ,
  serviceImg = "" }) => {
    return (
        <section className="who-choose-us">
  <div className="container">
    <div className="row">
      <div className="col-md-6 img-box">
        <img src={serviceImg} alt="" />
      </div>
      <div className="col-md-6 content-box">
        <h2>{serviceTitle}</h2>
        <p>{serviceSummary}</p>
      </div>
    </div>
  </div>
</section>
    );
};

export default ServiceInfo;