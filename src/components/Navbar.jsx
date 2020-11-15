import React from 'react';

const Navbar = () => {
  return (
    <div className="init-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a className="navbar-brand" href="!#">
            <img
              src="https://instadriver.co/img/logo.svg"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link custom" href="!#">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom" href="!#">
                  Get Social
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom" href="!#">
                  Sign In
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                  <img
                    src="https://instadriver.co/img/menu.svg"
                    class="ml-2"
                    alt="none"
                  />
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="!#">
                    Home
                  </a>
                  <a class="dropdown-item" href="!#">
                    About InstaDriver
                  </a>
                  <a class="dropdown-item" href="!#">
                    Verified Search (For Employers & Drivers)
                  </a>
                  <a class="dropdown-item" href="!#">
                    Top Ad Feature (For Drivers)
                  </a>
                  <a class="dropdown-item" href="!#">
                    FAQs
                  </a>
                  <a class="dropdown-item" href="!#">
                    Contact Us
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="blkstrip">
        <div class="container">
          <span class="float-right">
            <img src="https://instadriver.co/img/message.svg" alt="none" />{' '}
            saysomething@instadriver.co
          </span>
        </div>
      </div>
      <div class="landing-intro">
        <div className="container">
          <div className="col-lg-5 intro-text">
            <div className="blackbox">
              <div className="intro-lead-in">
                Find and Hire A Driver. Its Free <br />
                and No Login Requirement
              </div>
              <form className="form">
                <div className="input-group mb-3">
                  <select className="form-control">
                    <option>Select Category</option>
                  </select>
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter a location"
                    aria-label="Enter a location"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                      <svg
                        class="feather feather-map-pin sc-dnqmqq jxshSx"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <select className="form-control">
                    <option>Select Search Type</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-lg-2 col-2">
                    <img
                      src="https://instadriver.co/img/filter.svg"
                      alt="none"
                      data-toggle="modal"
                      data-target="#filterModal"
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="col-lg-10 col-10">
                    <a
                      href="!#"
                      className="btn btn-primary btn-block"
                      style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                      }}
                    >
                      Search
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="filterModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Filter</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <form
                method="get"
                id="frmSearch1"
                name="frmSearch1"
                action="https://instadriver.co/driver/search"
                noValidate="novalidate"
              >
                <input type="hidden" name="cid" id="cid1" />
                <input type="hidden" name="sty" id="sty1" />
                <input type="hidden" name="loc" id="loc1" />
                {/* Modal body */}
                <div className="modal-body text-left">
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <div className="form-group mb-0">
                        <label htmlFor="currency">
                          Select currency used in your country
                        </label>
                      </div>
                      <div className="select selectbox">
                        <select
                          className="form-control valid"
                          id="currency"
                          name="currency"
                        >
                          <option value>Select Currency</option>
                          <option value="AFN">Afghan Afghani</option>
                          <option value="ALL">Albanian Lek</option>
                          <option value="DZD">Algerian Dinar</option>
                          <option value="EUR">Andorra Euro</option>
                          <option value="AOA">Angolan Kwanza</option>
                          <option value="XCD">East Caribbean Dolla</option>
                          <option value="XCD">East Caribbean Dolla</option>
                          <option value="ARS">Argentine Peso</option>
                          <option value="AMD">Armenian Dram</option>
                          <option value="AWG">Aruban Florin</option>
                          <option value="AUD">Australian Dollar</option>
                          <option value="EUR">Austria Euro</option>
                          <option value="AZN">Azerbaijani Manat</option>
                          <option value="BHD">Bahraini Dinar</option>
                          <option value="BDT">Bangladeshi Taka</option>
                          <option value="BBD">Barbadian Dollar</option>
                          <option value="BYR">Belarusian Ruble</option>
                          <option value="EUR">Belgium Euro</option>
                          <option value="BZD">Belize Dollar</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="BMD">Bermudian Dollar</option>
                          <option value="BTN">Bhutanese Ngultrum</option>
                          <option value="BWP">Botswana Pula</option>
                          <option value="BRL">Brazilian Real</option>
                          <option value="BGN">Bulgarian Lev</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="BIF">Burundian Franc</option>
                          <option value="KHR">Cambodian Riel</option>
                          <option value="XAF">Central African CFA </option>
                          <option value="CAD">Canadian Dollar</option>
                          <option value="CVE">Cape Verdean Escudo</option>
                          <option value="KYD">Cayman Islands Dolla</option>
                          <option value="XAF">Central African CFA </option>
                          <option value="CLP">Chilean Peso</option>
                          <option value="CNY">Chinese Yuan</option>
                          <option value="COP">Colombian Peso</option>
                          <option value="KMF">Comorian Franc</option>
                          <option value="NZD">New Zealand Dollar</option>
                          <option value="CRC">Costa Rican Colón</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="HRK">Croatian Kuna</option>
                          <option value="CUC">Cuban Convertible Pe</option>
                          <option value="EUR">Cyprus Euro</option>
                          <option value="CZK">Czech Koruna</option>
                          <option value="DKK">Danish Krone</option>
                          <option value="DJF">Djiboutian Franc</option>
                          <option value="XCD">East Caribbean Dolla</option>
                          <option value="DOP">Dominican Peso</option>
                          <option value="USD">United States Dollar</option>
                          <option value="EGP">Egyptian Pound</option>
                          <option value="USD">United States Dollar</option>
                          <option value="XAF">Central African CFA </option>
                          <option value="ERN">Eritrean Nakfa</option>
                          <option value="EUR">Estonia Euro</option>
                          <option value="ETB">Ethiopian Birr</option>
                          <option value="DKK">Danish Krone</option>
                          <option value="FJD">Fijian Dollar</option>
                          <option value="EUR">Finland Euro</option>
                          <option value="EUR">France Euro</option>
                          <option value="XPF">CFP Franc</option>
                          <option value="XAF">Central African CFA </option>
                          <option value="GEL">Georgian Lari</option>
                          <option value="EUR">Germany Euro</option>
                          <option value="GHS">Ghana Cedi</option>
                          <option value="GIP">Gibraltar Pound</option>
                          <option value="EUR">Greece Euro</option>
                          <option value="XCD">East Caribbean Dolla</option>
                          <option value="GTQ">Guatemalan Quetzal</option>
                          <option value="GBP">British Pound</option>
                          <option value="GNF">Guinean Franc</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="GYD">Guyanese Dollar</option>
                          <option value="HTG">Haitian Gourde</option>
                          <option value="HNL">Honduran Lempira</option>
                          <option value="HKD">Hong Kong Dollar</option>
                          <option value="HUF">Hungarian Forint</option>
                          <option value="ISK">Icelandic Króna</option>
                          <option value="INR">Indian Rupee</option>
                          <option value="IDR">Indonesian Rupiah</option>
                          <option value="IQD">Iraqi Dinar</option>
                          <option value="EUR">Ireland Euro</option>
                          <option value="GBP">British Pound</option>
                          <option value="ILS">Israeli New Shekel</option>
                          <option value="EUR">Italy Euro</option>
                          <option value="JMD">Jamaican Dollar</option>
                          <option value="JPY">Japanese Yen</option>
                          <option value="GBP">British Pound</option>
                          <option value="JOD">Jordanian Dinar</option>
                          <option value="KZT">Kazakhstani Tenge</option>
                          <option value="KES">Kenyan Shilling</option>
                          <option value="AUD">Australian Dollar</option>
                          <option value="KWD">Kuwaiti Dinar</option>
                          <option value="KGS">Kyrgyzstani Som</option>
                          <option value="LAK">Lao Kip</option>
                          <option value="EUR">Latvia Euro</option>
                          <option value="LBP">Lebanese Pound</option>
                          <option value="LSL">Lesotho Loti</option>
                          <option value="LRD">Liberian Dollar</option>
                          <option value="CHF">Swiss Franc</option>
                          <option value="EUR">Lithuania Euro</option>
                          <option value="EUR">Luxembourg Euro</option>
                          <option value="MGA">Malagasy Ariary</option>
                          <option value="MWK">Malawian Kwacha</option>
                          <option value="MYR">Malaysian Ringgit</option>
                          <option value="MVR">Maldivian Rufiyaa</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="EUR">Malta Euro</option>
                          <option value="USD">United States Dollar</option>
                          <option value="MRO">Mauritanian Ouguiya</option>
                          <option value="MUR">Mauritian Rupee</option>
                          <option value="MXN">Mexican Peso</option>
                          <option value="MDL">Moldovan Leu</option>
                          <option value="EUR">Monaco Euro</option>
                          <option value="MNT">Mongolian Tögrög</option>
                          <option value="EUR">Montenegro Euro</option>
                          <option value="XCD">East Caribbean Dolla</option>
                          <option value="MAD">Moroccan Dirham</option>
                          <option value="MZN">Mozambican Metical</option>
                          <option value="MMK">Burmese Kyat</option>
                          <option value="NAD">Namibian Dollar</option>
                          <option value="AUD">Australian Dollar</option>
                          <option value="NPR">Nepalese Rupee</option>
                          <option value="EUR">Netherlands Euro</option>
                          <option value="XPF">CFP Franc</option>
                          <option value="NZD">New Zealand Dollar</option>
                          <option value="NIO">Nicaraguan Córdoba</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="NGN" selected="true">
                            Nigerian Naira
                          </option>
                          <option value="NZD">New Zealand Dollar</option>
                          <option value="NOK">Norwegian Krone</option>
                          <option value="OMR">Omani Rial</option>
                          <option value="PKR">Pakistani Rupee</option>
                          <option value="PAB">Panamanian Balboa</option>
                          <option value="PGK">Papua New Guinean Ki</option>
                          <option value="PYG">Paraguayan Guaraní</option>
                          <option value="PEN">Peruvian Nuevo Sol</option>
                          <option value="PHP">Philippine Peso</option>
                          <option value="PLN">Polish Z?oty</option>
                          <option value="EUR">Portugal Euro</option>
                          <option value="QAR">Qatari Riyal</option>
                          <option value="RON">Romanian Leu</option>
                          <option value="RUB">Russian Ruble</option>
                          <option value="RWF">Rwandan Franc</option>
                          <option value="XCD">East Caribbean Dolla</option>
                          <option value="WST">Samoan</option>
                          <option value="EUR">San Marino Euro</option>
                          <option value="SAR">Saudi Riyal</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="RSD">Serbian Dinar</option>
                          <option value="SCR">Seychellois Rupee</option>
                          <option value="SLL">Sierra Leonean Leone</option>
                          <option value="BND">Brunei Dollar</option>
                          <option value="EUR">Slovakia Euro</option>
                          <option value="EUR">Slovenia Euro</option>
                          <option value="SBD">Solomon Islands Doll</option>
                          <option value="SOS">Somali Shilling</option>
                          <option value="ZAR">South African Rand</option>
                          <option value="EUR">Spain Euro</option>
                          <option value="LKR">Sri Lankan Rupee</option>
                          <option value="SDG">Sudanese Pound</option>
                          <option value="SRD">Surinamese Dollar</option>
                          <option value="SZL">Swazi Lilangeni</option>
                          <option value="SEK">Swedish Krona</option>
                          <option value="CHF">Swiss Franc</option>
                          <option value="TWD">New Taiwan Dollar</option>
                          <option value="TJS">Tajikistani Somoni</option>
                          <option value="THB">Thai Baht</option>
                          <option value="XOF">West African CFA Fra</option>
                          <option value="TOP">Tongan Pa?anga</option>
                          <option value="TTD">Trinidad And Tobago </option>
                          <option value="TND">Tunisian Dinar</option>
                          <option value="TRY">Turkish Lira</option>
                          <option value="TMT">Turkmenistan Manat</option>
                          <option value="AUD">Australian Dollar</option>
                          <option value="UGX">Ugandan Shilling</option>
                          <option value="UAH">Ukrainian Hryvnia</option>
                          <option value="AED">United Arab Emirates</option>
                          <option value="GBP">British Pound</option>
                          <option value="USD">United States Dollar</option>
                          <option value="UYU">Uruguayan Peso</option>
                          <option value="UZS">Uzbekistani Som</option>
                          <option value="VUV">Vanuatu Vatu</option>
                          <option value="VND">Vietnamese ??ng</option>
                          <option value="XPF">CFP Franc</option>
                          <option value="YER">Yemeni Rial</option>
                          <option value="ZMW">Zambian Kwacha</option>
                          <option value="BWP">Botswana Pula</option>
                        </select>
                        <div className="select__arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <div className="form-group mb-0">
                        <label htmlFor="min">
                          <strong>Salary</strong>
                        </label>
                      </div>
                      <div className="row ">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="min"
                            name="min"
                            placeholder="Minimum"
                            maxLength={15}
                          />
                        </div>
                        <div className=" col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="max"
                            name="max"
                            placeholder="Maximum"
                            maxLength={15}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-4">
                      <div className="form-group mb-0">
                        <label htmlFor="gdr">
                          <strong>Gender</strong>
                        </label>
                      </div>
                      <div className>
                        <div className="select selectbox">
                          <select id="gdr" name="gdr" className="form-control">
                            <option value>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          <div className="select__arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="dlp" className="text-left">
                        <strong>Years since driving Licence was issued</strong>
                      </label>
                      <div className="input-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="At least"
                          id="dlp"
                          name="dlp"
                          defaultValue
                          maxLength={15}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            Years
                          </span>
                        </div>
                        <label
                          htmlFor="dlp"
                          generated="true"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="dexp" className="text-left">
                        <strong>
                          Driving
                          <br /> experience
                        </strong>
                      </label>
                      <div className="input-group mb-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="At least"
                          id="dexp"
                          name="dexp"
                          defaultValue
                          maxLength={15}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            Years
                          </span>
                        </div>
                        <label
                          htmlFor="dexp"
                          generated="true"
                          className="error"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="alert alert-success">
                    You may consider editing your filters or watering down your
                    filters for fast search. Otherwise, go with the selected
                    filters.
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer text-center ">
                  <button
                    type="button"
                    className="btn btn-primary btn-form display-4 pr-3 pl-3"
                    onclick="search_driver_home();"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
