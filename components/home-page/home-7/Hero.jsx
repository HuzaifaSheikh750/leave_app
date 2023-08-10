import HeroBtnGroup from "./HeroBtnGroup";

const Hero = () => {
  return (
    <>
      {/* <a href="#" className="slogan d-inline-block">
        <strong className="fw-500">Offer</strong> is going on till friday,
        $1.99/mo. <i className="fas fa-chevron-right" />
      </a> */}
      <h3 className="hero-heading fw-bold mt-45 mb-40 md-mt-20 mainHeading" style={{fontSize:"60px"}}>
      Making Employee Leaves Stress-free and Simple.
      </h3>
      <p className="text-md mb-50 lg-mb-30 pe-xxl-4" style={{fontStyle:"italic"}}>
      Effortlessly Manage Employee Leaves with KAISPE. Simplify Leave Requests, Maintain Accurate Records, and Boost Productivity
      </p>
      <HeroBtnGroup />
      <h2 className="fw-500 mt-40 mb-5"></h2>
      <p className="fs-18 opacity-75">
       
      </p>
    </>
  );
};

export default Hero;
