import Image from "next/image";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_147.svg",
      title: "Our Address",
      content: "USA: (590 Madison Avenue 21st Floor Manhattan, NY 10022)",
      content2: "Pakistan: (Suite#213 Sumya Business Avenue MACHS Karachi, Pakistan)",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_148.svg",
      title: "Contact Number",
      content: "",
      link: "USA: (+1)-315-791-4472",
      link2: "PAK: (+92)-213-432-6085",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_149.svg",
      title: "Email Address",
      content: "",
      link: "info@kaispe.com",
      delay: "300",
    
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br /><br/>
              {block.content2}
              {block.link 
                // <a
                //   href={block.link}
                //   className={
                //     block.link.includes("tel:") ? "call" : "webaddress"
                //   }
                // >
                //   {block.link.replace("tel:", "")}
                // </a>
              }<br></br>
              {block.link2}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
