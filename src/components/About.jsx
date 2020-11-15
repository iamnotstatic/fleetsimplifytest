import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="col-lg-12 text-center">
          <div className="row text-center">
            <div className="col-md-4">
              <br />
              <br />
              <a
                href="https://instadriver.co/about_us"
                className="keychainify-checked"
              >
                <img src="https://instadriver.co/img/aboutus.svg" alt="none" />
                <h4
                  className="service-heading"
                  onclick="location.href='https://instadriver.co/about_us"
                >
                  About us
                </h4>
              </a>
              <p style={{ color: '#fff !important' }}>
                Learn how useful <br />
                Instadriver is to <br /> both the employer and drivers
              </p>
            </div>
            <div className="col-md-4">
              <br />
              <br />
              <a
                href="https://instadriver.co/verified_search"
                className="keychainify-checked"
              >
                <img src="https://instadriver.co/img/verify.svg" alt="none" />
                <h4 className="service-heading">Verified Search</h4>
              </a>
              <p style={{ color: '#fff !important' }}>
                Learn how employers can <br />
                cut the curve and save <br /> a lot by using verified search
              </p>
            </div>
            <div className="col-md-4">
              <br />
              <br />
              <a
                href="https://instadriver.co/top_ad_features"
                className="keychainify-checked"
              >
                <img src="https://instadriver.co/img/topadd.svg" alt="none" />
                <h4 className="service-heading">Top Ad Feature</h4>
              </a>
              <p style={{ color: '#fff !important' }}>
                See how top ad feature <br />
                can increase the odds <br /> of a driver getting hired
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
