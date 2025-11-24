import React from "react";
const FeatureItem = ({ icon, title, description, delay }) => (
  <div
    className={` items-start      d-flex ps-0 ps-lg-3 ${delay ? "mt-4" : ""}`}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <i
      className={`    text-prim  bi bi-check2-all flex-shrink-0 ml-2`}
      style={{ fontSize: "28px" }}
    ></i>
    <div className="     ">
      <p className="font-semibold text-lg text-heading-color mb-0">{title}</p>
      <p className="leading-loose mb-0 ">{description}</p>
    </div>
  </div>
);

const About = ({ service }) => {
  return (
    <section className="about section">
      {/* Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-7 flex items-center px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              style={{ width: "100%" }}
              src={service.image}
              className="img-fluid rounded-xl md:h-120"
              alt=""
            />
          </div>
          <div
            className="col-lg-5 d-flex flex-column justify-start"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className=" py-4 ps-0 ps-lg-5 d-flex flex-column">
              <p className="font-semibold text-lg   leading-loose mb-0">
                {service.description}{" "}
              </p>
              <div className="position-relative mt-2">
                {service.features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    delay={feature.delay}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
