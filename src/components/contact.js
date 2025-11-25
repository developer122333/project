import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const form = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7awku5b",
        "template_e2rb8j9",
        form.current,
        "781zZnIOliDnsFuub"
      )
      .then(
        (result) => {
          alert("تم ارسال الرسالة بنجاح.");
        },
        (error) => {
          alert("Failed to send message: " + JSON.stringify(error));
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const InfoItem = ({ icon, title, children }) => (
    <div
      className={`info-item sm:w-full md:w-1/2 d-flex gap-2 ${
        isFocused ? "" : "aos-init"
      }`}
      data-aos={!isFocused ? "fade-up" : undefined}
      data-aos-delay="200"
    >
      <i className={`bi ${icon} flex-shrink-0`}></i>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );

  const InfoList = () => {
    return (
      <div className="flex flex-wrap -px-3">
        <InfoItem icon="bi-geo-alt" title="العنوان">
          <p> دمشق - زبلطاني </p>
          <p> ابن عساكر - جانب الهرم</p>
        </InfoItem>
        <InfoItem icon="bi-telephone" title="الهاتف">
          <a
            className="hover:underline hover:accentColor default-color"
            href="tel:0115427167"
          >
            0115427167
          </a>
          <br />
          <a
            className="hover:underline hover:accentColor default-color"
            href="tel:+963938525704"
          >
            0938525704
          </a>
        </InfoItem>
        <InfoItem icon="bi-envelope" title="البريد الالكتروني">
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
        </InfoItem>
        <InfoItem icon="bi-clock" title="أوقات العمل">
          <p>
            <span>السبت-الخميس:</span> <span>8AM - 7PM</span>
            <br />
            <span>الجمعة:</span> <span>مغلق</span>
          </p>
        </InfoItem>
      </div>
    );
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>تواصل معنا</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-7 h-full flex-grow">
            <div className="info-wrap">
              <InfoList />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3326.4416958070465!2d36.32168868479898!3d33.51589998075522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDMwJzU3LjIiTiAzNsKwMTknMTAuMiJF!5e0!3m2!1sar!2snl!4v1762344140422!5m2!1sar!2snl"
                style={{
                  width: "100%",
                  height: "330px",
                  border: "0",
                  borderRadius: "15px",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="font-bold"> يمكنك التواصل معنا في أي وقت يناسبك</p>

              <div className="row gy-4 mt-1">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="الاسم"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="البريد الالكتروني"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject-field"
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="الموضوع"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    id="message-field"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    placeholder="الرسالة"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                  >
ارسال                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
