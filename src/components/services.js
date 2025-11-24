import React from 'react';
import services from 'data/servicesList'
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, delay, id }) => (
    <div className="col-lg-6 col-xl-3">
        <div className="service-card" data-aos="zoom-in" data-aos-delay={delay}>
            <div className="card-body">
                <div className="feature-image">
                    <img src={image} alt={title} className="img-fluid" />
                </div>
                <p>{description}</p>
            </div>
            <div className="h-24 p-4 text-center">
                <p className='font-bold text-base text-heading-color'>{title}</p>
            </div>
            <div className="card-footer">
                <Link to={`/service/${id}`} className="btn-explore ">
                   عرض التفاصيل
                    <i className=" mr-1 bi bi-arrow-up-right"></i>
                </Link>
            </div>
        </div>
    </div>
);// Main AltServices Component
const AltServices = () => {
 

  return (
    <section id="services" className="alt-services section light-background">
       <div className="container section-title" data-aos="fade-up">
        <h2>
        خدماتنا
          <br />
        </h2>
        
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
               image={service.image} 
              delay={service.delay} 
              id={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AltServices;


