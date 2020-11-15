import React from 'react';

const HowItWorks = () => {
  return (
    <div>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">How it works</h2>
              <img
                src="https://instadriver.co/img/ocean-waves.png"
                alt="none"
              />
              <br />
              <br />
              <div className="d-flex justify-content-center">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item tab">
                    <a
                      className="nav-link keychainify-checked active show"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      For Employers
                    </a>
                  </li>
                  <li className="nav-item tab">
                    <a
                      className="nav-link keychainify-checked show"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      For Drivers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row text-center">
                    <div className="col-md-4">
                      <br />
                      <br />
                      <img
                        src="https://instadriver.co/img/searchdriver.svg"
                        alt="none"
                      />
                      <h4 className="service-heading">Search Drivers</h4>
                      <p className="text-muted">
                        Visit Instadriver platform, select the driver category
                        you want, choose the location of the driver and you can
                        either select all drivers or verified drivers and press
                        search button.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <br />
                      <br />
                      <img
                        src="https://instadriver.co/img/calldriver.svg"
                        alt="none"
                      />
                      <h4 className="service-heading">Call Driver</h4>
                      <p className="text-muted">
                        After hitting search button, you will see summarised
                        profiles of the drivers with their contacts. Click view
                        profile, to read the full profile. Access the contact
                        number and call the driver.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <br />
                      <br />
                      <img
                        src="https://instadriver.co/img/hiredriver.svg"
                        alt="none"
                      />
                      <h4 className="service-heading">Hire Drivers</h4>
                      <p className="text-muted">
                        On the call, discuss the job opportunity, terms and
                        conditions, or arrange a meetup to discuss further and
                        if you are both a perfect fit, proceed to hire that
                        driver. As simple as that.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="row text-center">
                    <div className="col-md-4">
                      <br />
                      <br />
                      <img
                        src="https://instadriver.co/img/searchdriver.svg"
                        alt="none"
                      />
                      <h4 className="service-heading">Post Profile</h4>
                      <p className="text-muted">
                        As a driver, all you need to do is to create an account
                        with Instadriver, go to your profile page and update
                        your profile. Once you post your profile, employers will
                        be able to find you.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <br />
                      <br />
                      <img
                        src="https://instadriver.co/img/calldriver.svg"
                        alt="none"
                      />
                      <h4 className="service-heading">
                        Employers find you and call you
                      </h4>
                      <p className="text-muted">
                        Employers normally come to Instadriver to find and hire
                        drivers. Employers will be able to view your profile,
                        and if they are impressed, they will call you and you
                        instantly get a driving job.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <br />
                      <br />
                      <img
                        src="https://instadriver.co/img/hiredriver.svg"
                        alt="none"
                      />
                      <h4 className="service-heading">And you get hired</h4>
                      <p className="text-muted">
                        Instadriver is the best and reliable platform for
                        drivers to get hired. When it comes to looking for
                        drivers, employers only know of Instadriver. Leverage
                        Instadriver to get a good job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
