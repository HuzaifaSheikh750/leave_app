const Features2 = () => {
  const listItems = [
    "Amazing communication.",
    "Best trending designing experience.",
    "Email & Live chat.",
  ];

  const platformButtons = [
    {
      href: "#",
      imgSrc: "/images/icon/apple.svg",
      imgAlt: "media",
      platform: "App store",
    },
    {
      href: "#",
      imgSrc: "/images/icon/playstore.svg",
      imgAlt: "media",
      platform: "Google play",
    },
  ];

  return (
    <div className="block-style-three" data-aos="fade-right">
      <div className="title-style-four">
        <h2 className="main-title fw-500 tx-dark m0" style={{fontSize:"50px"}}>
         Leave Management <span>Apps.</span>
        </h2>
      </div>
      {/* /.title-style-four */}
      <p className="text-md pt-35 pb-30 lg-pb-10">
      KAISPE Employee Leave Management app offers customers an intuitive and user-friendly app that streamlines the entire leave management process, from submitting leave requests to reviewing them - all from one place and on the go. Our app leverages the cloud benefits of the Microsoft Power platform and SharePoint online, ensuring seamless and hassle-free leave management.
      </p>
      <p className="text-md" style={{marginTop:"-30px"}}>
      Our Leave Management App comes equipped with features such as leave policy rules, a flexible workflow engine, multi-language support, and a host of other unique features, all while offering a simple and easy-to-use interface. With our solution, customers can empower their employees to take control of their leave management process with a self-service roadmap.
      </p>
      <p className="text-md">
      Experience the simplicity of the technology and the power of our app in transforming employee leave management and creating a happier, more efficient workplace.
      </p>
      {/* <ul className="style-none list-item fs-18">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      {/* <div className="d-sm-flex align-items-center platform-button-group mt-60 lg-mt-30">
        {platformButtons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className={`d-flex align-items-center ${
              button.platform === "App store" ? "ios-button" : "windows-button"
            }`}
          >
            <img
              src={button.imgSrc}
              alt={button.imgAlt}
              className="lazy-img icon"
            />
            <div>
              <span>Download on the</span>
              <strong>{button.platform}</strong>
            </div>
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default Features2;
