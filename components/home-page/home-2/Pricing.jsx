import { useState } from "react";

const plans = [
  {
    id: 3 ,
    name: "Basic Plan",
    details: "for Above 10 Users ",
    price: "9.00",
    billing: "",
    limit: "/user/month",
    btnClass: "trial-button",
    heading: "Foundation App functionality includes:",	
    features: [
      "Leave application",
      "Hierarchy based approval workflow",
      "Unlimited number of users",
      "Notifications",
      "Recall functionality",
    ],
    bgColor: "#FFF7EB",
    animDelay: "0",
  },
  {
    id: 1,
    name: "Basic Plan",
    details: "for 5-10 users",
    price: "12.00",
    billing: "",
    limit: "/user/month",
    btnClass: "trial-button",
    heading: "Foundation App functionality includes:",	
    features: [
      "Leave application",
      "Hierarchy based approval workflow",
      "Unlimited number of users",
      "Notifications",
      "Recall functionality",
    ],
    bgColor: "#E2F2FD",
    animDelay: "100",
  },
 
 
 
  {
    id: 2,
    name: "Advance Plan",
    details: "for Above 10 Users",
    price: "10.00",
    billing: "",
    limit: "/user/month",
    btnClass: " btn-fourteen fw-500 tran3s w-100",
    heading: "All of Basic plan plus:",	
    features: [
      "Leave quota management",
      "Multi site",
      "Multi language",
      "Delegation of Authoriy",
      "My Approvals workspace", 
      "Approval history", 
    ],
    bgColor: "#FFEBEB",
    animDelay: "200",
  },

  {
    id: 3,
    name: "Advance Plan",
    details: "for 5-10 users ",
    price: "14.00",
    billing: "",
    limit: "/user/month",
    btnClass: "trial-button",
    heading: "All of Basic plan plus:",	
    features: [
      "Leave quota management",
      "Multi site",
      "Multi language",
      "Delegation of Authoriy",
      "My Approvals workspace", 
      "Approval history", 
    ],
    bgColor: "#E4F4F1",
    animDelay: "300",
  },  
];

const   Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  return (
    <>
      {plans.map((plan) => (
        <div
          className="col-xl-3 col-sm-6"
          key={plan.id}
          data-aos="fade-up"
         
          data-aos-delay={plan.animDelay}
        >
          <div
        
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "active" : ""
            }`}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {plan.details}
            </div>
            <div
              className="top-banner align-items-center d-md-flex"
              style={{ background: plan.bgColor }}
            >
              <div className="price fw-500" style={{ margin:"auto"}}>
                <sup>$</sup>
                {plan.price}
                
                <em className="d-block" style={{textAlign:"center"}}>{plan.limit}</em>
              </div>
              {/* <div>
                <span>{plan.billing}</span>
                <em className="d-block">{plan.limit}</em>
              </div> */}
            </div>

            <p style={{marginTop:"30px", marginBottom:"-30px", textAlign:"start", fontWeight:"500"}}>{plan.heading}</p> 
            {/* /.top-banner */}
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksplvapp?tab=PlansAndPrice" target="_blank" className={plan.btnClass}>
            Get it now
            </a>
            {/* <div className="trial-text pt-25 tx-dark">
              No card required, cancel any time
            </div> */}
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </>
  );
};

export default Pricing;
