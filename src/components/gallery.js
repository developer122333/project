import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
 
const Gallery = ({galleryImages}) => {

  return (
     
          
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView="auto"
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 20 },
            
          }}
          className="swiper"
          >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide  ">
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={image}
                >
                  <img
                    src={image}
                    className="img-fluid   w-full object-cover sm:h-80 md:h-60"
                    alt={`Gallery image ${index + 1}`}
                   />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Gallery;
