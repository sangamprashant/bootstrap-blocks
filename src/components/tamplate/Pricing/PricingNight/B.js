import React from 'react'

function PricingNightB() {
  const experts = [
    {
      title: 'Finance Expert',
      image: `${window.location.origin}/navblue.png`,
      
      description: 'Experts in financial modeling and valuation startup funding interim CFO work and market sizing.',
      onlineEveryDay: '8K online every day',
      projectsDone: '2K Project done by Finance Expert',
      buttonText: 'View Finance Expert',
    },
    {
      title: 'Developers',
      image: `${window.location.origin}/navblue.png`,
      description: 'Seasoned software engineers, coders, and architects with expertise across hundreds of technologies with developing tools.',
      onlineEveryDay: '8K online every day',
      projectsDone: '2K Project done by Developers',
      buttonText: 'View Developers',
    },
    {
      image: `${window.location.origin}/navblue.png`,
      title: 'Designers',
      description: 'Expert UI, UX Visual and interaction designers as well as a wide range of illustrators, animators, and more.',
      onlineEveryDay: '8K online every day',
      projectsDone: '2K Project done by Designers',
      buttonText: 'View Designers',
    },
  ];
    
      return (
        <div className="container-fluid">
          <div className="row g-2 mt-3">
            {experts.map((expert, index) => (
              <div className="col-md-4" key={index}>
                <div className="border text-white p-3 py-4">
                  <div className="text-left">
                    <img src={expert.image} width="40" alt={expert.title} />
                  </div>
                  <h5>{expert.title}</h5>
                  <span className="text1">{expert.description}</span>
                  <small className="fw-bolder mt-3">{expert.onlineEveryDay}</small>
                  <small className="fw-bolder mt-3">{expert.projectsDone}</small>
                  <div className="mt-5">
                    <button className="btn btn-primary">{expert.buttonText}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default PricingNightB
