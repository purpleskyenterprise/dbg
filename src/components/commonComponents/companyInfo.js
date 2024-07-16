import React, { useEffect } from 'react';


const CompanyInfo = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <section className="company-info">
      <div className="container">
        <div className="bg">
          <div className="row">
            <ul className="info-list">
              <li>
                <div className="qty"><span className="count" data-target="20">0</span>+</div>
                <p>years of experience</p>
              </li>
              <li>
                <div className="qty"><span className="count" data-target="2500">0</span>+</div>
                <p>Projects</p>
              </li>
              <li>
                <div className="qty"><span className="count" data-target="1540">0</span>+</div>
                <p>Clients</p>
              </li>
              <li>
                <div className="qty"><span className="count" data-target="80">0</span>+</div>
                <p>Certification</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
