/*import IMAGES_ASSETS from "constants/imagesAssets";
import React from "react";

const InfoItem = ({ icon, title, children }) => (
  <div className="col-lg-3 col-md-6 d-flex">
    <i className={`bi ${icon} icon ml-2`}></i>
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

const SocialLink = ({ href, iconClass }) => (
  
  <a href={href} className={`mx-2 ${iconClass}`}>
    <i className={`bi bi-${iconClass}`}></i>
  </a>
);

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61582608902079&mibextid=ZbWKwL",
    iconClass: "bi-facebook",
  },
  {
    href: "https://www.instagram.com/zha.hajali1?igsh=MThkbGlib2I3ZzZxaQ==",
    iconClass: "bi-instagram",
  },
  {
    href: "https://whatsapp.com/channel/0029Vb72AJPIHph98Upn3x0L",
    iconClass: "bi-whatsapp",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-3">
          <InfoItem 
            icon="bi-geo-alt" 
            title="العنوان">
            <span>دمشق - زبلطاني</span>
            <p>ابن عساكر - جانب الهرم</p>
          </InfoItem>

          <InfoItem 
            icon="bi-telephone" 
            title="Contact">
            <div>
              <strong>الهاتف:</strong>
              <br />
              <a className="hover:underline hover:accentColor default-color" href="tel:0115427167">
                0115427167
              </a>
              <br />
              <div className="mt-2">
                <strong>البريد الالكتروني:</strong>
                <br />
                <a
                  className="hover:underline hover:accentColor default-color"
                  href="mailto:mhmd@zhajjali.com"
                >
                  mhmd@zhajjali.com
                </a>
              </div>
              <br />
            </div>
          </InfoItem>

          <InfoItem 
            icon="bi-clock" 
            title="أوقات العمل">
            <p>
              <strong>السبت-الخميس:</strong> <span>8AM - 7PM</span>
              <br />
              <strong>الجمعة:</strong> <span>مغلق</span>
            </p>
          </InfoItem>

          <div className="col-lg-3 col-md-6 ">
            <div className="flex items-center justify-start">
              <img className="h-32" src={IMAGES_ASSETS.barCode} alt="Barcode" />
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <div className="flex sm:flex-col md:flex-row md:flex-wrap w-full items-center justify-between">
          <div className="flex flex-wrap py-1">
            <p>جميع الحقوق محفوظة لدى </p>
            <a className="px-1 sitename font-bold hover:underline hover:accentColor default-color" href="/">شركة الحاج علي الذهبية</a>
            &copy;2025
          </div>
          <div className="social-links d-flex justify-content-center py-1">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                iconClass={link.iconClass}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
 
   import IMAGES_ASSETS from "constants/imagesAssets";
import React from "react";

const InfoItem = ({ icon, title, children }) => (
  <div className="col-lg-3 col-md-6 d-flex">
    <i className={`bi ${icon} icon ml-2`}></i>
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

const SocialLink = ({ href, iconClass }) => (
  
  <a href={href} className={`mx-2 ${iconClass}`}>
    <i className={`bi bi-${iconClass}`}></i>
  </a>
);

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61582608902079&mibextid=ZbWKwL",
    iconClass: "bi-facebook",
  },
  {
    href: "https://www.instagram.com/zha.hajali1?igsh=MThkbGlib2I3ZzZxaQ==",
    iconClass: "bi-instagram",
  },
  {
    href: "https://whatsapp.com/channel/0029Vb72AJPIHph98Upn3x0L",
    iconClass: "bi-whatsapp",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="flex w-full items-center justify-center  ">
          
          <div className=" ">
            <div className="flex items-center ">
              <img className="h-28" src={IMAGES_ASSETS.barCode} alt="Barcode" />
            </div>
          </div>
        </div>
      </div>
  
      <div className="container   text-center mt-4">
        <div className="flex flex-col w-full items-center justify-between">
          
          <div className="social-links d-flex justify-content-center py-1">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                iconClass={link.iconClass}
              />
            ))}
          </div>
          <div className="flex flex-wrap py-1">
            <p>جميع الحقوق محفوظة لدى </p>
            <a className="px-1 sitename font-bold hover:underline hover:accentColor default-color" href="/">شركة الحاج علي الذهبية</a>
            &copy;2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  
*/
 


