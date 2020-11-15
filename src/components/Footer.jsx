import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img src="https://instadriver.co/img/footerlogo.svg" alt="none" />
            </div>
            <div className="col-md-3 col-sm-6 text-left spacing">
              <h4 className="service-heading text-left">Useful links</h4>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                About InstaDriver
                <br />
              </a>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                Verified Search (For Employers &amp; Drivers)
                <br />
              </a>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                Top Ad Feature (For Drivers)
              </a>
            </div>
            <div className="col-md-2 col-sm-6 text-left spacing">
              <h4 className="service-heading text-left">Useful links</h4>
              {/*               <a class="links" href="#">Post Profile (For Drivers)<br></a>*/}
              <a
                className="links keychainify-checked"
                href="#!"
              >
                Driver Sign In
                <br />
              </a>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                Driver Sign Up
              </a>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                Employer Sign in
              </a>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                Employer Sign up
              </a>
            </div>
            <div className="col-md-2 col-sm-6 text-left spacing">
              <h4 className="service-heading text-left">Useful links</h4>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                FAQs
                <br />
              </a>
              <a
                className="links keychainify-checked"
                href="#!"
              >
                Contact Us
                <br />
              </a>
              <a
                className="links keychainify-checked"
                href="https://instadriver.co/terms_conditions"
              >
                Terms &amp; Conditions
              </a>
            </div>
            <div className="col-md-3 col-sm-6 text-left spacing">
              <h4 className="service-heading text-left">Social Media</h4>
              <a className="links keychainify-checked" href="!#"></a>
              <ul>
                <a className="links keychainify-checked" href="!#"></a>
                <li className="list-inline-item">
                  <a className="links keychainify-checked" href="!#"></a>
                  <a
                    href="https://www.facebook.com/instadrivers"
                    rel="noreferrer"
                    target="_blank"
                    className="keychainify-checked"
                  >
                    <img
                      src="https://instadriver.co/img/facebook.svg"
                      alt="none"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/Instadriver1"
                    target="_blank"
                    rel="noreferrer"
                    className="keychainify-checked"
                  >
                    <img
                      src="https://instadriver.co/img/twitter.svg"
                      alt="none"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.youtube.com/channel/UCIyNdSi0KEi0mIGblffLkpg/featured?disable_polymer=1"
                    target="_blank"
                    rel="noreferrer"
                    className="keychainify-checked"
                  >
                    <img
                      src="https://instadriver.co/img/youtube.svg"
                      alt="none"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/instadriverx/"
                    target="_blank"
                    rel="noreferrer"
                    className="keychainify-checked"
                  >
                    <img
                      src="https://instadriver.co/img/instagram.svg"
                      alt="none"
                    />
                  </a>
                </li>
              </ul>
              <br />
            </div>
            <div className="col-md-2 col-sm-6 text-left spacing">
              <h4 className="service-heading text-left">Contact Info</h4>
              {/*                        +254722334455
                        +254711887754<br>*/}
              <a
                className="links keychainify-checked"
                href="mailto:saysomething@instadriver.co"
              >
                saysomething@instadriver.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
