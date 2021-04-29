import React from "react";
import { Link } from "react-router-dom";
import Group8 from "../Group8";
import Group179 from "../Group179";
import Login2 from "../Login2";
import Component2212 from "../Component2212";
import "./FAQ.css";

function FAQ(props) {
  const {
    faqs,
    mikeVonQw9Frzpj70UUnsplash,
    account,
    text19,
    onceYouReAMember,
    text20,
    text21,
    text22,
    text23,
    img_2588,
    allOfOurGarments,
    text24,
    sanitation,
    text25,
    weWantYourMembers,
    text26,
    text27,
    membersAreCharged,
    text28,
    yourBillingAndShi,
    miscellaneous,
    text29,
    unfortunatelyNoW,
    text30,
    itemsAreConsidered,
    returnsMustBeDr,
    faq,
    rentalPolicy,
    privacyPolicy,
    termsConditions,
    line4,
    packUpYourRentals,
    text31,
    toBecomeAMemberY,
    yourDeliveryDateW,
    img_3259,
    browse,
    rentalPolicy2,
    editorial,
    contactUs,
    text32,
    aboutUs,
    termsConditions2,
    faqs2,
    privacyPolicy2,
    membership,
    spanText,
    spanText2,
    emailSubscription,
    text34,
    text35,
    theMercerClub,
    theMercerClub2,
    logIn,
    signUp,
    path292,
    placeholderPerson,
    group8Props,
    group179Props,
    login2Props,
    component2212Props,
  } = props;

  return (
    <div className="faq screen ">
      <div className="fa-qs2">{faqs}</div>
      <img className="mike-von-qw9-fr-pj70-u-unsplash" src={mikeVonQw9Frzpj70UUnsplash} />
      <div className="account">{account}</div>
      <div className="text-19 overpass-bold-black-20px">{text19}</div>
      <p className="once-youre-a-member overpass-normal-gravel-15px">{onceYouReAMember}</p>
      <div className="text-20 overpass-bold-black-20px">{text20}</div>
      <div className="text-21 overpass-bold-black-20px">{text21}</div>
      <div className="text-22 overpass-bold-black-20px">{text22}</div>
      <div className="text-23 overpass-bold-black-20px">{text23}</div>
      <img className="img2588" src={img_2588} />
      <p className="all-of-our-garments overpass-normal-gravel-15px">{allOfOurGarments}</p>
      <div className="text-24 overpass-bold-black-20px">{text24}</div>
      <div className="sanitation">{sanitation}</div>
      <div className="text-25 overpass-bold-black-20px">{text25}</div>
      <p className="we-want-your-members overpass-normal-gravel-15px">{weWantYourMembers}</p>
      <div className="text-26">{text26}</div>
      <div className="text-27 overpass-bold-black-20px">{text27}</div>
      <p className="members-are-charged overpass-normal-gravel-15px">{membersAreCharged}</p>
      <div className="text-28 overpass-bold-black-20px">{text28}</div>
      <p className="your-billing-and-shi overpass-normal-gravel-15px">{yourBillingAndShi}</p>
      <div className="miscellaneous">{miscellaneous}</div>
      <div className="text-29 overpass-bold-black-20px">{text29}</div>
      <p className="unfortunately-no-w overpass-normal-gravel-15px">{unfortunatelyNoW}</p>
      <div className="text-30 overpass-bold-black-20px">{text30}</div>
      <p className="items-are-considered overpass-normal-gravel-15px">{itemsAreConsidered}</p>
      <p className="x-returns-must-be-dr overpass-normal-gravel-15px">{returnsMustBeDr}</p>
      <div className="faq2 overpass-bold-black-15px">{faq}</div>
      <Link to="/rental-policy">
        <div className="rental-policy2 overpass-bold-black-15px">{rentalPolicy}</div>
      </Link>
      <Link to="/privacy-policy">
        <div className="privacy-policy2 overpass-bold-black-15px">{privacyPolicy}</div>
      </Link>
      <Link to="/terms-conditions">
        <div className="terms-conditions2 overpass-bold-black-15px">{termsConditions}</div>
      </Link>
      <img className="line-4" src={line4} />
      <p className="pack-up-your-rentals overpass-normal-gravel-15px">{packUpYourRentals}</p>
      <p className="text-31 overpass-normal-gravel-15px">{text31}</p>
      <p className="to-become-a-member-y overpass-normal-gravel-15px">{toBecomeAMemberY}</p>
      <p className="your-delivery-date-w overpass-normal-gravel-15px">{yourDeliveryDateW}</p>
      <img className="img3259" src={img_3259} />
      <Link to="/category">
        <div className="browse3 overpass-normal-gray-12px">{browse}</div>
      </Link>
      <Link to="/rental-policy">
        <div className="rental-policy-1 overpass-normal-gray-12px">{rentalPolicy2}</div>
      </Link>
      <Link to="/editorial">
        <div className="editorial3 overpass-normal-gray-12px">{editorial}</div>
      </Link>
      <div className="contact-us2 overpass-normal-gray-12px">{contactUs}</div>
      <div className="text-32 overpass-normal-gray-12px">{text32}</div>
      <Link to="/about-us">
        <div className="about-us2 overpass-normal-gray-12px">{aboutUs}</div>
      </Link>
      <Link to="/terms-conditions">
        <div className="terms-conditions-1 overpass-normal-gray-12px">{termsConditions2}</div>
      </Link>
      <div className="fa-qs-1 overpass-normal-gray-12px">{faqs2}</div>
      <Link to="/privacy-policy">
        <div className="privacy-policy-1 overpass-normal-gray-12px">{privacyPolicy2}</div>
      </Link>
      <div className="membership3 overpass-normal-gray-12px">{membership}</div>
      <div className="text-33">
        <span className="span02">{spanText}</span>
        <span className="span12">{spanText2}</span>
      </div>
      <Group8
        group5={group8Props.group5}
        group6={group8Props.group6}
        path13={group8Props.path13}
        group7Props={group8Props.group7Props}
      />
      <div className="rectangle-242"></div>
      <div className="email-subscription2">{emailSubscription}</div>
      <div className="rectangle-572"></div>
      <div className="rectangle-582"></div>
      <div className="text-34">{text34}</div>
      <p className="text-35">{text35}</p>
      <Link to="/home">
        <div className="the-mercer-club5 overpass-black-black-23px">{theMercerClub}</div>
      </Link>
      <div className="nav5">
        <Group179
          browse={group179Props.browse}
          membership={group179Props.membership}
          editorial={group179Props.editorial}
          className="group-1795"
        />
        <div className="rectangle-2555"></div>
        <Link to="/home">
          <div className="the-mercer-club-12 overpass-black-black-23px">{theMercerClub2}</div>
        </Link>
        <div className="log-in6 overpass-bold-fire-bush-12px">{logIn}</div>
        <div className="sign-up5 overpass-bold-fire-bush-12px">{signUp}</div>
        <img className="path-2925" src={path292} />
        <Login2
          group173={login2Props.group173}
          path5={login2Props.path5}
          line2={login2Props.line2}
          maskGroup1Props={login2Props.maskGroup1Props}
        />
        <Link to="/dashboard">
          <img className="placeholder-person5" src={placeholderPerson} />
        </Link>
        <Component2212
          component211={component2212Props.component211}
          path5={component2212Props.path5}
          line2={component2212Props.line2}
          maskGroup12Props={component2212Props.maskGroup12Props}
        />
      </div>
    </div>
  );
}

export default FAQ;