/*
import IMAGES_ASSETS from "constants/imagesAssets";
import React from "react";

 const SocialLink = ({ href, iconClass }) => (
  <a href={href} className={`mx-2 ${iconClass}`}>
    <i className={`bi bi-${iconClass}`}></i>
  </a>
);

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61582608902079&mibextid=ZbWKwL",
    iconClass: "bi-facebook",
  },
  {
    href: "https://www.instagram.com/zha.hajali1?igsh=MThkbGlib2I3ZzZxaQ==",
    iconClass: "bi-instagram",
  },
  {
    href: "https://whatsapp.com/channel/0029Vb72AJPIHph98Upn3x0L",
    iconClass: "bi-whatsapp",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background  ">
              <div className="container">

        <div className="row gy-3">
      
  <div className="col-lg-3 col-md-6 d-flex  flex-col  items-start justify-start">
          <h4>تواصل معنا </h4>

          <div>
            <strong>البريد الكتروني :</strong>
            <br />
            <a
              className="hover:underline hover:accentColor default-color"
              href="mailto:mhmd@zhajjali.com"
            >
              mhmd@zhajjali.com
            </a>
            <br />
            <a
              className="hover:underline hover:accentColor default-color"
              href="mailto:zha.hajali@gmail.com"
            >
              zha.hajali@gmail.com
            </a>
            <br />
            
            <strong>الهاتف :</strong>
            <br />
            <a
              className="hover:underline hover:accentColor default-color"
              href="tel:0115427167"
            >
              0115427167
            </a>
             <br />
             <a
            className="hover:underline hover:accentColor default-color"
            href="tel: +963938525704"
          >
            0938525704
          </a>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex">
          <div>
            <a
             
              href="/#services"
            >
              <h4  className="hover:underline hover:accentColor default-color">خدماتنا</h4>{" "}
            </a>
             <a
               href="/#about"
            >
              <h4  className="hover:underline hover:accentColor default-color">عن الشركة </h4>{" "}
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex      items-start justify-start">
          <div className="flex  flex-col w-full h-full  items-start justify-start">
            
            <h4 className="px-1"> تابعنا </h4>
            <div className="social-links d-flex justify-content-center py-1  ">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  iconClass={link.iconClass}
                />
              ))}
            </div>
          </div>
          
        </div>

        <div className="col-lg-3 col-md-6 d-flex">
          <div className="flex w-full items-start justify-start  ">
            <div className=" ">
              <div className="flex items-center ">
                <img
                  className="h-44"
                  src={IMAGES_ASSETS.barCode}
                  alt="Barcode"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright  text-center mt-4">
        <div className="flex  flex-col w-full items-center justify-between">
          <div className="flex flex-wrap py-1">
            <p>جميع الحقوق محفوظة لدى </p>
            <a
              className="px-1 sitename font-bold hover:underline hover:accentColor default-color"
              href="/"
            >
              شركة الحاج علي الذهبية
            </a>
            &copy;2025
          </div>
        </div>
      </div> </div>
    </footer>
  );
};

export default Footer; 

*/
/*
import IMAGES_ASSETS from "constants/imagesAssets";
import React from "react";

const InfoItem = ({ icon, title, children }) => (
  <div className="col-lg-3 col-md-6 d-flex">
    <i className={`bi ${icon} icon ml-2`}></i>
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

const SocialLink = ({ href, iconClass }) => (
  
  <a href={href} className={`mx-2 ${iconClass}`}>
    <i className={`bi bi-${iconClass}`}></i>
  </a>
);

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61582608902079&mibextid=ZbWKwL",
    iconClass: "bi-facebook",
  },
  {
    href: "https://www.instagram.com/zha.hajali1?igsh=MThkbGlib2I3ZzZxaQ==",
    iconClass: "bi-instagram",
  },
  {
    href: "https://whatsapp.com/channel/0029Vb72AJPIHph98Upn3x0L",
    iconClass: "bi-whatsapp",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="col gy-3">
            <div className="w-full ">
           
          </div>
          <div className="w-full ">
            <div className="flex items-center justify-center">
              <img className="h-44" src={IMAGES_ASSETS.barCode} alt="Barcode" />
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <div className="flex sm:flex-col md:flex-row md:flex-wrap w-full items-center justify-between">
          <div className="flex flex-wrap py-1">
            <p>جميع الحقوق محفوظة لدى </p>
            <a className="px-1 sitename font-bold hover:underline hover:accentColor default-color" href="/">شركة الحاج علي الذهبية</a>
            &copy;2025
          </div>
          <div className="social-links d-flex justify-content-center py-1">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.href}
                iconClass={link.iconClass}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; */


