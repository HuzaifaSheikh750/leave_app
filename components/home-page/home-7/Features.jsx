import Link from "next/link";
import Image from "next/image";


const featureData = [
  {
    id: 1,
    icon: "/images/icon/icon_24.png",
    title: "Streamlined Processes",
    text: "Integrating leave management with Dynamics 365 streamlines the entire leave management process. It eliminates the need for manual leave tracking, making the process more efficient and effective.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/icon/icon_25.png",
    title: "Increased Productivity",
    text: "With automated leave management, employees and managers can spend more time on their core tasks, which increases overall productivity.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/icon/icon_26.png",
    title: "Improved Accuracy",
    text: "Automating leave management reduces the risk of errors and ensures accuracy in leave tracking, which minimizes disputes and helps to maintain compliance.",
    backgroundColor: "#F7EDFF",
  },
  // {
  //   id: 4,
  //   icon: "/images/icon/icon_28.svg",
  //   title: "Enhanced Visibility",
  //   text: "Integrating employee absent management solution with Dynamics 365 offers enhanced visibility into employee leave data. Managers and HR teams can access leave data in real-time, allowing them to make informed decisions and effectively manage employee absences. ",
  //   backgroundColor: "#FFEBDB",
  // },
  // {
  //   id: 5,
  //   icon: "/images/icon/icon_24.svg",
  //   title: "Better Compliance",
  //   text: "HR Leave management integration with Dynamics 365 and other ERPs ensures that leave policies are consistently applied across the organization, which helps to maintain compliance with labor laws and company policies. ",
  //   backgroundColor: "#E0F8F8",
  // },
  // {
  //   id: 6,
  //   icon: "/images/icon/icon_35.svg",
  //   title: "Data Insights",
  //   text: "KAISPE employee self-service app, compatible with all HR software and ERPs, offers data insights and analytics, enabling organizations to analyze leave patterns and make informed decisions about staffing and resource allocation.",
  //   backgroundColor: "#F7EDFF",
  // },
];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        // style={{ backgroundColor }}
      >
        <img src={icon} alt="icon" className="lazy-img" style={{width:"40px", height:"40px"}}/>
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-10">{text}</p>
      {/* <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a> */}
      
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
        <Link
               href="/Features"
              className="signup-btn-two fw-500 tran3s d-none d-lg-block"
              style={{ marginTop:"50px", marginLeft:"auto", marginRight:"auto", marginBottom:"0px", height:"50px", width:"200px", borderRadius:"50px", textAlign:"center", paddingTop:"12px", border:"1px solid #000000",}}
            >
              See All Features
        </Link>
    </>
  );
};

export default Features;
