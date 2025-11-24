import IMAGES_ASSETS from 'constants/imagesAssets';
import React from 'react';
 
const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={IMAGES_ASSETS.hero}  alt="" data-aos="fade-in" />

      <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8  gap-12">
            <h2>شركة الحاج علي الذهبية</h2>
            <p className='mt-8'>الريادة في حلول المياه والطاقة الحرارية المتكامل</p>
            <a href="#about" className="btn-get-started11">  </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;