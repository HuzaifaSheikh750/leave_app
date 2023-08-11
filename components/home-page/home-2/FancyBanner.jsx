import Link from "next/link";

const   FancyBanner = () => {
  const bannerData = [
    {
      title: "TRSUTED SECURITY",
      mainTitle: "Leave Management App.",
      description:
        "KAISPE Employee Leave Management app offers customers an intuitive and user-friendly app that streamlines the entire leave management process, from submitting leave requests to reviewing them - all from one place and on the go. Our app leverages the cloud benefits of the Microsoft Power platform and SharePoint online, ensuring seamless and hassle-free leave management.",
        descriptiontwo: " Our Leave Management App comes equipped with features such as leave policy rules, a flexible workflow engine, multi-language support, and a host of other unique features, all while offering a simple and easy-to-use interface. With our solution, customers can empower their employees to take control of their leave management process with a self-service roadmap.",	
        descriptionthree:
        "Experience the simplicity of the technology and the power of our app in transforming employee leave management and creating a happier, more efficient workplace.",

        buttonLabel: "Click here to learn more",
      illustration: "/images/media/twoMobile.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
    },
    
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-6 col-lg-6 order-lg-left `}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-15 lh-lg mt-35 lg-mt-20">{data.description}</p>
                <p className="fs-15 lh-lg mt-35 lg-mt-15">{data.descriptiontwo}</p>
                <p className="fs-15 lh-lg mt-35 lg-mt-15">{data.descriptionthree}</p>
              </div>


              <div
                className={`col-xl-6 col-lg-6 col-md-8 m-auto order-lg-first`}
                data-aos={data.aos}
              >
                <div className="illustration-holder md-mt-60" style={{width:"110%", height:"100%"}}>
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    style={{ width: "100%" , height:"100%", marginLeft:"-100px"}}
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
