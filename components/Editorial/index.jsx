import React from "react";
import { Link } from "react-router-dom";
import Group7 from "../Group7";
import Group179 from "../Group179";
import Login3 from "../Login3";
import Component2213 from "../Component2213";
import "./Editorial.css";

function Editorial(props) {
  const {
    editorial,
    text103,
    text104,
    spanText,
    spanText2,
    safetyIsFashion,
    text106,
    line4,
    path37,
    path38,
    givenTheIncreasing,
    givenTheCurrentPa,
    spanText3,
    spanText4,
    editorialPhoto1,
    text107,
    posted10222020,
    browse,
    rentalPolicy,
    editorial2,
    contactUs,
    text108,
    aboutUs,
    termsConditions,
    faqs,
    privacyPolicy,
    membership,
    spanText5,
    spanText6,
    group5,
    group6,
    path13,
    emailSubscription,
    text110,
    text111,
    theMercerClub,
    theMercerClub2,
    logIn,
    signUp,
    path292,
    placeholderPerson,
    group7Props,
    group179Props,
    login3Props,
    component2213Props,
  } = props;

  return (
    <div className="editorial7 screen ">
      <div className="editorial8">{editorial}</div>
      <p className="text-103">{text103}</p>
      <p className="text-104 overpass-bold-black-15px">{text104}</p>
      <p className="text-105">
        <span className="span07">{spanText}</span>
        <span className="span19">{spanText2}</span>
      </p>
      <div className="safety-is-fashion">{safetyIsFashion}</div>
      <p className="text-106">{text106}</p>
      <img className="line-45" src={line4} />
      <img className="path-37" src={path37} />
      <img className="path-38" src={path38} />
      <p className="given-the-increasing overpass-normal-gravel-15px">{givenTheIncreasing}</p>
      <p className="given-the-current-pa overpass-normal-gravel-15px">{givenTheCurrentPa}</p>
      <div className="name3">
        <span className="span08">{spanText3}</span>
        <span className="span110">{spanText4}</span>
      </div>
      <img className="editorial-photo-1" src={editorialPhoto1} />
      <div className="text-107 overpass-bold-black-20px">{text107}</div>
      <div className="posted-10222020">{posted10222020}</div>
      <Link to="/category">
        <div className="browse7 overpass-normal-gray-12px">{browse}</div>
      </Link>
      <Link to="/rental-policy">
        <div className="rental-policy7 overpass-normal-gray-12px">{rentalPolicy}</div>
      </Link>
      <div className="editorial-1 overpass-normal-gray-12px">{editorial2}</div>
      <div className="contact-us6 overpass-normal-gray-12px">{contactUs}</div>
      <div className="text-108 overpass-normal-gray-12px">{text108}</div>
      <Link to="/about-us">
        <div className="about-us6 overpass-normal-gray-12px">{aboutUs}</div>
      </Link>
      <Link to="/terms-conditions">
        <div className="terms-conditions7 overpass-normal-gray-12px">{termsConditions}</div>
      </Link>
      <Link to="/faq">
        <div className="fa-qs6 overpass-normal-gray-12px">{faqs}</div>
      </Link>
      <Link to="/privacy-policy">
        <div className="privacy-policy7 overpass-normal-gray-12px">{privacyPolicy}</div>
      </Link>
      <div className="membership7 overpass-normal-gray-12px">{membership}</div>
      <div className="text-109">
        <span className="span09">{spanText5}</span>
        <span className="span111">{spanText6}</span>
      </div>
      <div className="group-86">
        <div className="group-54" style={{ backgroundImage: `url(${group5})` }}></div>
        <div className="group-64" style={{ backgroundImage: `url(${group6})` }}></div>
        <img className="path-134" src={path13} />
        <Group7 group7={group7Props.group7} path31={group7Props.path31} path32={group7Props.path32} />
      </div>
      <div className="rectangle-246"></div>
      <div className="email-subscription6">{emailSubscription}</div>
      <div className="rectangle-576"></div>
      <div className="rectangle-586"></div>
      <div className="text-110">{text110}</div>
      <p className="text-111">{text111}</p>
      <Link to="/home">
        <div className="the-mercer-club9 overpass-black-black-23px">{theMercerClub}</div>
      </Link>
      <div className="nav9">
        <Group179
          browse={group179Props.browse}
          membership={group179Props.membership}
          editorial={group179Props.editorial}
          className="group-1799"
        />
        <div className="rectangle-2559"></div>
        <div className="the-mercer-club-16 overpass-black-black-23px">{theMercerClub2}</div>
        <div className="log-in11 overpass-bold-fire-bush-12px">{logIn}</div>
        <div className="sign-up9 overpass-bold-fire-bush-12px">{signUp}</div>
        <img className="path-2929" src={path292} />
        <Login3
          group173={login3Props.group173}
          path5={login3Props.path5}
          line2={login3Props.line2}
          maskGroup1Props={login3Props.maskGroup1Props}
        />
        <Link to="/dashboard">
          <img className="placeholder-person9" src={placeholderPerson} />
        </Link>
        <Component2213
          component211={component2213Props.component211}
          path5={component2213Props.path5}
          line2={component2213Props.line2}
          maskGroup12Props={component2213Props.maskGroup12Props}
        />
      </div>
    </div>
  );
}

export default Editorial;
