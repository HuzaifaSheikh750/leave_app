const   Pricing = () => {
  const plans = [
    {
      icon: "/images/icon/icon_57.svg",
      plan: "Basic Plan",
      features: [
        "Leave application",
        "Hierarchy based approval workflow",
        "Unlimited number of users",
        "Notifications",
        "Recall functionality",
      ],
      price: "$9.00",
      user: "/user/month",
      trial: "For Above 10 users",
      className: "pr-column pr-two",
    },
    {
      icon: "/images/icon/icon_59.svg",
      plan: "Advanced Plan",
      features: [
        "Leave quota management",
        "Multi site",
        "Multi language",
        "Delegation of Authoriy",
        "My Approvals workspace",
        "Approval history",
      ],
      price: "$10.00",
      user: "/user/month",
      trial: "For Above 10 users",
      className: "pr-column pr-three",
    },
    {
      icon: "/images/icon/icon_56.svg",
      plan: "Basic Plan",
      features: [
        "Leave application",
        "Hierarchy based approval workflow",
        "Unlimited number of users",
        "Notifications",
        "Recall functionality",
      ],
      price: "$12.00",
      user: "/user/month",
      trial: "For up to 5-10 users",
      className: "pr-column pr-one",
    },
   
    {
      icon: "/images/icon/icon_58.svg",
      plan: "Advanced Plan",
      features: [
        "Leave quota management",
        "Multi site",
        "Multi language",
        "Delegation of Authoriy",
        "My Approvals workspace",
        "Approval history",
      ],
      price: "$14.00",
      user: "/user/month",
      trial: "For up to 5-10 users",
      className: "pr-column  active",
    },
    
  ];
  // const plans2 = [
  //   {
  //     icon: "/images/icon/icon_56.svg",
  //     plan: "Starter Plan",
  //     features: [
  //       "Unlimited Email",
  //       "5gb Hosting & Domain",
  //       "Email & Live chat.",
  //     ],
  //     price: "$19.99",
  //     trial: "up to 3 user + 1.99 per user",
  //     className: "pr-column pr-one",
  //   },
  //   {
  //     icon: "/images/icon/icon_57.svg",
  //     plan: "Silver Plan",
  //     features: [
  //       "Unlimited Email",
  //       "5gb Hosting & Domain",
  //       "2 website 3 sub domain",
  //       "Email & Live chat.",
  //       "Backling",
  //     ],
  //     price: "$59.99",
  //     trial: "up to 5 user + 1.99 per user",
  //     className: "pr-column active",
  //   },
  //   {
  //     icon: "/images/icon/icon_58.svg",
  //     plan: "Gold Plan",
  //     features: [
  //       "Unlimited Email",
  //       "5gb Hosting & Domain",
  //       "Email & Live chat.",
  //     ],
  //     price: "$99.99",
  //     trial: "up to 7 user + 1.99 per user",
  //     className: "pr-column pr-two",
  //   },
  //   {
  //     icon: "/images/icon/icon_59.svg",
  //     plan: "Diamond Plan",
  //     features: [
  //       "Unlimited Email",
  //       "5gb Hosting & Domain",
  //       "Email & Live chat.",
  //     ],
  //     price: "$129.99",
  //     trial: "up to 10 user + 1.99 per user",
  //     className: "pr-column pr-three",
  //   },
  // ];

  return (
    <div data-aos="fade-up">
      {/* <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-three wow fadeInUp"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#month"
            type="button"
            role="tab"
          >
            Monthly
          </button>
        </li>
 
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#year"
            type="button"
            role="tab"
          >
            Yearly
          </button>
        </li>

      </ul> */}
      {/* End ul */}

      <div className="pricing-table-area-three mt-160 lg-mt-100 xs-mt-60 wow fadeInUp">
        <div className="tab-content">
          <div className="tab-pane show active" id="month" >
            <div className="row gx-0 align-items-center" >
              {plans.map((plan, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    {/* <img src={plan.icon} alt="" className="icon" /> */}
                    <div className="plan tx-dark" style={{fontSize:"25px"}}>{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                      <div className="price tx-dark pt-25">{plan.price}</div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        {plan.user}
                      </div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        {plan.trial}
                      </div>
                      <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.ksplvapp?tab=PlansAndPrice" className="btn-twelve fw-500 tran3s">
                          Get it now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
          {/* /.tab-pane */}

          {/* <div className="tab-pane" id="year">
            <div className="row gx-0 align-items-center">
              {plans2.map((plan, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    <img src={plan.icon} alt="" className="icon" />
                    <div className="plan tx-dark">{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                      <div className="price tx-dark">{plan.price}</div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        {plan.trial}
                      </div>
                      <a href="#" className="btn-twelve fw-500 tran3s">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
