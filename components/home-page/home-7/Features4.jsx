import Link from "next/link";
import Image from "next/image";


const featureData = [
  {
    id: 1,
    icon: "/images/featuresIcons/LeaveRequest.png",
    title: "Leave Request Submission",
    text: "Employees can easily submit their leave requests through our intuitive app, which can be accessed from anywhere, anytime. This feature empowers employees to take control of their own leave management process.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/featuresIcons/policy.png",
    title: "Leave Policy Rules",
    text: "Our solution allows customers to configure leave policy rules for specific leave types. This ensures all leave requests comply with company policies and helps avoid confusion or misunderstandings.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/featuresIcons/Flexiblewindow.png",
    title: "Flexible Workflow",
    text: "Our solution offers a flexible workflow engine that allows line managers and HR departments to approve or reject leave requests easily. This feature ensures that the leave approval process is streamlined and efficient.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 4,
    icon: "/images/featuresIcons/feedback.png",
    title: "Leave Review",
    text: "Our app allows line managers and HR departments to review leave requests conveniently. They can view the leave details in the review email or the app, making it easier to manage the leave approval process. ",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 5,
    icon: "/images/featuresIcons/MultiLanguage.png",
    title: "Multi-Language Support",
    text: "Our app offers multi-language support, ensuring employees from diverse backgrounds can use the app without any language barriers.",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 6,
    icon: "/images/featuresIcons/datainsight.png",
    title: "Leave Data Insights",
    text: "Our solution provides leave data insights for a specific employee and specific leave types. This feature enables line managers and HR departments to analyze leave data and make informed decisions about employee leave management.",
    backgroundColor: "#F7EDFF",
  },
];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        
      >
        <img src={icon} alt="icon" className="lazy-img" style={{width:"50px", height:"50px"}}/>
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
          className="col-lg-4 col-md-6  col-xs-12"
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
    </>
  );
};

export default Features;
