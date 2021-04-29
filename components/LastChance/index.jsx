import React from "react";
import { Link } from "react-router-dom";
import Group179 from "../Group179";
import Login from "../Login";
import Component221 from "../Component221";
import "./LastChance.css";

function LastChance(props) {
  const {
    path424,
    newArrivals,
    path292,
    categories,
    nqobileVundlaLToxppc4MiUnsplash,
    x90541F7E3B3642Ec97773813A3F81De4Jp,
    chrisHenry4Gd0NusmtseUnsplash,
    img_2587,
    taylorXw4Cbp9LobmUnsplash,
    justinChrnQtm9BjPivuUnsplash,
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
    <div className="last-chance2 screen ">
      <Link to="/new-arrivals">
        <img className="path-4243" src={path424} />
      </Link>
      <div className="new-arrivals3">{newArrivals}</div>
      <Link to="/category">
        <img className="path-2924" src={path292} />
      </Link>
      <div className="categories2">{categories}</div>
      <img className="nqobile-vundla-c4m-i-unsplash" src={nqobileVundlaLToxppc4MiUnsplash} />
      <img className="x90541-f7-e-3-b3-a3-f81-de4jpeg" src={x90541F7E3B3642Ec97773813A3F81De4Jp} />
      <img className="chris-henry-4g-m-ts-e-unsplash" src={chrisHenry4Gd0NusmtseUnsplash} />
      <img className="img2587" src={img_2587} />
      <img className="taylor-x-w4c-bp-lo-bm-unsplash" src={taylorXw4Cbp9LobmUnsplash} />
      <img className="justin-chrn-qt-pi-vu-unsplash" src={justinChrnQtm9BjPivuUnsplash} />
      <div className="nav4">
        <Group179
          browse={group179Props.browse}
          membership={group179Props.membership}
          editorial={group179Props.editorial}
          className="group-1794"
        />
        <div className="rectangle-2554"></div>
        <div className="the-mercer-club4 overpass-black-black-23px">{theMercerClub}</div>
        <div className="log-in5 overpass-bold-fire-bush-12px">{logIn}</div>
        <div className="sign-up4 overpass-bold-fire-bush-12px">{signUp}</div>
        <img className="path-292-13" src={path2922} />
        <Login
          group173={loginProps.group173}
          path5={loginProps.path5}
          line2={loginProps.line2}
          maskGroup1Props={loginProps.maskGroup1Props}
        />
        <Link to="/dashboard">
          <img className="placeholder-person4" src={placeholderPerson} />
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

export default LastChance;
