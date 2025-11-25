import IMAGES_ASSETS from "constants/imagesAssets";
import React from "react";

// Feature Item Component

// Feature Item Component
const FeatureItem = ({ icon, title, description, delay }) => (
  <div
    className={`features-item  py-4 d-flex ps-0 ps-lg-3  `}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <i className={`bi ${icon} flex-shrink-0 feature-icon sm:text-5xl`}></i>
    <div className="feature-content">
      <h4>{title}</h4>
      <p className="leading-loose">{description}</p>
    </div>
  </div>
);

const features = [
  {
    icon: "bi-check2-square",
    title: "جودة لا تقبل المساومة",
    description:
      "نعتمد في جميع حلولنا على مواد ومعدات مطابقة للمواصفات العالمية، لضمان متانة وطول عمر الأنظمة، وتحقيق نقاء مثالي وأداء حراري مستدام.",
    delay: 200,
  },
  {
    icon: "bi-graph-up",
    title: "كفاءة قصوى في الأداء",
    description:
      "        نركز على تطبيق تقنيات موفرة للطاقة والموارد، لضمان تشغيل أنظمتكم بأقل تكلفة ممكنة، مما يعكس أعلى مستويات الكفاءة التشغيلية والبيئية في كل خدمة نقدمها",
    delay: 300,
  },

  {
    icon: "bi-person-check",
    title: "خبرة متراكمة",
    description:"فريقنا يتمتع بخبرة واسعة ومؤهلة في تصميم وتنفيذ أعقد المشاريع المائية والحرارية، مما يمكننا من تقديم استشارات دقيقة وحلول مُخصصة تتجاوز التوقعات وتضمن الدقة والموثوقية.",
    delay: 300,
  },
];
// Main Features Component
const Features = () => {
  return (
    <section id="why-us" className="why-us section">
      <div className="container section-title" data-aos="fade-up">
        <h2>
          لماذا تختارنا <br />
        </h2>
      </div>
      <div className="container">
        <div className="row gy-4   items-center">
          <div className=" col-lg-7   flex flex-col justify-center">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
          <div
            className="features-image col-lg-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={IMAGES_ASSETS.gallery42}
              alt=""
              className="w-full md:h-120 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
