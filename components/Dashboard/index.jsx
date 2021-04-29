import React from "react";
import { Link } from "react-router-dom";
import Group72 from "../Group72";
import Group179 from "../Group179";
import MaskGroup1 from "../MaskGroup1";
import MaskGroup12 from "../MaskGroup12";
import "./Dashboard.css";

function Dashboard(props) {
  const {
    menu,
    account,
    place,
    payment,
    orderHistory,
    profile,
    gallery,
    favorites,
    brandWebsite,
    logOut,
    orderHistory2,
    profile2,
    favorites2,
    group13,
    newArrivals,
    nikeOffWhite,
    gucciMiuMiu,
    spanText,
    spanText2,
    group14,
    announcements,
    userPhotoGallery,
    browse,
    rentalPolicy,
    editorial,
    contactUs,
    text157,
    aboutUs,
    termsConditions,
    faqs,
    privacyPolicy,
    membership,
    spanText3,
    spanText4,
    group5,
    group6,
    path13,
    emailSubscription,
    text159,
    text160,
    theMercerClub,
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
    <div className="dashboard screen ">
      <div className="rectangle-84 border-1px-dove-gray"></div>
      <div className="rectangle-85 border-1px-dove-gray"></div>
      <div className="rectangle-86 border-1px-dove-gray"></div>
      <div className="rectangle-87 border-1px-dove-gray"></div>
      <div className="menu">{menu}</div>
      <div className="account2 overpass-normal-gray-15px">{account}</div>
      <div className="place3 overpass-normal-gray-15px">{place}</div>
      <div className="payment overpass-normal-gray-15px">{payment}</div>
      <div className="order-history overpass-normal-gray-15px">{orderHistory}</div>
      <div className="profile overpass-normal-gray-15px">{profile}</div>
      <div className="gallery overpass-normal-gray-15px">{gallery}</div>
      <div className="favorites overpass-normal-gray-15px">{favorites}</div>
      <Link to="/home">
        <div className="brand-website overpass-normal-gray-15px">{brandWebsite}</div>
      </Link>
      <div className="log-out">{logOut}</div>
      <div className="order-history-1">{orderHistory2}</div>
      <div className="profile-1">{profile2}</div>
      <div className="favorites-1">{favorites2}</div>
      <div className="group-13" style={{ backgroundImage: `url(${group13})` }}>
        <div className="new-arrivals4">{newArrivals}</div>
        <div className="nikeoff-white">{nikeOffWhite}</div>
        <div className="guccimiu-miu">{gucciMiuMiu}</div>
        <div className="yeezyfear-of-god">
          <span className="span4">{spanText}</span>
          <span className="span">{spanText2}</span>
        </div>
      </div>
      <div className="group-14" style={{ backgroundImage: `url(${group14})` }}>
        <div className="rectangle-94 border-1px-dove-gray"></div>
        <div className="announcements">{announcements}</div>
      </div>
      <div className="userphoto-gallery">{userPhotoGallery}</div>
      <Link to="/category">
        <div className="browse11 overpass-normal-gray-12px">{browse}</div>
      </Link>
      <Link to="/rental-policy">
        <div className="rental-policy10 overpass-normal-gray-12px">{rentalPolicy}</div>
      </Link>
      <Link to="/editorial">
        <div className="editorial11 overpass-normal-gray-12px">{editorial}</div>
      </Link>
      <div className="contact-us9 overpass-normal-gray-12px">{contactUs}</div>
      <div className="text-157 overpass-normal-gray-12px">{text157}</div>
      <Link to="/about-us">
        <div className="about-us10 overpass-normal-gray-12px">{aboutUs}</div>
      </Link>
      <Link to="/terms-conditions">
        <div className="terms-conditions10 overpass-normal-gray-12px">{termsConditions}</div>
      </Link>
      <Link to="/faq">
        <div className="fa-qs9 overpass-normal-gray-12px">{faqs}</div>
      </Link>
      <Link to="/privacy-policy">
        <div className="privacy-policy10 overpass-normal-gray-12px">{privacyPolicy}</div>
      </Link>
      <div className="membership10 overpass-normal-gray-12px">{membership}</div>
      <div className="text-158">
        <span className="span012">{spanText3}</span>
        <span className="span114">{spanText4}</span>
      </div>
      <div className="group-811">
        <div className="group-57" style={{ backgroundImage: `url(${group5})` }}></div>
        <div className="group-67" style={{ backgroundImage: `url(${group6})` }}></div>
        <img className="path-137" src={path13} />
        <Group72 group7={group72Props.group7} path31={group72Props.path31} path32={group72Props.path32} />
      </div>
      <div className="rectangle-249"></div>
      <div className="email-subscription9">{emailSubscription}</div>
      <div className="rectangle-579"></div>
      <div className="rectangle-589"></div>
      <div className="text-159">{text159}</div>
      <p className="text-160">{text160}</p>
      <Link to="/home">
        <div className="the-mercer-club12 overpass-black-black-23px">{theMercerClub}</div>
      </Link>
      <div className="nav12">
        <Group179
          browse={group179Props.browse}
          membership={group179Props.membership}
          editorial={group179Props.editorial}
          className="group-17912"
        />
        <div className="rectangle-25512"></div>
        <div className="the-mercer-club-19 overpass-black-black-23px">{theMercerClub2}</div>
        <div className="log-in15 overpass-bold-fire-bush-12px">{logIn}</div>
        <div className="sign-up12 overpass-bold-fire-bush-12px">{signUp}</div>
        <img className="path-29212" src={path292} />
        <div className="log-in-13">
          <MaskGroup1 group164Props={maskGroup1Props.group164Props} group1642Props={maskGroup1Props.group1642Props} />
          <div className="group-1736" style={{ backgroundImage: `url(${group173})` }}>
            <img className="path-516" src={path5} />
            <img className="line-29" src={line2} />
          </div>
        </div>
        <img className="placeholder-person12" src={placeholderPerson} />
        <div className="component-22-16">
          <MaskGroup12
            group164Props={maskGroup12Props.group164Props}
            group1642Props={maskGroup12Props.group1642Props}
            group1643Props={maskGroup12Props.group1643Props}
          />
          <div className="component-21-16" style={{ backgroundImage: `url(${component211})` }}>
            <img className="path-5-13" src={path52} />
            <img className="line-2-13" src={line22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
