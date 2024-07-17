import { clientReviewData } from '@/src/shared/constant';
import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow left-arrow" onClick={onClick}>
      <img src="/assests/images/leftCircleArrow.svg" alt="Left Arrow" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow right-arrow" onClick={onClick}>
      <img src="/assests/images/rightCircleArrow.svg" alt="Right Arrow" />
    </button>
  );
};

const ClientTestimonial = () => {
  const topReviewData = clientReviewData.filter((item) => item.ratingStar >= 5);

  const carouselRef = useRef(null);

  const goToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
  };

  return (
    <div className="testimonial-bgColor">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="btnBlock btnBlockEnd btnBlock-mTop">
              <button type="button" className="btn m-btn btn-primary">
                View All Reviews
                <img src="/assests/images/Arrow-Right.svg" className="ms-2" alt="arrow" width={12} />
              </button>
            </div>
          </div>
        </div>
        <Carousel
          responsive={responsive}
          infinite={false}
          ref={carouselRef}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {clientReviewData.map((clientReview) => (
            <div className="client-ques-sect" id={clientReview.id} key={clientReview.id}>
              <div className="client-quesCont">
                <div className="commas-icon">
                  <figure>
                    <img className="rectangle-icon" src="/assests/images/rectangle-img.png" alt="users01" />
                  </figure>
                </div>
                <div className="client-feedbackCont mt-5">
                  <h6>What <b>{clientReview.clientName}</b> Say</h6>
                  <p>{clientReview.clientReviewText}</p>
                  <div className="client-feedback">
                    <div>
                      <figure>
                        <img src={clientReview.clientImg} alt="user_01" />
                      </figure>
                    </div>
                    <div>
                      <h5>{clientReview.clientName}</h5>
                      <p>
                        {Array.from({ length: clientReview.ratingStar }).map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="dynamicClickTop">
          {topReviewData.map((item, index) => (
            <div className={`topReview top${index + 1}`} key={index}>
              <div className="topClickSet" onClick={() => goToSlide(item.id - 1)}>
                <img src={item.clientImg} alt={`users-${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
