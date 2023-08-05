import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";
import Subsribe from "../components/home-page/home-7/Subsribe";
import Link from "next/link";
import Social from "../components/home-page/home-7/Social";
import Service1 from "../components/services/Service1";
import Features from "../components/home-page/home-7/Features4";

const contact = () => {
  return (
    <>
      <Seo pageTitle="Leave App | Features" />

      <DefaulHeader />

      <div className="fancy-feature-seven pt-200 lg-pt-100">
        <div className="container" style={{marginTop:"150px"}}>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5" data-aos="fade-right">
              <div className="title-style-four text-center text-lg-start">
                <h2 className="main-title fw-500 tx-dark m0">
                  Our Application <span>Benefits.</span>
                </h2>
              </div>
              {/* /.title-style-four */}
            </div>
            {/* End .col-6 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0" style={{fontStyle:"italic"}}>
              Integrating the Employee Leave Management app with Dynamics 365 offers businesses a wide 
              range of benefits. Some of the key benefits are:
              </p>
            </div>
            {/* End .col-6 */}
          </div>
        </div>
        {/* End .container */}

        <div className="container pt-50 lg-pt-10">
          <div className="row gx-xxl-5">
            <Features />
          </div>
        </div>
        {/* /.container */}
      </div>


      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>

      
      <DefaultFooter />
    </>
  );
};

export default contact;
