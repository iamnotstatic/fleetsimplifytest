import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <section className id="portfolio">
        <div className="container-fluid">
          <div className="row imagewave">
            <div className="col-lg-6 bg-light text-center padding501">
              <div className="col-lg-9 float-right">
                <img
                  src="https://instadriver.co/img/employees.svg"
                  alt="none"
                />
                <br />
                <br />
                <h2 className="section-heading text-center">Employers!</h2>
                <img
                  src="https://instadriver.co/img/ocean-waves.png"
                  alt="none"
                />
                <p>
                  You don’t have to waste money posting vacancy Ads. Stop
                  posting vacancy ads on whatsapp groups and on social media.
                  Stop making desperate hires because you have few choices. Stop
                  nagging your friends to find you a driver. Get your driver
                  from Instadriver and it is free. At Instadriver, you have a
                  long list to choose a competent driver. Go to search bar,
                  select the driver category you want, choose the location of
                  the driver and press search button. Pick the driver you want.
                  It is that simple and instantaneous.
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center yellowbg">
              <div className="col-lg-9 float-left">
                <img src="https://instadriver.co/img/drivers.svg" alt="none" />
                <br />
                <br />
                <h2 className="section-heading text-center" style={{ color: '#ffffff' }}>Drivers!</h2>
                <img
                  src="https://instadriver.co/img/ocean-waves-white.png"
                  alt="none"
                />
                <p>
                  This is a platform to get employed faster and effortlessly. It
                  is not fun staying unemployed. You don’t have to toil asking
                  your relatives, friends and acquaintances to find you a job.
                  Get a job instantly. Just post your profile on Instadriver and
                  employers will find you instantaneously. You can increase your
                  visibility and increase the odds of getting hired by using the{' '}
                  <a
                    href="https://instadriver.co/verified_search"
                    style={{ color: '#fff' }}
                    className="keychainify-checked"
                  >
                    Verified Feature
                  </a>{' '}
                  and the{' '}
                  <a
                    style={{ color: '#fff' }}
                    href="https://instadriver.co/top_ad_features"
                    className="keychainify-checked"
                  >
                    Top Add Feature
                  </a>
                  . To create your profile for free, click{' '}
                  <a
                    style={{ color: '#fff' }}
                    href="https://instadriver.co/login"
                    className="keychainify-checked"
                  >
                    here
                  </a>
                  . This is how millennials and Gen Z find employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
