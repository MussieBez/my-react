import React from "react";
import { Link } from "react-router-dom";
import Group179 from "../Group179";
import Group164 from "../Group164";
import "./Category.css";

function Category(props) {
  const {
    theMercerClub,
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
    path424,
    lastChance,
    x8Dc2Ce6F0C684Ff8Bb3B70380E5D70A1Jp,
    pants,
    bottoms,
    line62,
    shorts,
    trackPants,
    skirt,
    dresses,
    sweatpants,
    leggings,
    tops,
    tShirts,
    line61,
    blouses,
    place,
    sweater,
    sweatshirt,
    coat,
    jacket,
    sneakers,
    shoes,
    line59,
    heels,
    boots,
    sandles,
    flats,
    ballcap,
    hats,
    line60,
    name,
    accessories,
    wallets,
    line58,
    rings,
    necklaces,
    headbands,
    bracelets,
    place2,
    earingS,
    bags,
    backpacks,
    line57,
    overTheShoulder,
    place3,
    brands,
    line63,
    text1,
    text2,
    path2922,
    seeNewArrivals,
    seeAllItems,
    group179Props,
    group164Props,
    group1642Props,
    group1643Props,
    group1644Props,
    group1645Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="category screen ">
        <div className="nav">
          <div className="overlap-group7">
            <Group179
              browse={group179Props.browse}
              membership={group179Props.membership}
              editorial={group179Props.editorial}
            />
            <div className="rectangle-255"></div>
            <div className="the-mercer-club overpass-black-black-23px">{theMercerClub}</div>
            <div className="log-in overpass-bold-fire-bush-12px">{logIn}</div>
            <div className="sign-up overpass-bold-fire-bush-12px">{signUp}</div>
            <img className="path-292" src={path292} />
            <div className="log-in-1">
              <div className="overlap-group8">
                <div className="mask-group-1">
                  <Group164 email={group164Props.email} />
                  <Group164 email={group1642Props.email} className="group-16" />
                </div>
                <div className="group-173" style={{ backgroundImage: `url(${group173})` }}>
                  <div className="overlap-group-1">
                    <img className="path-5" src={path5} />
                    <img className="line-2" src={line2} />
                  </div>
                </div>
              </div>
            </div>
            <Link to="/dashboard">
              <img className="placeholder-person" src={placeholderPerson} />
            </Link>
            <div className="component-22-1">
              <div className="overlap-group10">
                <div className="mask-group-1-1">
                  <Group164 email={group1643Props.email} className="group-174" />
                  <Group164 email={group1644Props.email} className="group-16" />
                  <Group164 email={group1645Props.email} className="group-16" />
                </div>
                <div className="component-21-1" style={{ backgroundImage: `url(${component211})` }}>
                  <div className="overlap-group-1">
                    <img className="path-5-1" src={path52} />
                    <img className="line-2-1" src={line22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="auto-flex9">
          <div className="auto-flex7">
            <div className="auto-flex1">
              <div className="auto-flex">
                <Link to="/last-chance">
                  <img className="path-424" src={path424} />
                </Link>
                <div className="last-chance">{lastChance}</div>
              </div>
              <img className="x8-dc2-ce6-f-0-c-0-e5-d70-a1jpeg" src={x8Dc2Ce6F0C684Ff8Bb3B70380E5D70A1Jp} />
            </div>
            <div className="auto-flex6">
              <div className="overlap-group6">
                <div className="pants nunitosans-normal-gray-12px">{pants}</div>
                <div className="bottoms">{bottoms}</div>
                <img className="line-62" src={line62} />
              </div>
              <div className="shorts nunitosans-normal-gray-12px">{shorts}</div>
              <div className="track-pants nunitosans-normal-gray-12px">{trackPants}</div>
              <div className="skirt nunitosans-normal-gray-12px">{skirt}</div>
              <div className="dresses nunitosans-normal-gray-12px">{dresses}</div>
              <div className="sweatpants nunitosans-normal-gray-12px">{sweatpants}</div>
              <div className="leggings nunitosans-normal-gray-12px">{leggings}</div>
              <div className="overlap-group4">
                <div className="tops">{tops}</div>
                <div className="t-shirts nunitosans-normal-gray-12px">{tShirts}</div>
                <img className="line-6" src={line61} />
              </div>
              <div className="blouses nunitosans-normal-gray-12px">{blouses}</div>
              <div className="place nunitosans-normal-gray-12px">{place}</div>
              <div className="sweater nunitosans-normal-gray-12px">{sweater}</div>
              <div className="sweatshirt nunitosans-normal-gray-12px">{sweatshirt}</div>
              <div className="coat nunitosans-normal-gray-12px">{coat}</div>
              <div className="jacket nunitosans-normal-gray-12px">{jacket}</div>
            </div>
          </div>
          <div className="auto-flex8">
            <div className="overlap-group">
              <div className="sneakers nunitosans-normal-gray-12px">{sneakers}</div>
              <div className="shoes">{shoes}</div>
              <img className="line-59" src={line59} />
            </div>
            <div className="heels nunitosans-normal-gray-12px">{heels}</div>
            <div className="boots nunitosans-normal-gray-12px">{boots}</div>
            <div className="sandles nunitosans-normal-gray-12px">{sandles}</div>
            <div className="flats nunitosans-normal-gray-12px">{flats}</div>
            <div className="overlap-group5">
              <div className="ballcap nunitosans-normal-gray-12px">{ballcap}</div>
              <div className="hats">{hats}</div>
              <img className="line-6" src={line60} />
            </div>
            <div className="name nunitosans-normal-gray-12px">{name}</div>
          </div>
          <div className="auto-flex5">
            <div className="auto-flex4">
              <div className="auto-flex2">
                <div className="overlap-group2">
                  <div className="accessories">{accessories}</div>
                  <div className="wallets nunitosans-normal-gray-12px">{wallets}</div>
                  <img className="line-58" src={line58} />
                </div>
                <div className="rings nunitosans-normal-gray-12px">{rings}</div>
                <div className="necklaces nunitosans-normal-gray-12px">{necklaces}</div>
                <div className="headbands nunitosans-normal-gray-12px">{headbands}</div>
                <div className="bracelets nunitosans-normal-gray-12px">{bracelets}</div>
                <div className="place nunitosans-normal-gray-12px">{place2}</div>
                <div className="earings nunitosans-normal-gray-12px">{earingS}</div>
                <div className="overlap-group3">
                  <div className="bags">{bags}</div>
                  <div className="backpacks nunitosans-normal-gray-12px">{backpacks}</div>
                  <img className="line-57" src={line57} />
                </div>
                <div className="over-the-shoulder nunitosans-normal-gray-12px">{overTheShoulder}</div>
                <div className="place nunitosans-normal-gray-12px">{place3}</div>
              </div>
              <div className="overlap-group1">
                <div className="brands">{brands}</div>
                <img className="line-63" src={line63} />
                <p className="text-1 nunitosans-normal-gray-12px">{text1}</p>
              </div>
              <p className="text-2 nunitosans-normal-gray-12px">{text2}</p>
              <div className="auto-flex3">
                <Link to="/new-arrivals">
                  <img className="path-292-1" src={path2922} />
                </Link>
                <div className="see-new-arrivals">{seeNewArrivals}</div>
              </div>
            </div>
            <Link to="/browse">
              <div className="see-all-items">{seeAllItems}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
