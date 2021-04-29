import React from "react";
import { Link } from "react-router-dom";
import Group72 from "../Group72";
import Group179 from "../Group179";
import MaskGroup1 from "../MaskGroup1";
import MaskGroup12 from "../MaskGroup12";
import "./AboutUs.css";

function AboutUs(props) {
  const {
    text152,
    img_7544,
    history,
    photoGallery,
    employees,
    line4,
    theMercerClubIsA,
    theMercerClub,
    humbleBeginnings,
    browse,
    rentalPolicy,
    editorial,
    contactUs,
    text153,
    aboutUs,
    termsConditions,
    faqs,
    privacyPolicy,
    membership,
    spanText,
    spanText2,
    group5,
    group6,
    path13,
    emailSubscription,
    text155,
    text156,
    theMercerClub2,
    logIn,
    signUp,
    path292,
    group173,
    path5,
    line2,
    placeholderPerson,
    component211,
    path52,
    line22,
    group72Props,
    group179Props,
    maskGroup1Props,
    maskGroup12Props,
  } = props;

  return (
    <div className="about-us8 screen ">
      <div className="text-152">{text152}</div>
      <img className="img75442" src={img_7544} />
      <div className="history">{history}</div>
      <div className="photo-gallery">{photoGallery}</div>
      <div className="employees">{employees}</div>
      <img className="line-46" src={line4} />
      <p className="the-mercer-club-is-a overpass-normal-gravel-15px">{theMercerClubIsA}</p>
      <Link to="/home">
        <div className="the-mercer-club11 overpass-black-black-23px">{theMercerClub}</div>
      </Link>
      <div className="humble-beginnings overpass-bold-black-20px">{humbleBeginnings}</div>
      <div className="group-178">
        <Link to="/category">
          <div className="browse10 overpass-normal-gray-12px">{browse}</div>
        </Link>
        <Link to="/rental-policy">
          <div className="rental-policy9 overpass-normal-gray-12px">{rentalPolicy}</div>
        </Link>
        <Link to="/editorial">
          <div className="editorial10 overpass-normal-gray-12px">{editorial}</div>
        </Link>
        <div className="contact-us8 overpass-normal-gray-12px">{contactUs}</div>
        <div className="text-153 overpass-normal-gray-12px">{text153}</div>
        <div className="about-us9 overpass-normal-gray-12px">{aboutUs}</div>
        <Link to="/terms-conditions">
          <div className="terms-conditions9 overpass-normal-gray-12px">{termsConditions}</div>
        </Link>
        <Link to="/faq">
          <div className="fa-qs8 overpass-normal-gray-12px">{faqs}</div>
        </Link>
        <Link to="/privacy-policy">
          <div className="privacy-policy9 overpass-normal-gray-12px">{privacyPolicy}</div>
        </Link>
        <div className="membership9 overpass-normal-gray-12px">{membership}</div>
        <div className="text-154">
          <span className="span011">{spanText}</span>
          <span className="span113">{spanText2}</span>
        </div>
        <div className="group-810">
          <div className="group-56" style={{ backgroundImage: `url(${group5})` }}></div>
          <div className="group-66" style={{ backgroundImage: `url(${group6})` }}></div>
          <img className="path-136" src={path13} />
          <Group72 group7={group72Props.group7} path31={group72Props.path31} path32={group72Props.path32} />
        </div>
        <div className="rectangle-248"></div>
        <div className="email-subscription8">{emailSubscription}</div>
        <div className="rectangle-578"></div>
        <div className="rectangle-588"></div>
        <div className="text-155">{text155}</div>
        <p className="text-156">{text156}</p>
      </div>
      <div className="nav11">
        <Group179
          browse={group179Props.browse}
          membership={group179Props.membership}
          editorial={group179Props.editorial}
          className="group-17911"
        />
        <div className="rectangle-25511"></div>
        <div className="the-mercer-club-18 overpass-black-black-23px">{theMercerClub2}</div>
        <div className="log-in14 overpass-bold-fire-bush-12px">{logIn}</div>
        <div className="sign-up11 overpass-bold-fire-bush-12px">{signUp}</div>
        <img className="path-29211" src={path292} />
        <div className="log-in-12">
          <MaskGroup1 group164Props={maskGroup1Props.group164Props} group1642Props={maskGroup1Props.group1642Props} />
          <div className="group-1735" style={{ backgroundImage: `url(${group173})` }}>
            <img className="path-515" src={path5} />
            <img className="line-28" src={line2} />
          </div>
        </div>
        <Link to="/dashboard">
          <img className="placeholder-person11" src={placeholderPerson} />
        </Link>
        <div className="component-22-15">
          <MaskGroup12
            group164Props={maskGroup12Props.group164Props}
            group1642Props={maskGroup12Props.group1642Props}
            group1643Props={maskGroup12Props.group1643Props}
          />
          <div className="component-21-15" style={{ backgroundImage: `url(${component211})` }}>
            <img className="path-5-12" src={path52} />
            <img className="line-2-12" src={line22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