import IMAGES_ASSETS from "constants/imagesAssets";
import React from "react";

 const SocialLink = ({ href, iconClass }) => (
  <a href={href} className={`mx-2 ${iconClass}`}>
    <i className={`bi bi-${iconClass}`}></i>
  </a>
);

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61582608902079&mibextid=ZbWKwL",
    iconClass: "bi-facebook",
  },
  {
    href: "https://www.instagram.com/zha.hajali1?igsh=MThkbGlib2I3ZzZxaQ==",
    iconClass: "bi-instagram",
  },
  {
    href: "https://whatsapp.com/channel/0029Vb72AJPIHph98Upn3x0L",
    iconClass: "bi-whatsapp",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background  ">
              <div className="container">

        <div className="row gy-3">
      


        <div className="col-lg-3 col-md-6 d-flex  flex-col  items-start justify-start">
          <h4> اتصل بنا </h4>

          <div>
           
            <a
              className="hover:underline hover:accentColor default-color"
              href="tel:0115427167"
            >
              0115427167
            </a>
             <br />
             <a
            className="hover:underline hover:accentColor default-color"
            href="tel: +963938525704"
          >
            0938525704
          </a>
          </div>
        </div>


  <div className="col-lg-3 col-md-6 d-flex  flex-col  items-start justify-start">
          <h4> البريد الكتروني </h4>

          <div>
            
            <a
              className="hover:underline hover:accentColor default-color"
              href="mailto:mhmd@zhajjali.com"
            >
              mhmd@zhajjali.com
            </a>
            <br />
            <a
              className="hover:underline hover:accentColor default-color"
              href="mailto:zha.hajali@gmail.com"
            >
              zha.hajali@gmail.com
            </a>
            <br />
            
           
          </div>
        </div>

       
        <div className="col-lg-3 col-md-6 d-flex      items-start justify-start">
          <div className="flex  flex-col w-full h-full  items-start justify-start">
            
            <h4 className="px-1"> تابعنا </h4>
            <div className="social-links d-flex justify-content-center py-1  ">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  iconClass={link.iconClass}
                />
              ))}
            </div>
          </div>
          
        </div>

        <div className="col-lg-3 col-md-6 d-flex">
          <div className="flex w-full items-start justify-start  ">
            <div className=" ">
              <div className="flex items-center ">
                <img
                  className="h-44"
                  src={IMAGES_ASSETS.barCode}
                  alt="Barcode"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright  text-center mt-4">
        <div className="flex  flex-col w-full items-center justify-between">
          <div className="flex flex-wrap py-1">
            <p>جميع الحقوق محفوظة لدى </p>
            <a
              className="px-1 sitename font-bold hover:underline hover:accentColor default-color"
              href="/"
            >
              شركة الحاج علي الذهبية
            </a>
            &copy;2025
          </div>
        </div>
      </div> </div>
    </footer>
  );
};

export default Footer; 


