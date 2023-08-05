import { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroBtnGroup = () => {
  const options = [
    {
      value: "IOS & Android",
      label: "IOS & Android",
      icon: "/images/icon/icon_22.svg",
    },
    {
      value: "Mac & Windows",
      label: "Mac & Windows",
      icon: "/images/icon/icon_23.svg",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (event, value) => {
    event.preventDefault();
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="MD1OxDAO1Mg"
        onClose={() => setOpen(false)}
      />

      <div className="d-sm-flex align-items-center">
        <div
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
          onClick={() => setOpen(true)}
          role="button"
        >
          {/* style={{backgroundColor:"#f83e4b"}} */}
          <i className="bi bi-play" style={{borderColor:"#f83e4b"}} />
          <div className="ps-3">
            <span className="d-block fs-15 text-uppercase">Watch</span>
            <strong className="fs-18 fw-normal tx-dark d-block" style={{}}>
              Intro Video
            </strong>
          </div>
        </div>
        {/* style={{background:"black", color:"white", width:"210px", height:"50px", borderRadius:"50px", alignItems:"center", justifyContent:"center",cursor:"pointer"}} */}
        <div className =" download-btn d-inline-block mb-25 me-4 order-sm-first"  >
          <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksplvapp?tab=Overview" target="_blank">
          <img src="https://static.vecteezy.com/system/resources/previews/012/871/367/non_2x/microsoft-store-download-button-in-black-colors-get-it-from-microsoft-store-free-png.png" alt="icon" className="lazy-img" style={{width:"200px", height:"75px", paddingTop:"5px"}}/>
          </a>
          {/* <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksplvapp?tab=Overview"
           target="_blank"
           style={{textAlign:"center", paddingTop:"14px", paddingLeft:"15px", color:"white", textDecoration:"none", }}
          >
            Get it from AppSource */}
          {/* <button
            className="dropdown-toggle tran3s"
            type="button"
            id="appDownBtn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Get it from AppSource
          </button> */}

          {/* </a> */}


          {/* <ul
            className={`dropdown-menu ${showDropdown ? "show" : ""}`}
            aria-labelledby="appDownBtn"
          >
            {options.map((option, index) => (
              <li key={index}>
                <a
                  className="dropdown-item d-flex align-items-center fw-500"
                  href="#"
                  onClick={(e) => handleOptionClick(e, option.label)}
                >
                  <img src={option.icon} alt="" />
                  <span className="ps-2">{option.label}</span>
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default HeroBtnGroup;
