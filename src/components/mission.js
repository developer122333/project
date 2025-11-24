import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="featured-services section light-background">
      <div className="container">
        <div className="  row mission-vision-row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <h3>رسالتنا</h3>
              <p className="leading-relaxed">
نحن ملتزمون بتصميم وتوريد وتركيب وصيانة أنظمة عالية الجودة في التدفئة المركزية، وفلترة وتدفئة المسابح، وتنقية وتحلية المياه، وشبكات المياه الرئيسية، بالاعتماد على الخبرة الهندسية، التقنيات المبتكرة، وأفضل الممارسات البيئية
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-eye"></i>
              </div>
              <h3>رؤيتنا</h3>
              <p className="leading-relaxed">
                أن نكون الشركة الرائدة والمفضلة في المنطقة لتوفير حلول المياه
                والطاقة الحرارية المتكاملة والمستدامة، والمساهمة الفعالة في خلق
                بيئات معيشية وصناعية أكثر صحة وكفاءة في استخدام الموارد.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-star"></i>
              </div>
              <h3>قيمنا</h3>
              <p className="leading-relaxed">
                 
                  نلتزم بأعلى معايير الجودة في اختيار المنتجات وتصميم الحلول
                وتركيبها. نستثمر في الخبرة والمعرفة مع التركيز على التدريب
                المستمر لضمان تقديم حلول موثوقة ودقيقة. نبحث  عن
                الابتكار لتوفير أحدث التقنيات والحلول التي تُسهم في كفاءة
                استخدام الموارد{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
