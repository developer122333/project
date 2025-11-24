import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import services from "data/servicesList";
import AboutSection from "components/serviceAbout";
import Gallery from "components/gallery";
import { HashLink } from "react-router-hash-link";
import SplashScreen from "components/preloaderScreen";
  const ServicePage = () => {
  const { id } = useParams(); // الحصول على المعرف من الرابط

  const service = services[Number(id) - 1];

   useEffect(() => {
     
  
      const script = document.createElement("script");
      script.src = "./assets/js/main2.js";
      script.async = true;
      script.defer = true;
      document.body.append(script);
    }, []);
  return (
    <>
    <div>
      <SplashScreen/>
      
         <MainSection service={service} />
      <AboutSection service={service} />
      <div className="gallery  section   ">
       
        <Gallery galleryImages={service.images}/>
      </div>
    </div>
    </>
  );
};

const MainSection = ({ service }) => {
  return (
    <section className="main-section section dark-background">
      <img src={service.image} alt="" />
      <div className="container">
        <div
          className="row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="h-40">
            <div className="flex flex-col h-full bg-cover bg-top bg-no-repeat rounded overflow-hidden">
              <div className="absolute top-0 left-0 right-0" />{" "}
              {/* طبقة شفافة */}
              <div className="flex flex-col justify-center items-center text-white text-center h-full relative">
                <h3 className="text-3xl font-heading">{service.title}</h3>

                <p className="text-sm py-4">
                  {
                    <span>
                      <HashLink
                        to={`/`}
                        className="text-white underline hover:text-gray-300"
                      >
                        الرئيسية/
                      </HashLink>
                      <HashLink
                        to={`#`}
                        className="text-white underline hover:text-gray-300"
                      >
                        تفاصيل الخدمة
                      </HashLink>
                    </span>
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainSection2 = ({
  service
}) => {
  return (
    <>
      <div className="h-50 px-6 mb-6 rounded">
        <div
          className="flex flex-col h-full bg-cover bg-top bg-no-repeat rounded overflow-hidden"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="flex flex-col justify-center items-center text-white text-center h-full">
            <h3 className="text-2xl">{service.title}</h3>
           <p className="text-sm py-4">
                  {
                    <span>
                      <HashLink
                        to={`/`}
                        className="text-white underline hover:text-gray-300"
                      >
                        الرئيسية/
                      </HashLink>
                      <HashLink
                        to={`#`}
                        className="text-white underline hover:text-gray-300"
                      >
                        تفاصيل الخدمة
                      </HashLink>
                    </span>
                  }
                </p>
          </div>
        </div>
      </div>
    </>
  );
};

 
export default ServicePage;
