import Link from "next/link";
import Footer2 from "./Footer2";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";
import Social from '../../components/home-page/home-7/Social2' 


const   DefaultFooter = () => {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/Kaipe-logo.png" width={220} height={45} alt="brand" style={{marginBottom:"20px", marginLeft:"0px"}}/>
                </Link>
              </div>
              <p >KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development.</p>
              <Social/>
            
            </div>
            {/* End .col */}
            <div className="col-lg-4  md-mt-30 md-mb-30">
            <h4 style={{marginTop:"15px", color:"#588AE8"}}>Our Address</h4>
                <p className="fs-17" style={{alignItems:""}}><i class="fa fa-house" style={{marginRight:"10px", marginBottom:"10px"}}></i>590 Madison Avenue 21st Floor Manhattan, NY 10022 USA.</p>
                <p className="fs-17"><i class="fa fa-house" style={{marginRight:"10px", marginBottom:"10px"}}></i> Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan. </p>
                {/* home icons */}

           
               
            </div>
            {/* <Footer2 /> */}

            <div className="col-lg-3 ">
            <h4 style={{marginTop:"20px",  color:"#588AE8"}}>Email</h4>
                <a href="mailto:ask@januinc.com" className="mail"> <i class="fa fa-envelope" style={{marginRight:"10px", marginBottom:"10px"  }}></i>info@kaispe.com</a>
                <h4 className="mt-20" style={{ color:"#588AE8"}}>Phone</h4>
               <p style={{ marginRight:"10px", marginBottom:"10px"}}><i class="fa fa-phone" style={{marginRight:"10px", marginBottom:"10px"}}></i>USA: (+1)-315-791-4472<br></br><i class="fa fa-phone" style={{marginRight:"10px", marginBottom:"10px"}}></i>PAK: (+92)-213-432-6085</p>

          
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <img
        src="/images/shape/shape_173.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default DefaultFooter;
