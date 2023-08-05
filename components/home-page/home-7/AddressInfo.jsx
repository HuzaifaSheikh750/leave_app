const AddressInfo = () => {
  const addresses = [
    {
      icon: "/images/icon/icon_37.svg",
      title: "Microsoft",
      address: "Get it from AppSource",
    },
    // {
    //   icon: "/images/icon/icon_38.svg",
    //   title: "pakistan",
    //   address: "Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan",
    // },
  ];

  return (
    <>
      {addresses.map((address, i) => (
        
        <div className="col-md-15 d-flex" key={i} style={{textAlign:'center'}}>
          <div className="address-block-one">
            {/* <div className="icon position-absolute">
              <img src={address.icon} alt="icon" className="lazy-img" />
            </div> */}
            
            <div className="text-meta">
              {/* <h4 className="title">{address.title}</h4>
              <p className="fs-18">{address.address}</p> */}
              <img 
              style={{marginLeft:"0px", borderColor:"black"}}
              // src="data:image/png;base64,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"
              src="/images/media/download.jpg"
              />
            </div>
            {/* /.text-meta */}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressInfo;
