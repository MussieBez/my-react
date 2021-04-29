import React from "react";
import { Link } from "react-router-dom";
import Group179 from "../Group179";
import Login from "../Login";
import Component221 from "../Component221";
import "./NewArrivals.css";

function NewArrivals(props) {
  const {
    img_3258,
    img_2584,
    x32D8E5B43E28402F83686C3De5Ddcec2Jp,
    ff3672B4B07D4Cca8D4FC7192F2Cef10Jpe,
    path292,
    lastCahnce,
    path424,
    categories,
    newArrivals,
    productsFrom,
    text18,
    name,
    theMercerClub,
    logIn,
    signUp,
    path2922,
    placeholderPerson,
    group179Props,
    loginProps,
    component221Props,
  } = props;

  return (
    <div className="new-arrivals screen ">
      <img className="img3258" src={img_3258} />
      <img className="img2584" src={img_2584} />
      <img className="x32-d8-e5-b4-3-e-de5-ddcec2jpeg2" src={x32D8E5B43E28402F83686C3De5Ddcec2Jp} />
      <img className="ff3672-b4-b07-d-92-f2-cef10jpeg" src={ff3672B4B07D4Cca8D4FC7192F2Cef10Jpe} />
      <Link to="/last-chance">
        <img className="path-2923" src={path292} />
      </Link>
      <div className="last-cahnce">{lastCahnce}</div>
      <Link to="/category">
        <img className="path-4242" src={path424} />
      </Link>
      <div className="categories">{categories}</div>
      <div className="new-arrivals2">{newArrivals}</div>
      <div className="products-from">{productsFrom}</div>
      <p className="text-18">{text18}</p>
      <p className="name2">{name}</p>
      <div className="nav3">
        <Group179
          browse={group179Props.browse}
          membership={group179Props.membership}
          editorial={group179Props.editorial}
          className="group-1793"
        />
        <div className="rectangle-2553"></div>
        <div className="the-mercer-club3 overpass-black-black-23px">{theMercerClub}</div>
        <div className="log-in4 overpass-bold-fire-bush-12px">{logIn}</div>
        <div className="sign-up3 overpass-bold-fire-bush-12px">{signUp}</div>
        <img className="path-292-12" src={path2922} />
        <Login
          group173={loginProps.group173}
          path5={loginProps.path5}
          line2={loginProps.line2}
          maskGroup1Props={loginProps.maskGroup1Props}
        />
        <Link to="/dashboard">
          <img className="placeholder-person3" src={placeholderPerson} />
        </Link>
        <Component221
          component211={component221Props.component211}
          path5={component221Props.path5}
          line2={component221Props.line2}
          maskGroup12Props={component221Props.maskGroup12Props}
        />
      </div>
    </div>
  );
}

export default NewArrivals;
