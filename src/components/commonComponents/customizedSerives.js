import React from 'react';

const CustomizedService = ({CustomizeService = [], keyPoints4 = []}) => {
    return (
        <section className="customized-courses">
        <div className="container">
          <div className="row">
            <div className="col-md-6 content-box">
              <h3>{CustomizeService[0]?.customizedTitle}</h3>
              <p>{CustomizeService[0]?.customizedSummary}</p>
            </div>
            <div className="col-md-6 img-box">
              <img src={CustomizeService[0]?.customizedImg} alt="" />
            </div>
          </div>
          <div className="row">
            <ul className="info-list">
            {
                keyPoints4.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="icon-box"><img src={item.keyIcon} alt="" /></div>
                      <div className="title">{item.keyTitle}</div>
                    </li>
                  );
                })
             }
             
            </ul>
          </div>
        </div>
      </section>
    );
};

export default CustomizedService;