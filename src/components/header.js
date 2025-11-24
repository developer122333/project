import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import IMAGES_ASSETS from 'constants/imagesAssets';
const Header = () => {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('#/service/')) {
      setActivePage('service');
    } else {
      setActivePage('home');
    }
console.log(" hhh ",hash)
    const toggleScrolled = () => {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? selectBody.classList.add("scrolled")
        : selectBody.classList.remove("scrolled");
    };

    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    
    const mobileNavToggle = () => {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    };

    const closeMobileNav = () => {
      document.querySelector("body").classList.remove("mobile-nav-active");
      mobileNavToggleBtn.classList.remove("bi-x");
      mobileNavToggleBtn.classList.add("bi-list");
    };

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
    }

    const navmenuLinks = document.querySelectorAll("#navmenu a");
    navmenuLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        closeMobileNav(); // إغلاق القائمة عند الضغط على الرابط
      });
    });

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", mobileNavToggle);
      }
      navmenuLinks.forEach((navmenu) => {
        navmenu.removeEventListener("click", closeMobileNav);
      });
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="d-flex align-items-center me-xl-0">
          <img src={IMAGES_ASSETS.logo} className="h-14" alt="Logo" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <HashLink
                to="/#hero"
                className={activePage === "home" ? "active" : ""}
              >
                الرئيسية
              </HashLink>
            </li>
            <li>
              <HashLink to="/#about">من نحن</HashLink>
            </li>
            <li>
              <HashLink to="/#why-us">لماذا تختارنا</HashLink>
            </li>
            <li>
              <HashLink
                to="/#services"
                className={activePage === "service" ? "active" : ""}
              >
                خدماتنا
              </HashLink>
            </li>
            <li>
              <HashLink to="/#contact">تواصل معنا</HashLink>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted22" href="/" />
      </div>
    </header>
  );
};

export default Header;/*
 

 import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

 
  import { NavLink } from "react-router-dom";
 import IMAGES_ASSETS from "constants/imagesAssets";

const Header = ( ) => {
    const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const hash = window.location.pathname;
    console.log("hash" ,hash)
     if (hash.includes('/service/')) {
      setActivePage('service');
    }  else {
      setActivePage('home');
    }
  }, []);

  return (

    
    <header id="header" className="header  ">
      <NavLink to="/">
        <img src={IMAGES_ASSETS.logo} className="h-14 logo " alt="Logo" />
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu navmenu  " dir="rtl">
        <li>
          <HashLink
            to="/#hero"
 className={activePage === 'home' ? 'active' : ''}          >
            الرئيسية
            <br />
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#about"
            
          >
            من نحن
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#why-us"
            
          >
            لماذا تختارنا
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#services"
          className={activePage === 'service' ? 'active' : ''}
          >
            خدماتنا
          </HashLink>
        </li>

        <li>
          <HashLink
            to="/#contact"
           >
            تواصل معنا
          </HashLink>
        </li>
      </ul>
      <a className="btn-getstarted33 lg:block sm:hidden" href="/#contact"></a>
    </header>
  );
};

export default Header;*/
