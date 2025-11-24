import React from "react";
import IMAGES_ASSETS from "../constants/imagesAssets";
import MissionVision from "./mission";
import Pages from "constants/pagesNames";

const About = () => {
 
  return (
    <section id="about"  >
      <AboutSection/>
      <MissionVision/>
        
    </section>
  );
};
const AboutSection = () => {
 
  return (
    <section   className="about section">
       <div className="container section-title" data-aos="fade-up">
        <h2>
          من نحن
          <br />
        </h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-7 flex lg:h-120 items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={IMAGES_ASSETS.gallery40}
              className="img-fluid w-full  bg-cover h-full"
              alt="."
            />
          </div>
          <div
            className="col-lg-5 flex flex-col   "
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="  ps-0 ps-lg-5">
              <h1 className=" text-xl leading-loose">
                تُعد شركة الحاج علي  من الشركات الرائدة والمتخصصة في تقديم حلول
                هندسية متكاملة ومستدامة ضمن قطاعي المياه والطاقة الحرارية
                (التدفئة). نحن نعمل على توفير بيئات مريحة، آمنة، وصحية، مع
                التزامنا بأعلى معايير الكفاءة والجودة في جميع مراحل التصميم،
                التوريد، التركيب، والصيانة.
              </h1>
            </div>
            <div className="position-relative mt-4 " >
              <img
                src={IMAGES_ASSETS.gallery41}
                className="img-fluid lg:h-80 w-full "
                alt=""
              />
            </div>
                 

          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
