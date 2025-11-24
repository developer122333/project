import React from "react";
import Gallery from "./gallery";
import IMAGES_ASSETS from "constants/imagesAssets";

const GallerySection = () => {
  const galleryImages = [
    IMAGES_ASSETS.gallery7,
    IMAGES_ASSETS.gallery8,
    IMAGES_ASSETS.gallery15,
    IMAGES_ASSETS.gallery16,
    IMAGES_ASSETS.gallery17,
      IMAGES_ASSETS.gallery21,
    IMAGES_ASSETS.gallery22,
    IMAGES_ASSETS.gallery23,
    IMAGES_ASSETS.gallery24,
    IMAGES_ASSETS.gallery27,
    IMAGES_ASSETS.gallery30,
    IMAGES_ASSETS.gallery32,
    IMAGES_ASSETS.gallery33,
    IMAGES_ASSETS.gallery36,
    IMAGES_ASSETS.gallery38,
  ];

  return (
    <section id="gallery1" className="gallery section  ">
      <div className="container section-title" data-aos="fade-up">
        <h2>أعمالنا</h2>
      </div>
      <Gallery galleryImages={galleryImages} />
    </section>
  );
};

export default GallerySection;
