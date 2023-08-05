import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";
import Subsribe from "../components/home-page/home-7/Subsribe";
import Link from "next/link";
import Social from "../components/home-page/home-7/Social";
const contact = () => {
  return (
    <>
      <Seo pageTitle="Leave App | Contact" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Contact info
                </div>
                <h2 className="main-title fw-500 tx-dark">Get in Touch.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        {/* <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                Any question? Send us message.
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
   
            </div>
          </div>
        </div> */}
   
        <Map />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />

  
      {/* <div className="footer-style-three position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-9 col-md-9 m-auto text-center">
              <div className="title-style-four" data-aos="fade-up">
                <h2 className="main-title fw-500 text-white m0">
                  Ready to use our App? It’s just a matter of
                  <span>one Click</span>
                </h2>
              </div>
             
              <p
                className="text-lg text-white mt-35 mb-70 lg-mt-30 lg-mb-50"
                data-data-aos="fade-up"
              >
                Try it risk free — we don’t charge cancellation fees.
              </p>
              <Subsribe />

            </div>
          </div>
        </div>


        <div className="bottom-footer mt-80 lg-mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo d-flex justify-content-center justify-content-lg-start">
                  <Link href="/">
                    <img src="/images/logo/logo_03.png" alt="" width={120} style={{marginBottom:"45px"}}/>
                  </Link>
                  
                </div>
                <p style={{color:'white'}}>KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development.</p>
              </div>


              <div className="col-lg-4 text-center md-mt-30 md-mb-30">
                <h4 className="text-white">Find us on social media</h4>
                <Social />
              </div>
    

              <div className="col-lg-4 text-center">
                <h4 className="text-white">Email Address</h4>
                <a href="mailto:ask@januinc.com" className="mail">
                  info@kaispe.com
                </a>
                <h4 className="text-white mt-20">Quick Call</h4>
               <p className="text-white">USA: (+1)-315-791-4472
                  <br></br>PAK: (+92)-213-432-6085</p>
              </div>
            </div>
          </div>
        </div>


        <img
          src="/images/assets/ils_01.svg"
          alt="illustration"
          className="lazy-img bg-illustration w-100 shapes"
        />
      </div> */}
    </>
  );
};

export default contact;
