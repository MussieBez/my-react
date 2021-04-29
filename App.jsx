import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import HOME from "./components/HOME";
import NewArrivals from "./components/NewArrivals";
import LastChance from "./components/LastChance";
import FAQ from "./components/FAQ";
import RentalPolicy from "./components/RentalPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import Editorial from "./components/Editorial";
import Browse from "./components/Browse";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/category">
          <Category {...CategoryData} />
        </Route>
        <Route path="/:path(|home)">
          <HOME {...HOMEData} />
        </Route>
        <Route path="/new-arrivals">
          <NewArrivals {...NewArrivalsData} />
        </Route>
        <Route path="/last-chance">
          <LastChance {...LastChanceData} />
        </Route>
        <Route path="/faq">
          <FAQ {...FAQData} />
        </Route>
        <Route path="/rental-policy">
          <RentalPolicy {...RentalPolicyData} />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy {...PrivacyPolicyData} />
        </Route>
        <Route path="/terms-conditions">
          <TermsConditions {...TermsConditionsData} />
        </Route>
        <Route path="/editorial">
          <Editorial {...EditorialData} />
        </Route>
        <Route path="/browse">
          <Browse {...BrowseData} />
        </Route>
        <Route path="/about-us">
          <AboutUs {...AboutUsData} />
        </Route>
        <Route path="/dashboard">
          <Dashboard {...DashboardData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group179Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group164Data = {
    email: "Email",
};

const group1642Data = {
    email: "Password",
};

const group1643Data = {
    email: "Name",
};

const group1644Data = {
    email: "Email",
};

const group1645Data = {
    email: "Password",
};

const CategoryData = {
    theMercerClub: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    component211: "/img/path-34@1x.png",
    path52: "/img/path-5-1@1x.png",
    line22: "/img/line-2@1x.png",
    path424: "/img/path-424@1x.png",
    lastChance: "Last Chance",
    x8Dc2Ce6F0C684Ff8Bb3B70380E5D70A1Jp: "/img/8dc2ce6f-0c68-4ff8-bb3b-70380e5d70a1-jpeg@1x.png",
    pants: "Pants",
    bottoms: "BOTTOMS",
    line62: "/img/line-62@1x.png",
    shorts: "Shorts",
    trackPants: "Track Pants",
    skirt: "Skirt",
    dresses: "Dresses",
    sweatpants: "Sweatpants",
    leggings: "Leggings",
    tops: "TOPS",
    tShirts: "T - Shirts",
    line61: "/img/line-60@1x.png",
    blouses: "Blouses",
    place: "Polo",
    sweater: "Sweater",
    sweatshirt: "Sweatshirt",
    coat: "Coat",
    jacket: "Jacket",
    sneakers: "Sneakers",
    shoes: "SHOES",
    line59: "/img/line-59@1x.png",
    heels: "Heels",
    boots: "Boots",
    sandles: "Sandles",
    flats: "Flats",
    ballcap: "Ballcap",
    hats: "HATS",
    line60: "/img/line-60@1x.png",
    name: "Bennie",
    accessories: "ACCESSORIES",
    wallets: "Wallets",
    line58: "/img/line-58@1x.png",
    rings: "Rings",
    necklaces: "Necklaces",
    headbands: "Headbands",
    bracelets: "Bracelets ",
    place2: "Belt",
    earingS: "Earing's ",
    bags: "BAGS",
    backpacks: "Backpacks",
    line57: "/img/line-57@1x.png",
    overTheShoulder: "Over-the-Shoulder",
    place3: "Totes",
    brands: "BRANDS",
    line63: "/img/line-63@1x.png",
    text1: (<>Supreme<br />Nike<br />Adidas<br />Off-White<br />Yeezy<br />Bape<br />The North Face Collabs<br />Older Jordan&#x27;s<br />Fear of God<br />Stone Island<br />Kith Collabs<br />Gosha Rubchinskiy<br />Mitchell &amp; Ness<br />Ralph Lauren Purple<br />Balenciaga<br />Madison Margiela<br />Nike<br />Yeezy<br />Adidas<br />Air Jordan&#x27;s <br />DIOR</>),
    text2: (<>Saint Laurent<br />GUCCI<br />Louis Vuitton<br />RAF Simmons<br />Rick Owens<br />CDG<br />Visvim<br />Kapital<br />Ralph Lauren<br />RRL<br />45RPM<br />LVC<br />Margiela<br />Acne Studios<br />Burberry<br />Balenciaga<br />Prada<br />Fendi<br />Vetements<br />Issey Mikyake<br />Carhart WIP</>),
    path2922: "/img/path-292@1x.png",
    seeNewArrivals: "See New Arrivals",
    seeAllItems: "See All Items...",
    group179Props: group179Data,
    group164Props: group164Data,
    group1642Props: group1642Data,
    group1643Props: group1643Data,
    group1644Props: group1644Data,
    group1645Props: group1645Data,
};

const group1792Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group1646Data = {
    email: "Email",
};

const group1647Data = {
    email: "Password",
};

const maskGroup1Data = {
    group164Props: group1646Data,
    group1642Props: group1647Data,
};

const loginData = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup1Data,
};

const group1648Data = {
    email: "Email",
};

const group1649Data = {
    email: "Name",
};

const group16410Data = {
    email: "Password",
};

const maskGroup12Data = {
    group164Props: group1648Data,
    group1642Props: group1649Data,
    group1643Props: group16410Data,
};

const component221Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-1@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup12Props: maskGroup12Data,
};

const HOMEData = {
    browse: "Browse",
    rentalPolicy: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text3: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy: "Privacy Policy",
    membership: "Membership",
    spanText: (<>Customer Service<br /></>),
    spanText2: "(954) 787-0304",
    group5: "/img/path-27@1x.png",
    group6: "/img/path-28@1x.png",
    path13: "/img/path-13@1x.png",
    group7: "/img/path-30@1x.png",
    path31: "/img/path-31@1x.png",
    path32: "/img/path-32@1x.png",
    membership2: "MEMBERSHIP",
    photos: "PHOTOS",
    latestDrops: (<>LATEST <br />DROPS</>),
    robertAndallGk0Ccqba5FcUnsplash: "/img/robert-andall-gk0ccqba5fc-unsplash@1x.png",
    getAccessToOurGr: (<>Get access to our growing collection of streetwear and luxury clothing from the most popular designers in the industry. Authenticity guaranteed.<br />Rest assured each order is guaranteed authentic and will arrive in like-new collection. Minor wear and tear is covered under the rental agreement. You can read more about in the FAQ or send us an email any time.</>),
    text5: "GET THE LATEST DROPS",
    path3: "/img/path-3@1x.png",
    path4: "/img/path-4@1x.png",
    shopByDesigner: "SHOP BY DESIGNER",
    f8Ca78BfEfbe4Fbc928A21B0217F015BCol: "/img/f8ca78bf-efbe-4fbc-928a-21b0217f015b-color1@1x.png",
    x32D8E5B43E28402F83686C3De5Ddcec2Jp: "/img/32d8e5b4-3e28-402f-8368-6c3de5ddcec2-jpeg@1x.png",
    x0Ebe6F8CBae24A9EB612662Cd90E4106Jp: "/img/0ebe6f8c-bae2-4a9e-b612-662cd90e4106-jpeg@1x.png",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text6: "SIGN-UP FOR MEMBERSHIP",
    text7: "STAR WITH YOUR EMAIL ",
    heroPic: "/img/hero-pic@1x.png",
    path12: "/img/path-12@1x.png",
    noWaitlistsIcon: "/img/no-waitlists-icon@1x.png",
    path46: "/img/path-46@1x.png",
    path47: "/img/path-47@1x.png",
    path48: "/img/path-48@1x.png",
    path49: "/img/path-49@1x.png",
    path50: "/img/path-50@1x.png",
    line50: "/img/line-50@1x.png",
    path51: "/img/path-51@1x.png",
    path52: "/img/path-52@1x.png",
    path53: "/img/path-53@1x.png",
    path54: "/img/path-54@1x.png",
    path55: "/img/path-55@1x.png",
    path57: "/img/path-57@1x.png",
    path58: "/img/path-58@1x.png",
    path59: "/img/path-59@1x.png",
    path60: "/img/path-60@1x.png",
    path61: "/img/path-61@1x.png",
    path40: "/img/path-40@1x.png",
    path41: "/img/path-41@1x.png",
    path42: "/img/path-42@1x.png",
    path43: "/img/path-43@1x.png",
    path44: "/img/path-44@1x.png",
    path45: "/img/path-45@1x.png",
    free: "FREE",
    union20: "/img/union-20@1x.png",
    polygon4: "/img/polygon-4@1x.png",
    price: "$",
    price2: "$",
    freeDryCleaning: "FREE DRY CLEANING",
    freeShipping: "FREE SHIPPING",
    rentalInsurance: "RENTAL INSURANCE",
    noWaitlists: "NO WAITLISTS",
    lowMonthlyRate: "LOW MONTHLY RATE",
    text8: "AUTHENTICITY GUARANTEED",
    text9: "Stains have no power over you. We take care of dry cleaning.",
    text10: "Quick, 2-3 day shipping is our norm. We cover the return costs and supply the label. Just tape and send!",
    text11: "Zombie apocalypse? We got you. Wear and tear is taken care of by our in house team.",
    text12: "You get access to items the day they drop. Along with designer favorites offered all year around.",
    text13: "Our prices are the lowest in the industry because we don't compromise on accessibility.",
    text14: "Never fake. Always fresh. Like you.",
    Month: "/month",
    number: "125",
    price3: "$",
    text15: (<>GET UNLIMITED <br />STREETWEAR &amp; SNEAKERS</>),
    text16: (<>If you have any questions, <br />please contact customer support at support@themercerclubnyc.com.</>),
    viewPhotoGallery: "View Photo Gallery",
    union22: "/img/union-22@1x.png",
    union21: "/img/union-21@1x.png",
    text17: "SIGN-UP FOR MEMBERSHIP",
    theMercerClub: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    theMercerClub2: "THE MERCER CLUB",
    group179Props: group1792Data,
    loginProps: loginData,
    component221Props: component221Data,
};

const group1793Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16411Data = {
    email: "Email",
};

const group16412Data = {
    email: "Password",
};

const maskGroup13Data = {
    group164Props: group16411Data,
    group1642Props: group16412Data,
};

const login2Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup13Data,
};

const group16413Data = {
    email: "Email",
};

const group16414Data = {
    email: "Name",
};

const group16415Data = {
    email: "Password",
};

const maskGroup122Data = {
    group164Props: group16413Data,
    group1642Props: group16414Data,
    group1643Props: group16415Data,
};

const component2212Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-1@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup12Props: maskGroup122Data,
};

const NewArrivalsData = {
    img_3258: "/img/img-3258@1x.png",
    img_2584: "/img/img-2584@1x.png",
    x32D8E5B43E28402F83686C3De5Ddcec2Jp: "/img/32d8e5b4-3e28-402f-8368-6c3de5ddcec2-jpeg-1@1x.png",
    ff3672B4B07D4Cca8D4FC7192F2Cef10Jpe: "/img/ff3672b4-b07d-4cca-8d4f-c7192f2cef10-jpeg@1x.png",
    path292: "/img/path-292@1x.png",
    lastCahnce: "Last Cahnce",
    path424: "/img/path-424@1x.png",
    categories: "Categories",
    newArrivals: "NEW ARRIVALS",
    productsFrom: "Products From:",
    text18: (<>Older Jordan&#x27;s<br />Fear of God<br />Stone Island<br />Kith Collabs</>),
    name: (<>Louis Vuitton<br />RAF Simmons<br />Rick Owens<br />And More!</>),
    theMercerClub: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path2922: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    group179Props: group1793Data,
    loginProps: login2Data,
    component221Props: component2212Data,
};

const group1794Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16416Data = {
    email: "Email",
};

const group16417Data = {
    email: "Password",
};

const maskGroup14Data = {
    group164Props: group16416Data,
    group1642Props: group16417Data,
};

const login3Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup14Data,
};

const group16418Data = {
    email: "Email",
};

const group16419Data = {
    email: "Name",
};

const group16420Data = {
    email: "Password",
};

const maskGroup123Data = {
    group164Props: group16418Data,
    group1642Props: group16419Data,
    group1643Props: group16420Data,
};

const component2213Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-1@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup12Props: maskGroup123Data,
};

const LastChanceData = {
    path424: "/img/path-424@1x.png",
    newArrivals: "New Arrivals",
    path292: "/img/path-292@1x.png",
    categories: "Categories",
    nqobileVundlaLToxppc4MiUnsplash: "/img/nqobile-vundla-l-toxppc4mi-unsplash@1x.png",
    x90541F7E3B3642Ec97773813A3F81De4Jp: "/img/90541f7e-3b36-42ec-9777-3813a3f81de4-jpeg@1x.png",
    chrisHenry4Gd0NusmtseUnsplash: "/img/chris-henry-4gd0nusmtse-unsplash@1x.png",
    img_2587: "/img/img-2587@1x.png",
    taylorXw4Cbp9LobmUnsplash: "/img/taylor-xw4cbp9lobm-unsplash@1x.png",
    justinChrnQtm9BjPivuUnsplash: "/img/justin-chrn-qtm9bj-pivu-unsplash@1x.png",
    theMercerClub: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path2922: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    group179Props: group1794Data,
    loginProps: login3Data,
    component221Props: component2213Data,
};

const group7Data = {
    group7: "/img/path-30@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
};

const group8Data = {
    group5: "/img/path-27@1x.png",
    group6: "/img/path-28-1@1x.png",
    path13: "/img/path-13@1x.png",
    group7Props: group7Data,
};

const group1795Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16421Data = {
    email: "Email",
};

const group16422Data = {
    email: "Password",
};

const maskGroup15Data = {
    group164Props: group16421Data,
    group1642Props: group16422Data,
};

const login22Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5-8@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup15Data,
};

const group16423Data = {
    email: "Email",
};

const group16424Data = {
    email: "Name",
};

const group16425Data = {
    email: "Password",
};

const maskGroup124Data = {
    group164Props: group16423Data,
    group1642Props: group16424Data,
    group1643Props: group16425Data,
};

const component22122Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-9@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup12Props: maskGroup124Data,
};

const FAQData = {
    faqs: "FAQS",
    mikeVonQw9Frzpj70UUnsplash: "/img/mike-von-qw9frzpj70u-unsplash@1x.png",
    account: "ACCOUNT",
    text19: "How do I return my items?",
    onceYouReAMember: (<>Once you&#x27;re a member, you will be prompted to choose items for your first month&#x27;s shipment. <br />On your dashboard you will find delivery date information that will tell you how quickly your shipment is estimated to arrive (we will also send you an email with the tracking information of your order.) Once you&#x27;ve found your delivery date, think about your calendar for work or personal events and the upcoming weather. <br />Next, come up with some ideas about the type of styles you&#x27;d like to add to your shipment. We update our inventory every month so you can browse &quot;&quot;New Arrivals&quot;&quot; to see the most recently added inventory available.<br />When you see something you love, heart it! This will help you keep a running list of favorites when it&#x27;s time to pick your shipments. Hearting also helps your closet learn your style preferences. Over time, your closet adapts to what you heart and rent will give you up to date style recommendations tailored for you! <br />Select the pieces you and hit &quot;&quot;Reserve&quot;&quot; after clicking on each item. Review your items in your bag, confirm your shipment and you&#x27;re done!</>),
    text20: "How do I choose items that I want shipped to me?",
    text21: "How long can I keep the items I rent?",
    text22: "How do I sign up to become a member?",
    text23: "When will my order arrive?",
    img_2588: "/img/img-2588@1x.png",
    allOfOurGarments: (<>All of our garments, accessories, hangers, and reusable packaging are cleaned extensively each time they are returned to us. <br />Our cleaning agents and practices are designed to kill viruses such as the common cold and flu.  Based on current guidance, we have no reason to believe that our processes are ineffective against COVID-19.<br />The teams in our fulfillment centers use a variety of techniques to ensure that each garment is thoroughly cleaned, steamed and pressed, inspected for quality, and carefully packaged so that it arrives ready to wear. All garments go through a wet or dry cleaning process. They also go through an additional screening process by our staff which still go through our standard cleaning processes. According to the CDC, flu viruses are killed by heat above 167°F. Every garment is then enclosed in bags for protection and cleanliness, which we ask customers to return for recycling.</>),
    text24: "How are items cleaned, including to prevent to the spread of viruses such as COVID-19?",
    sanitation: "SANITATION",
    text25: "How do I pause my membership?",
    weWantYourMembers: (<>We want your membership to flex with your life, so you can pause your membership whenever you need to through your user dashboard! By pausing your account rather than cancelling, you can continue to access your members-only 25% discount on 4 or 8 day Reserve rentals and will continue to receive communications about new arrivals and style inspiration. <br />You are able to extend your pause (with or without items) in your user dashboard for one month at a time as soon as you are within 30 days of your resume date. On your resume date (noted in your user dashboard), you will be automatically charged your monthly membership fee, and will be alerted via email to select new items! <br />You can cancel your membership at any time by texting us at support@themercerclubnyc.com<br />Upon cancellation, please return your pieces before the end of the current billing period noted in your account settings to avoid additional late fees.<br />If we do not receive your pieces by the end of your billing period, you will be charged up to the current members&#x27; price to purchase the item plus applicable tax in accordance with our late fee policy. </>),
    text26: "BILLING, PAYMENT, & MEMBERSHIP",
    text27: "How will I be billed each month for my membership?",
    membersAreCharged: "Members are charged a membership price on a monthly basis. Memberships are automatically renewed and you will be billed on the same day every month at the rate then in effect to your payment method on file. Your membership will not expire unless you contact us and choose to cancel/pause it.",
    text28: "How do I update my billing and shipping information?",
    yourBillingAndShi: "Your billing and shipping information is stored in your user dashboard and can be updated at any time. Please note that the address stored in your account will become the default location to which your shipments are sent. If you are traveling within the continental United States, Hawaii, and Alaska, please be sure to update the address in your settings with the location of your destination. If you are traveling and unsure about delivery dates, please reach out to the our team at support@themercerclubnyc.com",
    miscellaneous: "MISCELLANEOUS",
    text29: "Can I keep the garment bag or box my items come in?",
    unfortunatelyNoW: (<>Unfortunately, no. We need your Mercer Club  sustainable garment bag back to give to other customers&#x27; rentals. If your garment bags are not returned with your Reserve order or before you cancel your membership, you will be charged $50 for each bag. All accessory bags must also be returned to The Mercer Club to ensure your items are scanned as returned and avoid a $10 fee.<br />Clothes can be returned with or without the hangers. If you hung onto them, send them back and we&#x27;ll recycle them!</>),
    text30: "What are the late fee’s when items are not returned on time?",
    itemsAreConsidered: (<>Items are considered late if The Mercer Club does not receive your item(s) from you by the date your cancellation takes effect (this will be your last bill date, or your “Product Return Date”). <br />If we do not receive item(s) from you, late fee(s) will be charged to your payment method on file for each item that is not returned. You will be charged up to 100% of the members’ only price for the items you rented, plus applicable sales tax. Any late fee that we charge you is in addition to the subscription fee you pay as a monthly member.<br />Late Fee Policy Details for Cancelled Memberships:</>),
    returnsMustBeDr: (<>• Returns must be dropped off with the shipping carrier noted on your return label by 12 p.m. on or before the Product Return Date. This ensures that your package will be scanned by the return carrier by the next day and returned to us on time. We will not cover additional fees incurred due to international shipping.<br />• Please note that you are liable for any late fees incurred, regardless of any third party involved with the return. Do not leave your rentals with any third party (for example, your hotel, mailroom or friend) for return.<br />• If you lose your return packaging*, you are responsible for returning the item at your own expense by the expected return date, and providing The Mercer Club with a tracking number. <br />• Late fee(s) are payable for each item that is not returned when due. <br />• If you have not returned a rental item within 7 business days after your Product Return Date, your late return will be considered a non-return and The Mercer Club will charge your payment method on file the members’ only price for each item minus previously paid late fees and sales tax.</>),
    faq: "FAQ",
    rentalPolicy: "Rental Policy",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    line4: "/img/line-4@1x.png",
    packUpYourRentals: "Pack up your rentals in customized sustainability garment bag. Make sure to package each accessory in the garment bag or box you received with your order. Clothes must be returned with the hangars and bag they may came with. Once you've packaged your old order use the return shipping label in your garment bag and take it to the nearest USPS on your choosing to be shipped back to us.",
    text31: "You can keep your items for the set rental time period that you have reserved via our website.",
    toBecomeAMemberY: "To become a member you need to click the “Become A Member” tab on our homepage. After that you’ll be prompted to input your shipping and billing information. After you have input your shipping and billing information you’ll be redirected to our third-party user verification site where you will be asked to verify your identity. We ask that you do this as a security measure to protect the integrity of our members and ensure users are who they say they are. After you verify your identity our security team will review your application and once your approved you can begin shopping as an official Mercer Club member. It’s important to note that you cannot checkout any items until you have completed our verification process.",
    yourDeliveryDateW: "Your delivery date will be confirmed before checkout. Check your email for confirmation your order has shipped and to locate your tracking information. Our fulfilment team ships items out every weekday by 5pm EST, any order placed after that time frame will be shipped the next business day. Reserve rentals may be delivered on Saturdays. ",
    img_3259: "/img/img-3259@1x.png",
    browse: "Browse",
    rentalPolicy2: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text32: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions2: "Terms & Conditions",
    faqs2: "FAQs",
    privacyPolicy2: "Privacy Policy",
    membership: "Membership",
    spanText: (<>Customer Service<br /></>),
    spanText2: "(954) 787-0304",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text34: "SIGN-UP FOR MEMBERSHIP",
    text35: "STAR WITH YOUR EMAIL ",
    theMercerClub: "THE MERCER CLUB",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    group8Props: group8Data,
    group179Props: group1795Data,
    login2Props: login22Data,
    component2212Props: component22122Data,
};

const group72Data = {
    group7: "/img/path-30-2@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
};

const group82Data = {
    group5: "/img/path-27-2@1x.png",
    group6: "/img/path-28-1@1x.png",
    path13: "/img/path-13@1x.png",
    group7Props: group72Data,
};

const group1796Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16426Data = {
    email: "Email",
};

const group16427Data = {
    email: "Password",
};

const maskGroup16Data = {
    group164Props: group16426Data,
    group1642Props: group16427Data,
};

const login23Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5-8@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup16Data,
};

const group16428Data = {
    email: "Email",
};

const group16429Data = {
    email: "Name",
};

const group16430Data = {
    email: "Password",
};

const maskGroup125Data = {
    group164Props: group16428Data,
    group1642Props: group16429Data,
    group1643Props: group16430Data,
};

const component22123Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-9@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup12Props: maskGroup125Data,
};

const RentalPolicyData = {
    rentalPolicy: "RENTAL POLICY",
    img_7544: "/img/img-7544@1x.png",
    theseTermsAndCond: (<>These terms and conditions are a legal agreement between you (&quot;You&quot; or &quot;Your&quot;) and The Mercer Club, Inc.  (&quot;The Mercer Club, Inc.,&quot; &quot;We,&quot;, “we” &quot;us,&quot; or &quot;our&quot;), establishing terms and conditions under which You will submit information to, and rent articles of clothing and accessories (each a “Product” and collectively, &quot;Products or Items&quot;) and receive related services (“Services”) from, The Mercer Club, Inc. via our website at https://www.themercerclubnyc.com (the &quot;Website&quot;).<br /><br />CAREFULLY READ THE TERMS AND CONDITIONS OF THIS AGREEMENT. BY ORDERING PRODUCTS OFFERED ON OUR SITE, SIGNING UP FOR THE SERVICE AND PUTTING IN YOUR CREDIT CARD DETAILS, YOU ARE AGREEING TO BE BOUND BY AND ARE BECOMING A PARTY TO THIS AGREEMENT. IF YOU DO NOT AGREE TO ALL OF THE TERMS OF THIS AGREEMENT, PLEASE DO NOT ORDER ANY PRODUCTS AND DO NOT RENT THE PRODUCTS.<br /><br />WE RESERVE THE RIGHT TO CHANGE THE TERMS OF THIS AGREEMENT IN THE FUTURE AND ANY CHANGES WILL APPLY TO THE RENTAL OF ANY PRODUCTS AFTER THE DATE OF SUCH CHANGE.</>),
    text36: "1. General; Rental Not Purchase; Adult Agreement Required.",
    thisAgreementConta: "This Agreement contains all the terms and conditions governing Your rental of Products from The Mercer Club, Inc. via themercerclubnyc.com website from time to time. You agree that Your general use of our Website, other than rental orders as set forth in this Agreement, is subject in all respects to our Website Terms and Conditions of Use available at Terms & Conditions and Privacy Policy at Privacy, as such terms may change from time to time. No other terms or conditions (preprinted or otherwise) shall have any force or effect. You agree and acknowledge that You are renting the Products and that ownership of the Products remains with The Mercer Club, Inc. at all times.",
    ourProductsMayBe: "Our Products may be rented for use by individuals under 18 years of age, but rentals are made only to adults who must provide credit card information which must be approved by our merchant and processing agent. If You are under 18 years of age, You may accept these terms and conditions and order Products only with involvement and approval of Your parent or legal guardian. We currently and generally limit the number of articles of clothing that can be rented by You and our other customers to TWO (2) at any time. Your purchase of a subscription provides you one (1) or two (2) articles of clothing per order, quantities of each as defined by your membership plan, that can be in your possession at any given time until the rental period of three (3) days is over so long as you continue to make RECURRING payments for your membership each month.",
    text37: "2. Rental Fees; Credit Card Authorizations; Cancellations.",
    theRentalFeeRen: (<>The rental fee (“Rental Fee”) for the Products will be the monthly rental fee (as defined on the website for your specific membership) PLUS any insurance or shipping charges listed on the website in connection with your membership.<br /><br />Upon Your order, You hereby authorize us to charge your credit card for the Rental Fee and / or monthly subscription fee on a RECURRING basis whereby your card will be automatically charged thirty days from the commencement of your membership. We will charge Your credit card the amount of the Rental Fee immediately upon Your rental order or checkout where you confirm and submit – “Check Out”.</>),
    inAdditionAtThe: (<>In addition, at the time of Your order of a Product, You hereby authorize The Mercer Club, Inc. to charge Your credit card for the ORIGINAL RETAIL VALUE of that Product (when new) as set forth, plus any applicable sales taxes (“Retail Value”); provided that we will only charge the Retail Value in the circumstances set forth in Section 4 below.<br /><br />Rental Fees exclude all federal, state and local taxes, fees, customs, duties, levies and other governmental assessments, all of which shall be paid by You directly or, if paid by The Mercer Club, Inc., shall be reimbursed by You to The Mercer Club, Inc. in connection with Your order for the rental.<br /><br />You may cancel your membership at any time prior to the renewal of your membership to The Mercer Club to avoid being charged for another month. Canceling account post renewal date will result in your account being charged for an entire month of The Mercer Club membership. Once you cancel your membership, you are responsible for submitting to the U.S. Postal Service (USPS) through Priority Mail any outstanding articles of clothing or accessories in your possession within THREE (3) CALENDAR DAYS. Failure to do so will result in you being charged for the entire value of the Product, which at that point will be yours to keep.</>),
    text38: "3. The Mercer Club Offering.",
    spanText: (<>a. Delivery<br /></>),
    spanText2: (<>All deliveries will be made as per The Mercer Club delivery and mailing schedules. Sometimes The Mercer Club Products may appear slightly different in color and style than the photos displayed on our website. Our liability to you for not meeting your satisfaction is limited to refund of a maximum of one month’s rental fee divided by 4 (excluding insurance and any relevant delivery charges) as determined by us. See Section 5(b) below.<br /><br /></>),
    spanText3: (<>b. Guarantees<br /></>),
    spanText4: "Return of Unworn Products Due to Size. If Your Product does not fit You, then You may return the Product(s) to us by simply mailing to us using the pre-paid label and inform us via email or phone that you are returning the Product(s) in conformance with the return procedures in Section 4(b) below (a “Sizing Return”). Unless you are completely dissatisfied with your garments, no refund will be issued and another Product will be mailed to you automatically.",
    spanText5: (<>c. Cleaning<br /></>),
    spanText6: (<>All Products will be professionally cleaned and delivered ready to wear for each consumer. We tumble wash and / or dry clean and inspect each product with the utmost care, but use of the product is at your own risk and The Mercer Club, Inc. shall not be held liable for any health-related complaints associated with a product rented from our site.<br /><br /></>),
    spanText7: (<>d. Return Packaging<br /></>),
    spanText8: (<>With delivery of the Product, we will provide You with a pre-paid, pre-addressed envelope or box as well as instructions for Your use in returning the Products to The Mercer Club, Inc. (“Return Packaging”).<br /><br /></>),
    spanText9: (<>e. Services<br /></>),
    spanText10: "On our Website, we offer various Services to assist You in selecting a Product. Our Services are provided “AS IS” without guarantee as to results.",
    text39: "4. Your Commitments to Us; Payment of Retail Value.",
    spanText11: (<>a. Receipt of the Products<br /></>),
    spanText12: (<>Upon shipment, You bear responsibility for the Product(s). In the event that an unsecure shipping address is provided, The Mercer Club, Inc. does not bear liability for Products left unattended. Furthermore, You acknowledge that providing anything other than a secure shipping address may result in delivery delays and additional delivery fees for which The Mercer Club, Inc. is not to be held liable, but You will be held liable.<br /><br /></>),
    spanText13: (<>b. Use of the Products<br /></>),
    spanText14: (<>You agree to treat the Products with great care, and return it in the same condition as was delivered to you. You are completely responsible for loss, destruction or damage to the Products due to theft, disappearance, fire, stains or any other cause, other than normal wear and tear. Normal wear and tear encompasses minor stains, missing beads, stuck zippers or other minor damage covered by the subscription price you paid in order to rent the Product. If You return a Product that is damaged beyond normal wear and tear, then You agree that we shall charge You, and You shall pay, for repairing or replacing the Product, as determined in our discretion, as advertised on our site OR explained to you in the package delivered to you.<br /><br /></>),
    spanText15: (<>c. Payment of Retail Value<br /></>),
    spanText16: (<>You agree to treat the Products with great care, and return it in the same condition as was delivered to you. You are completely responsible for loss, destruction or damage to the Products due to theft, disappearance, fire, stains or any other cause, other than normal wear and tear.<br /><br />- Collections: If You do not pay the amounts You owe us when due, then we may institute collection procedures. You agree to pay our costs of collection, including without limitation reasonable attorneys’ fees.<br /><br />- Removal: We reserve the right to terminate your right to be a member of The Mercer Club at any time in the event of Your breach of this Agreement or for no reason or any other reason in our discretion.</>),
    spanText17: (<>d. Email<br /></>),
    spanText18: (<>We will use the preferences and orders You provide on our Website to send You e-mails and other marketing materials for other Products. You may opt out of receiving those e-mails by clicking on the links provided at the bottom of those e-mails when available.<br /><br /></>),
    spanText19: (<>e. Limited Warranty<br /></>),
    spanText20: (<>The limited warranties set forth in Section 3 apply only to You, may be acted upon only by You, and may not be assigned, sold or transferred to any third party. No warranties are granted other than as set forth in Section 3. Our warranty herein shall not apply to any matters arising from violation of Your commitments set forth in Section 4 of this Agreement.<br /><br /></>),
    spanText21: (<>f. Remedies<br /></>),
    spanText22: (<>Your sole and exclusive remedy and The Mercer Club, Inc.’s sole and exclusive liability for a breach of The Mercer Club, Inc.’s limited warranty shall be, at The Mercer Club, Inc.’s option, The Mercer Club, Inc.’s use of its commercially reasonable efforts to replace the non-conforming Product in a timely manner or a refund of Your Rental Fee (excluding insurance and delivery charges).<br /><br /></>),
    spanText23: (<>g. Disclaimers<br /></>),
    spanText24: "THIS LIMITED WARRANTY IS IN LIEU OF ANY OTHER WARRANTIES, WHETHER EXPRESS OR IMPLIED, WRITTEN OR ORAL (INCLUDING, WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT) WITH RESPECT TO THE PRODUCTS, THE SERVICES RELATED THERETO OR THE USE OR RESULTS OF THE PRODUCTS OR SERVICES.",
    text40: "5. Limitation of Liability.",
    spanText25: (<>a. No Indirect Damages. <br /></>),
    spanText26: "IN NO EVENT SHALL THE MERCER CLUB, INC. / (OR ITS SUPPLIERS OR LICENSORS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, PUNITIVE, MULTIPLE OR OTHER INDIRECT DAMAGES, OR FOR LOSS OF PROFITS OR LOSS OF USE DAMAGES, ARISING OUT OF THE PRODUCTS OR SERVICES RELATED THERETO, WHETHER BASED UPON WARRANTY, CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, EVEN IF LE TOTE, INC./ LE TOTE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES.",
    spanText27: (<>b. Limited Direct Damages. <br /></>),
    spanText28: (<>THE MERCER CLUB, INC.’S (AND ITS SUPPLIERS’ AND LICENSORS&#x27;) AGGREGATE LIABILITY ARISING OUT OF PRODUCTS AND SERVICES RELATED THERETO, WHETHER BASED UPON WARRANTY, CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE, SHALL NOT EXCEED THE APPLICABLE RENTAL FEES PAID BY YOU FOR THE APPLICABLE PRODUCT AND/OR SERVICE<br /><br /></>),
    spanText29: (<>c. Use of Results at Your Risk.<br /></>),
    spanText30: "YOU ASSUME SOLE AND EXCLUSIVE RESPONSIBILITY AND LIABILITY FOR ANY CLAIMS AGAINST YOU AND/OR DAMAGES ARISING FROM USE OF THE PRODUCTS DURING YOUR RENTAL PERIOD.",
    x6Miscellaneous: "6. Miscellaneous.",
    thisAgreementConst: (<>This Agreement constitutes the entire agreement between You and The Mercer Club, Inc. with respect to the subject matter hereof and is the final, complete, and exclusive statement of the terms of the Agreement, superseding all prior written and oral agreements, understandings and undertakings with respect to the subject matter hereof. Modifications may be made only by The Mercer Club, Inc. We reserve the right to terminate or amend this Agreement at any time for any or no reason, effective upon notice to You of such termination or amendment. The waiver of any term or condition or any breach thereof shall not affect any other term of condition of this Agreement. The Agreement shall be governed by and construed in accordance with the laws of the State of New York, excluding its conflicts of laws principles. You shall not assign this Agreement without The Mercer Club, Inc.’s prior written consent. Termination of this Agreement will not relieve.<br /><br />Sections 1, 2, 3, 4, 5, 6 and 7 shall survive this termination of this Agreement according to their terms. If any provision of this Agreement shall be held illegal, unenforceable, or in conflict with any law of any authority having jurisdiction over this Agreement, the validity of the remaining portions or provisions hereof shall remain in full force and effect. The Mercer Club, Inc. shall not be liable for failure to perform any of its obligations hereunder by reason that are beyond its reasonable control, including, without limitation, fire, earthquake, interruptions in supply, other natural disaster, war embargo, and/or riots or acts of terrorism.</>),
    rayTillerJdulfsrftvmUnsplash: "/img/ray-tiller-jdulfsrftvm-unsplash@1x.png",
    line4: "/img/line-4-1@1x.png",
    faq: "FAQ",
    rentalPolicy2: "Rental Policy",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    browse: "Browse",
    rentalPolicy3: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text41: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions2: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy2: "Privacy Policy",
    membership: "Membership",
    spanText31: (<>Customer Service<br /></>),
    spanText32: "(954) 787-0304",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text43: "SIGN-UP FOR MEMBERSHIP",
    text44: "STAR WITH YOUR EMAIL ",
    theMercerClub: "THE MERCER CLUB",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    group8Props: group82Data,
    group179Props: group1796Data,
    login2Props: login23Data,
    component2212Props: component22123Data,
};

const group73Data = {
    group7: "/img/path-30-2@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
};

const group83Data = {
    group5: "/img/path-27-2@1x.png",
    group6: "/img/path-28-1@1x.png",
    path13: "/img/path-13@1x.png",
    group7Props: group73Data,
};

const group1797Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16431Data = {
    email: "Email",
};

const group16432Data = {
    email: "Password",
};

const maskGroup17Data = {
    group164Props: group16431Data,
    group1642Props: group16432Data,
};

const login24Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5-8@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup17Data,
};

const group16433Data = {
    email: "Email",
};

const group16434Data = {
    email: "Name",
};

const group16435Data = {
    email: "Password",
};

const maskGroup126Data = {
    group164Props: group16433Data,
    group1642Props: group16434Data,
    group1643Props: group16435Data,
};

const component22124Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-1@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup12Props: maskGroup126Data,
};

const PrivacyPolicyData = {
    privacyPolicy: "PRIVACY POLICY",
    spanText: (<>1. Overview<br /></>),
    spanText2: (<>This Privacy Policy explains how The Mercer Club, Inc. (“The Mercer Club”, “we”, or “us”) collects, protects, uses and shares information about you when you use themercerclubnyc.com (“Website”), our mobile applications (“App”), and any of our services (collectively, the “Services”), and whether you access the Services directly or through a third party. <br /><br />Please understand that, except as specifically described below, this Privacy Policy does not apply to information collected by third parties, such as other companies, or third-party websites or mobile applications, even if any are linked to or accessible through the Services. If you have any questions or concerns about our information practices, please contact us at founders@themercerclubnyc.com.  If you do not want information about you to be used as described in this Privacy Policy, you must stop, or refrain from, using the Services.</>),
    karstenWinegeartCvOhcieViUnsplash: "/img/karsten-winegeart-cv-ohcie-vi-unsplash@1x.png",
    text45: "2.  Information We Collect",
    personalInformatio: (<>“Personal Information,” as used in this Privacy Policy, is information that directly identifies an individual, such as a person’s name, or information that reasonably allows an individual to be identified indirectly, such as email or home address or a person’s mobile phone number.  Personal Information also includes information that is directly combined with such identifying information.<br /><br />Most of the Personal Information we collect is from our customers. This information falls into two (2) general categories: <br /><br />Passive Data Collection. This refers to data automatically collected from customers when they visit the Website or use the Services.<br /><br />User-Submitted Information. This refers to information that customers actively submit to us, which may be provided voluntarily or as required to use our Services.</>),
    customersAlsoSomet: "Customers also sometimes provide us with information about other individuals, such as when a customer sends a gift card or uses our referral services to tell a friend about us. In those cases, we may ask that customer to provide the recipient’s name and email address. (We may also collect Personal Information in any personalized message that is submitted with a gift card or referral.) We will automatically send the recipient email correspondence with the gift card or referral, and invite them to visit the Website or otherwise use the Services. If we receive Personal Information for a referral or gift card, we use that information for the sole purpose of sending this email correspondence, and for tracking the use of the gift card or the success of our referral program.",
    spanText3: (<>Mobile Device Information<br /></>),
    spanText4: (<>When you download or use our App, we receive information about your mobile device. We register your device, and we may use the identifier to send you push notifications about your transactions via the Services.<br /><br /></>),
    spanText5: (<>Log Files<br /></>),
    spanText6: (<>Like most websites, we automatically receive and record certain information about our customers’ behavior on our Website or App and when using our Services. Our servers automatically gather technical information about our Website or App traffic and store it in log files. This information includes Internet protocol (IP) addresses, browser type, Internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and other clickstream data. We aggregate this information with other pieces of information to analyze trends, to administer and improve the Services, for example to understand customers’ use of the Website and to make inventory and purchasing decisions that will best serve our customer base. Information from log files may also be used to determine general location information such as city, state or geographic area.<br /><br /></>),
    spanText7: (<>Third Party Advertisers<br /></>),
    spanText8: (<>Third-party advertising companies may also use cookies, web beacons or similar technologies on the Website to collect information (such as click stream information) during your visits to our Website and other websites, as well as during your use of our Services, in order to help us provide you with advertisements about our Services that we believe are likely to be of interest to you. <br /><br /></>),
    spanText9: (<>User-Submitted Information<br /></>),
    spanText10: (<>As a general matter, we may ask you for information, or retain information, that you provide to us in order to provide our Services to you, and to better serve you and our customer base. This category of information includes information submitted electronically, via phone, and in person through our stores. We may also combine this information with Personal Information to provide you with customized and personalized Services.<br /><br />We collect User-Submitted Information in the following ways:<br /><br /></>),
    spanText11: (<>Registration<br /></>),
    spanText12: (<>In order to use some features of the Website, App and Services, including the rental of The Mercer Club’s inventory, you must first create an account with us and agree to the Terms of Service. To create an account, you must provide an email address and create a password. We may also ask you for your birthday. We use the email address you provide to contact you about the products and Services, and to begin to create a tailored experience for you.<br /><br /></>),
    spanText13: (<>Orders<br /></>),
    spanText14: (<>If you order a product from us, we request certain Personal Information from you, whether you access the Services from our App, the Website or otherwise. You must provide contact information (including name, shipping address, telephone number) and a payment method. We use this information for billing purposes, to fill your orders and to communicate with you about your orders. If we have trouble processing an order, we will use this information to contact you. <br /><br />We record what you order and associate it with your account profile. When you return an item, we may ask you for information about your experience, such as, if you wore it and for information regarding how it fit. We record that information to better personalize our Services for you and to improve our Services for others.<br /><br /></>),
    spanText15: (<>Personalization of Service<br /></>),
    spanText16: (<>In order to improve your customer experience, we may request personal characteristics, such as your height, bust, dress size, style and fit preferences, your birthday, and the date and occasion for your rental. We may also ask for your feedback and rating of our products. All of this information is voluntary and helps us improve our Services by enabling us to create a tailored experience for you and our other customers.  Although we believe that providing this information will improve the Services we can offer to you, and your experience of the Services, we will not require you to provide it. (Also, although we may request information about personal physical characteristics, we do not ask for uniquely identifying biometric information.)  We may also collect geolocation information from your mobile device, if you give us permission through your mobile device to do so.. <br /><br /></>),
    spanText17: (<>Third-Party Account Credentials<br /></>),
    spanText18: "If you choose to provide us with your third-party account credentials to such services as Google or Facebook, you understand that some content and/or Personal Information may be shared between the third-party service and us. Any information collected by a third party-service will be used in accordance with that third party’s privacy policy, which we encourage you to review and consider. ",
    text46: "3.  How We Use Your Information",
    spanText19: (<>The purposes and ways that we may use Personal Information about you are described throughout this Privacy Policy, often in connection with the kinds of Personal Information we collect. Other uses of Personal Information are described below. <br /><br />In addition, we may use aggregate, statistical, and deidentified data, which does not specifically identify any individuals, for any purpose.<br /><br /></>),
    spanText20: (<>General Uses of Your Information<br /></>),
    spanText21: (<>We generally use the information we collect, including Personal Information about you, for the following purposes:<br />To Provide Our Services. We use your Personal Information to provide our Services to you, including:</>),
    toPresentYouWit: (<>• To present you with products, information and content through the Services, including     personalization of the Services;<br /><br />• To process transactions, including financial transactions, related to your use of the Services; <br /><br />• To assist you in finding a location to return an item, using location or geolocation information you provide to us; and<br /><br />• To respond to your questions or requests.<br /></>),
    spanText22: (<>For Communications and Marketing <br /></>),
    spanText23: "We use your Personal Information to communicate with you and provide you with information about The Mercer Club and our marketing partners.",
    spanText24: (<>To Develop and Improve Our Services <br /></>),
    spanText25: "We may also use your Personal Information as we work to continually improve our Services, our business and our operations. For example, by:",
    text49: "• Analyzing usage or interest in certain features, or identifying items and areas of interest to our customers.",
    spanText26: (<>For Compliance, Fraud Prevention and Safety <br /></>),
    spanText27: "We may use your Personal Information and disclose it to law enforcement, government authorities, and private parties as we believe necessary or appropriate to: ",
    protectOurYour: (<>• Protect our, your or others’ rights, privacy, safety or property;<br />• Enforce the terms and conditions that govern use of our Services, including for legal claims; and <br />• To prevent, identify, investigate and deter any fraudulent, harmful, unauthorized or illegal activity.</>),
    spanText28: (<>To Comply with Law  <br /></>),
    spanText29: (<>We may use your Personal Information as we believe necessary or appropriate to comply with applicable laws, lawful requests, and legal process.<br /><br /></>),
    spanText30: "As Described or with Your Consent",
    spanText31: (<>  <br />We may use your Personal Information for any other purposes that we describe at the time we collect your Personal Information, or otherwise with your consent.<br /><br /></>),
    spanText32: (<>Communications from Us<br /></>),
    spanText33: "We use your contact information to communicate with you about The Mercer Club and our marketing partners in the following ways:",
    toProvideNewslet: (<>• To provide newsletters, marketing emails or push notifications with special promotional offers, updates and other relevant marketing content;<br />• To provide announcements about the Services; <br />• To communicate with you about the Services and your account, including updates about the status of your orders; and<br />• To verify your identity and address for your orders and rentals. </>),
    text51: "We may communicate with you via phone, email, text messages and push notifications to your mobile device. Standard call, message and data rates charged by your mobile carrier may apply to text messages or other communications received on your mobile device.",
    spanText34: (<>Cookies, Web Beacons and Similar Technologies<br /></>),
    spanText35: (<>A cookie is a small text file that is stored on a computer for record-keeping or tracking purposes. Web beacons (also known as pixel tags or clear GIFs), are graphics that can record whether a person has accessed particular content. We use these and other similar technologies on the Website and App and in connection with our Services.<br /><br />Cookies we utilize may include session cookies, persistent cookies, or similar technologies. A session cookie expires when you close your browser. A persistent cookie is stored on your computer or device for an extended period of time. You can remove persistent cookies by following the directions provided in your Internet browser&#x27;s &quot;help&quot; menu. You may also configure your browser to prevent cookies from being set on your computer. (Instructions should be provided in documentation for your browser.) If you reject cookies, your ability to use the Website, App and Services may be limited, and you may not be able to use certain features of the Website, App or Services. We may use cookies for the following purposes.<br /> <br />Essential cookies. Essential cookies are required for providing you with features or services that you have requested. For example, certain cookies enable you to log into secure areas of our Services. Disabling these cookies may make certain features and services unavailable.<br /><br />Functional cookies. Functional cookies are used to record your choices and settings regarding our Services, maintain your preferences over time and recognize you when you return to our Services. These cookies help us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).<br /><br />Performance/analytical cookies. Performance/analytical cookies allow us to understand how visitors use our Services such as by collecting information about the number of visitors to the Services, what pages visitors view on our Services and how long visitors are viewing pages on the Services. Performance/analytical cookies also help us measure the performance of our advertising campaigns in order to help us improve our campaigns and the Services’ content for those who engage with our advertising. <br /><br />To find out more information about cookies, including information about how to manage and delete cookies, please visit  https://www.allaboutcookies.org/.<br /><br />We may use web beacons or similar technologies, which help manage content on the Website and in the Services by tracking what content is effective. These technologies may be used to track the online movements of customers, but in contrast to cookies, which are stored on a computer hard drive, these technologies are embedded in the Website or App.<br /> <br />We may also use web beacons in our HTML-based emails to let us know which emails recipients have opened. This allows us to gauge the effectiveness of certain communications and the effectiveness of our marketing campaigns. <br /><br />Surveys or Contests<br />We may provide you the opportunity to participate in surveys or contests on our Website or in connection with our Services.  If you participate, we will request certain Personal Information. The requested information typically includes contact information (such as name and email address) and demographic information.<br /><br />We may use this information to notify contest winners and to award prizes, to monitor traffic to our Services, to improve the Services, and to send participants an email newsletter. <br /><br />Additional information practices (and terms and conditions) may apply to any survey or contest, which will be made available with the survey or contest. Please carefully review any additional information provided. <br /><br />Public Feedback and Discussion Boards<br />If you choose to post messages to public message areas or leave feedback for others, that information may become available to anyone. We are not responsible for the use by others of the information you publicly disclose. Additionally, we may, but are not obligated to, collect the information you post in public message areas to resolve disputes, provide customer support and troubleshoot problems as permitted by law. <br /><br />Please be careful and closely consider disclosing any Personal Information in public message areas.</>),
    spanText36: "",
    spanText37: "",
    spanText38: (<>We may disclose aggregate, statistical, and deidentified data, which does not specifically identify any individuals, for any purpose.<br />We may also share Personal Information about you, in general:</>),
    text53: "4.  How We Disclose Your Information",
    text54: (<>• As necessary to provide the Services; <br />• With service providers;<br />• With our corporate affiliates and business partners; and <br />• For legal reasons or as required by law.</>),
    text55: "The purposes and ways that we may share Personal Information about you are described below in more detail.",
    spanText39: "",
    spanText40: "",
    spanText41: "The Mercer Club Partners",
    spanText42: (<><br />The Mercer Club engages in marketing and promotional activities with carefully screened brands, or, “Partners,” which we think will appeal to our customer base. From time to time, Partners may also be provided with non-personally-identifying or aggregate information demographic information of customers on our Services and statistical information about buying behavior, and Partners may be given opportunities to market to select segments of our customer base indirectly. When we share aggregate or non-personally identifiable customer data, we do so in a way that we believe cannot reasonably be linked with a customer’s Personal Information.<br /><br /></>),
    spanText43: "Service Providers",
    spanText44: (<><br />We may provide Personal Information to third parties for use in performing research and business functions (e.g., mailing, maintenance, security, data analytics, communications, CRM, database management services, credit card payment processing or data hosting) on our behalf. These service providers agree to use your Personal Information only in accordance with our instructions, with information used only as described in this Privacy Policy and for no other purpose than to provide the contracted-for services.<br /><br /></>),
    spanText45: "Corporate Affiliate Parties",
    spanText46: (<><br /></>),
    spanText47: "We may share some or all of your Personal Information with our affiliates (including a parent company, subsidiaries, joint venture partners or other companies that we control or that are under common control with us), in which case we will seek to require those affiliates to honor this Privacy Policy.",
    spanText48: "",
    spanText49: "",
    spanText50: "",
    spanText51: "",
    spanText52: "As Required by Law ",
    spanText53: (<><br />We may disclose Personal Information if we have a good-faith belief that doing so is required under applicable law, for example if we receive a subpoena or other judicial or administrative order or otherwise required by law. This may include responding to legal requests from jurisdictions outside of the United States, where we have a good faith belief that the response is required by law in that jurisdiction.<br /><br /></>),
    spanText54: "In Connection with Business Transactions",
    spanText55: (<><br />We may disclose Personal Information in certain corporate transactions, such as in connection with an actual or proposed merger, acquisition, or other sale of or transfer of all or part of our business or assets, including as part of a bankruptcy, liquidation, or other insolvency proceeding.  <br /><br />In the event of a change in ownership of The Mercer Club, or a merger with, acquisition by, or transfer or sale of all or a portion of our assets to another entity, we reserve the right to transfer all of your Personal Information, including email addresses and other information about you collected by us (in accordance with this policy), to that entity.<br /><br /></>),
    spanText56: (<>To Protect Rights<br /></>),
    spanText57: "Additionally, we may disclose Personal Information where we, in good faith, deem it appropriate or necessary to prevent violation of the Terms of Service or our other agreements; take precautions against liability; protect the rights, property, or safety of The Mercer Club, any individual, or the general public; maintain and protect the security and integrity of our Services or infrastructure; protect ourselves and our Services from fraudulent, abusive, or unlawful uses; investigate and defend ourselves against third-party claims or allegations; or assist government enforcement agencies.",
    spanText58: (<>5.  Third Party Websites<br /></>),
    spanText59: "In the event that that we provide links to other websites that we do not control, whether or not those other websites refer to our branding, this Privacy Policy does not apply to those other websites. Visitors to those websites are advised to carefully read the policies on those individual websites.",
    spanText60: (<>6.  Your Choices<br /></>),
    spanText61: (<>Accessing and Requesting Changes to Your Personal Information<br />If you are a customer of The Mercer Club, you may review and change your Personal Information through your customer account.  <br />If you do not have a customer account with The Mercer Club, or if you cannot access or change any of your Personal Information through your account, but you still wish to inquire about, access, correct, update or delete Personal Information that we may hold about you, please email us at  founders@themercerclubnyc.com. Please understand that, before responding to your request, we may ask you for additional information in order to verify your identity, or take other actions that we believe are appropriate in order to verify your identity.<br />Please also understand that we may not be obligated or able to alter or delete your Personal Information and may retain information to provide you with requested services or fulfill obligations to you, for security reasons, if we are required under applicable law or regulations, for internal business use or for other valid reasons. We are also not obligated to comply with requests that are unreasonably burdensome or expensive, or with requests that would interfere with the rights of another individual.  In some circumstances, we may charge a reasonable fee to fulfill your request.<br /><br /></>),
    spanText62: (<>Communications Preferences<br /></>),
    spanText63: (<>If you would like to change the types of communications you receive from us or how you receive communications from us, or if you would like to opt out of promotional communications, you may do so at any time by updating the communication preferences provided in your customer account. <br />If you do not have a customer account, you may also use the unsubscribe links and instructions that will be present in any promotional emails or other communications that we send. <br />Please understand that, even if you opt out of marketing or promotional communications, we may continue to send non-promotional communications such as confirmations of transactions, changes to the Services or other information about your use of the Services.</>),
    spanText64: (<>“Do Not Track” Settings<br /></>),
    spanText65: (<>Our Website and Services are not at this time configured to read or respond to “do not track” settings or signals in your browser headings.<br /><br /></>),
    spanText66: (<>Tailored Advertisements and Passive Data Collection<br /></>),
    spanText67: (<>The Mercer Club also partners with advertising companies to place our advertising on third-party websites that we believe will be of interest to you. As described elsewhere in this Privacy Policy, these advertising companies may collect information about your visits to our Website using cookies, web beacons and similar technologies, and these advertising companies may collect information over time and across other websites. In using tailored advertising, we comply with the Network Advertising Initiative (“NAI”) self-regulatory 2018 Code of Conduct, Digital Advertising Alliance (“DAA”) Self-Regulatory Principles for Online Behavioral Advertising (“OBA Principles”).  <br />To make choices about Interest-Based Ads from participating third parties, including to opt out of receiving behaviorally targeted advertisements from participating organizations, please visit the DAA’s or NAI’s consumer opt out pages, which are located at  https://www.networkadvertising.org/choices/,  https://optout.networkadvertising.org/ or  https://www.aboutads.info/choices/.  <br />You may also learn more about your choices with respect to data collection by third parties, including about opting out or changing your preferences, at those third parties’ websites. For Google, please see  www.google.com/privacy_ads.html, or you may have the option to opt out of Google&#x27;s use of cookies using the Google Analytics Opt-out Browser Add-on at  https://tools.google.com/dlpage/gaoptout/. Information about Facebook advertising may be available at  https://www.facebook.com/help/568137493302217. </>),
    spanText68: (<>7.  Security<br /></>),
    spanText69: (<>We use reasonable security measures to protect against the loss, unauthorized access, misuse, alteration and destruction of Personal Information under our control, both during the transmission and once we receive it. <br /><br />Although we make good faith efforts to maintain the security of such Personal Information, no method of transmission over the Internet or method of electronic data storage is 100% secure, and we cannot guarantee that the information will remain free from unauthorized access, use, disclosure, or alteration. While we work hard to ensure the integrity and security of our network and systems, we cannot guarantee that our security measures will prevent hackers or other unauthorized persons from illegally accessing or obtaining this information.</>),
    spanText70: "8.  Children’s Privacy",
    spanText71: (<><br />The Mercer Club and the Services are not intended for or directed toward children under 13 years of age, and children should not use the Services for any purpose unless they have the consent of, and are under the supervision of, a parent or guardian. We ask that individuals do not provide Personal Information through our Website or Services, and if we learn that we have collected or received Personal Information from a child under 13 years of age, we will delete that information <br /><br />Additionally, we may collect Personal Information from teenagers between the ages of 13 and 18, but only if such an individual is of legal age to enter into a binding contract under applicable law, or with the consent and supervision of a parent or legal guardians, as permitted by law. </>),
    spanText72: "",
    spanText73: (<>If you are the parent or legal guardian of a child under 13 years of age who has registered on the Website or App or you believe has otherwise provided Personal Information to The Mercer Club, please contact The Mercer Club at founders@themercerclubnyc.com to have the account terminated and information deleted.<br /><br />If you believe that we may have inadvertently collected any Personal Information about a child aged 13 years or younger, please contact us at founders@themercerclubnyc.com or as provided in the “Contact Us” section below.</>),
    spanText74: (<>9.  Notices to California Residents<br /></>),
    spanText75: (<>If you are a resident of the state of California, California’s “Shine the Light” law permits you to request information regarding the disclosure of your Personal Information by us to a third party for the third party&#x27;s direct marketing purposes. To make such a request, please send an email to founders@themercerclubnyc.com.<br /><br />In accordance with the California Consumer Privacy Act of 2018 (“CCPA”), please see the following summary of Personal Information that we have collected in the past twelve (12) months (preceding the effective date of this Privacy Policy), as well as the sources of that Personal Information, the purposes of collection, and third parties with who we have shared such Personal Information in the past twelve (12) months.  <br /><br />In addition, we may use or disclose any Personal Information that we collect as necessary to comply with applicable law or legal obligations as described in this Privacy Policy.<br /><br />Sale of Personal Information. We do not “sell” your Personal Information, as defined under the CCPA, and we have not sold your Personal Information in the past twelve (12) months (preceding the effective date of this Privacy Policy).<br /><br />California Residents’ Rights under the CCPA. Under the CCPA, California residents have certain rights regarding their Personal Information.  Subject to certain exceptions, California residents have or may exercise the following rights:</>),
    rightToRequestDel: (<>Right to Request Deletion of Personal Information. A California resident may request that a business delete their Personal Information. <br /><br />Right to Opt-Out of the Sale of Personal Information. A California resident has the right to opt-out of the sale of their Personal Information by a business.<br /><br />Right to Non-Discrimination for Exercise of Consumer Privacy Rights. A California resident has the right not to receive discriminatory treatment by a business for the exercise of privacy rights provided by the CCPA.<br /><br />To submit requests to The Mercer Club to exercise these rights, California residents may use the following methods:<br /><br />1)  Call us at +1 (954) 787-0304<br /><br />Please understand that we are only obligated to respond to verifiable consumer requests.  If we receive a request for information about you, we need to know that it is actually coming from you, or somebody legally authorized to act for you.<br /><br />We may implement authentication procedures that are appropriate to the nature of the personal information requested. We may also use any information that we have already collected about you in order to verify your request. Also, if we collect any personal information to verify your request, we will only use that information to verify your request.<br /><br />Please remember that we are only obligated to respond to a request for access twice within a 12-month period.</>),
    spanText76: (<>10.  Changes to this Privacy Policy<br /></>),
    spanText77: "We may change this Privacy Policy from time to time. The most recent version of the Privacy Policy will always be posted on the Website, with the effective date posted at the top of the Privacy Policy. We may revise and update this Privacy Policy if our practices change, as technology changes, or as we add new services or change existing ones. If we make material changes to our Privacy Policy or how we handle your Personal Information, or if we are going to use any Personal Information in a manner that is materially different from that stated in our Privacy Policy at the time we collected such information, we will try to notify you of such changes reasonably in advance. By using our Website or Services after the effective date, you are deemed to consent to our then-current Privacy Policy.",
    spanText78: (<>11.  Contact Us<br /></>),
    spanText79: "If you have questions, concerns or feedback regarding this Privacy Policy or our information practices, you can send an email to us at founders@themercerclubnyc.com",
    img_2589: "/img/img-2589@1x.png",
    faq: "FAQ",
    rentalPolicy: "Rental Policy",
    privacyPolicy2: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    line4: "/img/line-4-2@1x.png",
    browse: "Browse",
    rentalPolicy2: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text57: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions2: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy3: "Privacy Policy",
    membership: "Membership",
    spanText80: (<>Customer Service<br /></>),
    spanText81: "(954) 787-0304",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text59: "SIGN-UP FOR MEMBERSHIP",
    text60: "STAR WITH YOUR EMAIL ",
    theMercerClub: "THE MERCER CLUB",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    group8Props: group83Data,
    group179Props: group1797Data,
    login2Props: login24Data,
    component2212Props: component22124Data,
};

const group1798Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16436Data = {
    email: "Email",
};

const group16437Data = {
    email: "Password",
};

const maskGroup18Data = {
    group164Props: group16436Data,
    group1642Props: group16437Data,
};

const login25Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5-8@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup18Data,
};

const group16438Data = {
    email: "Email",
};

const group16439Data = {
    email: "Name",
};

const group16440Data = {
    email: "Password",
};

const maskGroup127Data = {
    group164Props: group16438Data,
    group1642Props: group16439Data,
    group1643Props: group16440Data,
};

const component22125Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-1@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup12Props: maskGroup127Data,
};

const TermsConditionsData = {
    termsConditions: "TERMS & CONDITIONS",
    tylerNixVzej0IepzkaUnsplash: "/img/tyler-nix-vzej0iepzka-unsplash@1x.png",
    text61: "LAST UPDATED:  (Effective January 1, 2020) ",
    text62: "ACCEPTING THESE TERMS",
    changes: "Changes",
    privacy: "Privacy",
    text63: "How To Access The Mercer Club Services",
    useOfTheProducts: "Use Of The Products",
    text64: "How to Pause a Membership Service",
    generalConditions: "General Conditions",
    howItWorks: "How It Works",
    text65: "Limitation Of Liability",
    couriers: "Couriers",
    text66: "Consent To Receive Periodic Messages",
    exportControl: "Export Control",
    indemnity: "Indemnity",
    assignment: "Assignment",
    filtering: "Filtering",
    taxes: "Taxes",
    text67: "Waiver; Severability",
    delays: "Delays",
    entireAgreement: "Entire Agreement",
    text68: "Notice to New Jersey Consumers",
    text69: "INFORMATION OR COMPLAINTS",
    choiceOfLaw: "Choice of Law",
    text70: "Arbitration Agreement",
    text71: "Restrictions that Apply",
    text72: "Disclaimer Of Warranties",
    text73: "Additional Terms for Digital Gift Cards",
    expirationAndFees: "Expiration and Fees",
    text74: "Limitation Of Liability",
    text75: "Customer Service; Check Balance",
    text76: "Lost, Stolen, or Damaged Cards; Unauthorized Use",
    redemptionAndUse: "Redemption and Use",
    text77: "How to Cancel your Account or a Membership Service",
    howPaymentsWork: "How Payments Work",
    text78: "Information Provided By Customers",
    text79: "Payment Authorization",
    text80: "How Recurring Billing and Auto-renewal Work",
    delivery: "Delivery",
    text81: "The Mercer Club Partners",
    text82: "Returns, Extensions, Shipping, and Lost Items",
    text83: "Product and Service Descriptions",
    costOfTheService: "Cost Of The Service",
    place: "Reserve",
    membershipServices: "Membership Services",
    place2: "Sales",
    lateFees: "Late Fees",
    text84: "The Mercer Club Packaging",
    welcomeToTheMerce: (<>Welcome to The Mercer Club! This Terms of Service agreement (“Terms”) is between you (“you” or “your”) and The Mercer Club, Inc. (“we,” “our,” “us,” or “The Mercer Club”), and governs your access to and use of our website located at  themercerclubnyc.com (and any successor site thereto) (the “Site”), our mobile application (the “App”) and related services, including The Mercer Club’s product rental and sale services (together with the Site, the App, and the Content (as defined below), the “Services”). These Terms also apply to in-store and hotel rentals and sales, which are part of the Services.<br />Please review these Terms carefully; by accessing or using any of the Services, including by creating an Account (as defined below), you acknowledge that you have read, understood, and agreed to be bound by these Terms.<br />These Terms are a legally binding contract between you and The Mercer Club. By accepting these Terms, you represent that you are an individual of legal age to form a binding contract or, if you are not, that you have obtained parental or guardian consent to enter into these Terms. Under no circumstances may you access or use the Services if you are under thirteen (13) years old. Your access to and use of the Services in any way also means that you agree to all of these Terms, and these Terms will remain in effect while you access or use the Services. These Terms incorporate by reference any additional terms and conditions posted by The Mercer Club through the Site and/or the App, or otherwise made available to you by The Mercer Club (the “Additional Terms”), and you understand and agree that by accessing or using any of our Services, you agree to also comply with all Additional Terms.<br />EXCEPT FOR LIMITED CIRCUMSTANCES DESCRIBED IN SUBCLAUSE (c) OF THE ARBITRATION AGREEMENT BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION, OR TO A TRIAL BY JURY.<br />The Services are controlled or operated (or both) from the United States, and are not intended to subject The Mercer Club to any non-U.S. jurisdiction or law. You may not use the Services to rent or purchase Products outside of the United States. Any use of the Site is at your own risk, and you must comply with all applicable laws, rules, and regulations in doing so. We may limit the Service’s availability at any time, in whole or in part, to any person, geographic area or jurisdiction that we choose.</>),
    weMayAtAnyTime: (<>We may, at any time and without liability, suspend, modify, or discontinue all or part of the Services (including access to the Site via any third-party links). We encourage you to check our Site periodically for the most current Service offerings. Similarly, we may update the Content, including descriptions and specifications about Products or Services, and we reserve the right to remove any Content (as described below) at any time, for any reason (including, but not limited to, if someone alleges you contributed Content in violation of these Terms), in our sole discretion, and without notice. The Mercer Club will have no liability for any change in the Services, or any suspension or termination of your access to Services.<br />We also reserve the right to change these Terms at any time by notifying you of such changes by any reasonable means, including by posting the revised Terms on the Site. The “Last Updated” legend above indicates when these Terms were last changed. At our discretion, we may also notify you of certain changes by sending you an email to the email address associated with your Account. You are responsible for providing us with your current email address when you create an Account, and, if your email address changes, for updating your Account information to reflect your new email address. Your continued use of the Services, including by renting or purchasing Products (as defined below) from us, following any changes to these Terms will indicate your acknowledgement of such changes and agreement to be bound by the revised Terms. Any changes to the Terms will not apply to any dispute between you and us that arises prior to the date on which we posted the revised Terms incorporating such changes, or otherwise notified you of such changes. If you don’t agree with the new Terms, you may no longer access or use the Services. </>),
    text85: "Your submission of information through the Services is governed by The Mercer Club’s Privacy Policy. To review the current The Mercer Club Privacy Policy, please click  here.",
    asNotedAboveYou: (<>As noted above, you must be 13 years or older to access or use the Services. To use the Services, you may be required to sign up for an account (your “Account”), select a password and username (your “The Mercer Club User ID”), and provide us with certain information or data, such as your contact information. You promise to provide us with accurate, complete, and up-to-date information, and to maintain and update such information. You may not select as your The Mercer Club User ID a name that you don’t have the right to use, or another person’s name with the intent to impersonate that person. We may reject, or require that you change, any The Mercer Club User ID, password or other information that you provide to us in registering for an Account. You may not transfer your Account to anyone else without our prior written permission. You may only register one Account per Paid Service (as defined below).<br />Additionally, you may be able to access certain parts or features of the Services by using your account credentials from other services operated by third parties (each, a “Third Party Account”), such as those offered by Google and Facebook. By using the Services through a Third Party Account, you authorize us to access information from such Third Party Account for use in connection with the Services. <br />You may only use the Services and Products made available to you for your own personal, non-commercial use, and not on behalf of or for the benefit of any third party, and only in a manner that complies with all laws that apply to you. If your use of the Services or Products is prohibited by these Terms or any Additional Terms or applicable laws, then you are not authorized to use the Services or Products. You are solely responsible for any use by you of any Services or Products in violation of these Terms, any Additional Terms, or applicable law.<br />You may not share your Account (including your The Mercer Club User ID or password) with anyone, and you must protect the security of your Account (including your The Mercer Club User ID and password) and any other access tools or credentials. You’re solely responsible for any activity associated with your Account, including all charges incurred from use of the Services with your Account.<br />We may, for any reason, limit or restrict your access to or use of the Services, including, but not limited to, refusing to fulfill any order that you place with us or restricting orders placed under a single customer Account, payment card, or billing or shipping address. We reserve the right to limit, cancel, or prohibit any use of the Services for any reason in our sole discretion, including but not limited to availability and geographic concerns, or if we determine or suspect that you are using the Services for fraudulent or commercial purposes or for any other purposes in violation of these Terms or any Additional Terms.</>),
    youAgreeToTreatT: "You agree to treat the Products with great care. You are responsible for any loss, destruction, or damage to the Products for any reason (other than normal wear and tear), including due to theft, loss, mysterious disappearance, fire, major stains, or any other cause. Normal wear and tear means minor stains, rips, missing beads, stuck zippers, or other minor damage that is covered by the insurance you paid for with your rental of the applicable Product. If you return a Product that is damaged beyond normal wear and tear, then you hereby authorize us (or our third-party payment processor) to charge your Payment Method for the price for repairing or replacing the Product, as determined in our discretion, up to the full Retail Value for the Product.",
    weMayButAreNot: "We may, but are not obligated to, permit you to put your Membership Service on hold for one or more Billing Periods (a “Pause”). If you wish to Pause your Membership Service, you must return each Product still in your possession by your next Billing Date, in accordance with these Terms, for the Pause to go into effect. If you do not return each Product in your possession prior to your next Billing Date, your Membership Service will not be Paused and you will continue to be charged for the Membership Service. Once Paused, we will provide notice to you on or before the date that your Membership Service reactivates. You can reactivate your Membership Service during a Pause at any time prior to the set date of reactivation, and that the date on which you manually reactivate your Membership Service will become your new Billing Date. Please see our  FAQ Section for more information regarding Pauses (including how to initiate a Pause or reactivate your Membership Service).",
    theFollowingAdditi: "The following additional terms and conditions apply to the sale, use, and redemption of The Mercer Club physical gift cards and electronic-only “digital” gift cards and gift credits (collectively, “Gift Cards”). Purchase and use of a Gift Card constitutes acceptance of these terms. In addition to the terms in this Section, the purchase, use, and redemption of Gift Cards is considered part of the Services subject to these Terms generally.",
    ifYouHaveAnAccou: (<>If you have an Account, you may be eligible to participate in the The Mercer Club Refer a Friend Program (the “Refer a Friend Program”). More details about the Refer a Friend Program can be found in our  FAQ Section. <br />Under the Refer a Friend Program, The Mercer Club may provide you with the opportunity to send invites containing a unique referral code (each, an “Invitation”) to others to use The Mercer Club’s Paid Services at a promotional rate (each, a “Referral”). If your Referral is a qualified referral, he or she will receive the promotion indicated on the Invitation when he or she redeems the Invitation, and we may, but are not required to, also provide you a referral credit toward future Paid Services (a “Referral Credit”). Please see our  FAQ Section for more details regarding requirements for qualified referrals.<br />Referral Credits will be reflected in your Account after the requirements for a qualified referral have been met. You may be required to pay taxes, and we may be required to withhold taxes, on the value of redeemed Referral Credits if the value exceeds certain thresholds. We may, in our sole discretion, place limitations or caps on the maximum amount of Referral Credits that you can receive in any period of time. Please see our  FAQ Section for limitations or caps on Referral Credits.</>),
    toTheFullestExten: "TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT, CONTRACT, STRICT LIABILITY, OR OTHERWISE) SHALL ANY OF THE THE MERCER CLUB PARTIES (AS DEFINED BELOW) BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING DAMAGES FOR LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA, LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, (B) ANY SUBSTITUTE PRODUCTS, SERVICES OR TECHNOLOGY, (C) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER OF (I) ONE-HUNDRED ($100) U.S. DOLLARS OR (II) THE AMOUNTS PAID BY YOU TO THE MERCER CLUB IN CONNECTION WITH THE SERVICES IN THE TWELVE (12)-MONTH PERIOD PRECEDING THE FIRST EVENT GIVING RISE TO A CLAIM OR (D) ANY MATTER BEYOND OUR REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL OR CERTAIN OTHER DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU. THIS LIMITATION OF LIABILITY DOES NOT APPLY TO NEW JERSEY RESIDENTS OR TRANSACTIONS. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, THE THE MERCER CLUB PARTIES DO NOT MAKE ANY EXPRESS OR IMPLIED WARRANTIES OR REPRESENTATIONS WITH RESPECT TO THE SERVICES AND THE THE MERCER CLUB PARTIES SHALL NOT BE LIABLE FOR ANY INTERRUPTIONS OR ERRORS RELATED THERETO. ",
    theMercerClubMay: "The Mercer Club may from time to time engage third-party couriers (“Couriers”) to facilitate delivery of Products. Couriers are independent contractors and not employees, partners, agents, joint ventures, or franchisees of The Mercer Club. The Mercer Club shall not be liable or responsible for any delivery services provided by Couriers, or any errors or misrepresentations made by any of them. If you opt to have Products delivered by Courier, you agree to bear responsibility for receipt of Products shipped to the delivery location specified at time of check out. The Mercer Club highly recommends that you provide a secure location where you can physically receive Product(s) (including from a Courier), and The Mercer Club does not bear liability for Products left unattended, by you, a Courier, or otherwise. You hereby acknowledge that The Mercer Club does not supervise, direct, control, or monitor a Courier’s provision of services. Any interactions or disputes between you and a courier are solely between you and that courier. The Mercer Club and its licensors shall have no liability, obligation or responsibility for any interaction between you and any courier.",
    byUsingTheService: `By using the Services, you consent to receiving communications from us, including informational text messages (such as for purposes of notifying you about the status of your order, sending you reminders, facilitating secondary authentication, and providing other transactional information) to the phone number that you provide by any means, including through an automated telephone number dialing system. You represent and warrant that you are the owner of the phone number that you provide when you create an Account. Standard text messaging and data rates charged by your mobile carrier may apply to the text messages we send you, and any and all such charges, fees, taxes, or costs are your sole responsibility. You may opt out of receiving communications by following the unsubscribe procedures we provide to you. In the case of text messages, you may opt out by replying "STOP" to a text message you receive from us or by emailing help@renttherunway.com. You acknowledge that opting out of receiving communications may impact your use of the Services. Please note also that you will need to opt out of communications for each Service that you sign up for. You agree to indemnify and hold The Mercer Club harmless from and against any and all claims, liabilities, damages (actual and consequential), losses and expenses (including attorneys’ fees) arising from or in any way related to your breach of the foregoing.`,
    youAreResponsible: "You are responsible for complying with United States export controls and for any violation of such controls, including any United States embargoes or other federal rules and regulations restricting exports. You represent, warrant and covenant that you are not (a) located in, or a resident or a national of, any country subject to a U.S. government embargo or other restriction, or that has been designated by the U.S. government as a “terrorist supporting” country; or (b) on any of the U.S. government lists of restricted end users",
    youAgreeToIndemni: "You agree to indemnify and hold the The Mercer Club Parties harmless from and against any and all claims, liabilities, damages (actual and consequential), losses, fees, and expenses (including attorneys’ fees) arising from or in any way related to any claims, suit, action, or demand (“Claims”) relating to (i) your access to and use of the Services (including any actions taken by a third party using your account) and any Products rented from us (including any failure to return such Products), (ii) your User Submissions, (iii) your violation of these Terms, or any applicable law, rules, or regulation, (iv) your infringement, misappropriation, or other violation of any third-party right, including any intellectual property right or publicity, confidentiality, other property, or privacy right, and (v) any dispute or issue between you and any third party, including any Courier, Product merchant, or other third party. In the event of such Claim, we will attempt to provide notice of the Claim to the contact information we have for your account (provided that failure to deliver such notice shall not eliminate or reduce your indemnification obligations hereunder).",
    youMayNotAssign: "You may not assign, delegate or transfer these Terms or your rights or obligations hereunder, or your Account, in any way (including by operation of law or otherwise) without The Mercer Club's prior written consent. We may transfer, assign, or delegate these Terms and our rights and obligations (in whole or in part) without your consent or notice to you.",
    spanText: "We hereby notify you that parental control protections (such as computer hardware, software, or filtering services) are commercially available that may assist you in limiting access to material that is harmful to minors. Information identifying current providers of such protections is available from  ",
    spanText2: "https://en.wikipedia.org/wiki/Comparison_of_content-control_software_and_providers",
    spanText3: ". Please note that The Mercer Club does not endorse any of the products or services listed on such site.",
    youWillBeResponsi: "You will be responsible for paying, withholding, filing, and reporting all federal, state, and local goods and services taxes, duties, customs, duties, levies, and other governmental assessments associated with your activity in connection with the Services (including any purchase or rental of any Products and Membership Services), provided that The Mercer Club may, in its sole discretion, do any of the foregoing on your behalf or for itself as it sees fit.",
    theFailureOfEithe: "The failure of either you or us to exercise, in any way, any right herein shall not be deemed a waiver of any further rights hereunder. If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated, to the minimum extent necessary, so that these Terms shall otherwise remain in full force and effect and enforceable. ",
    thereMayBeDelays: "There may be delays, omissions, or inaccuracies in the Services, including the Content. The Services may become unavailable due to maintenance or malfunction of computer equipment or other reasons. You agree that The Mercer Club is not, and will not be, liable for any such delays, omissions, inaccuracies, or unavailability.",
    youAndTheMercerC: "You and The Mercer Club agree that these Terms are the complete and exclusive statement of the mutual understanding between you and The Mercer Club, and that these Terms supersede and cancel all previous written and oral agreements, communications, and other understandings relating to the subject matter of these Terms. You hereby acknowledge and agree that you are not an employee, agent, partner, or joint venture of The Mercer Club, and you do not have any authority of any kind to bind The Mercer Club in any respect whatsoever.",
    ifYouAreAConsume: "If you are a consumer residing in New Jersey, the following provisions of these Terms do not apply to you (and do not limit any rights that you may have) to the extent that they are unenforceable under New Jersey law: (a) the disclaimer of liability for any indirect, incidental, consequential, special, exemplary, or punitive damages of any kind (for example, to the extent unenforceable under the New Jersey Punitive Damages Act, New Jersey Products Liability Act, New Jersey Uniform Commercial Code, and New Jersey Consumer Fraud Act; (b) the limitations of liability for lost profits or loss or misuse of any data (for example, to the extent unenforceable under the New Jersey Identity Theft Protection Act and New Jersey Consumer Fraud Act); (c) application of the limitations of liability to the recovery of damages that arise under contract and tort, including negligence, strict liability, or any other theory (for example, to the extent such damages are recoverable by a consumer under New Jersey law, including the New Jersey Products Liability Act); (d) the requirement that you indemnify the The Mercer Club Parties (for example, to the extent the scope of such indemnity is prohibited under New Jersey law); and (e) the New York governing law provision (for example, to the extent that your rights as a consumer residing in New Jersey are required to be governed by New Jersey law).",
    ifYouHaveAnyQues: "If you have any questions or complaints regarding the Services or about these Terms, you may contact us at  founders@themercerclubnyc.com. For any questions related to Services or Products, please contact us at  founders@themercerclubnyc.com. Please note that email communications will not necessarily be secure; accordingly you should not include credit card information or other sensitive information in your email correspondence with us. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.",
    text86: "Site © 2019 The Mercer Club, Inc. unless otherwise noted. All rights reserved.",
    text87: "These Terms are governed by and will be construed under the laws of the United States (including federal arbitration law) and the laws of the State of New York, without regard to the conflicts of laws provisions thereof.",
    pleaseReadTheFoll: "Please read the following Arbitration Agreement carefully (subsections (a) though (f) below will be referenced herein as the “Arbitration Agreement”) because it requires you to arbitrate certain disputes and claims with The Mercer Club and limits the manner in which you can seek relief from The Mercer Club. Both you and The Mercer Club acknowledge and agree that for the purposes of any dispute arising out of or relating to the subject matter of these Terms, The Mercer Club's officers, directors, employees, and independent contractors (“Personnel”) are third-party beneficiaries of these Terms, and that upon your acceptance of these Terms, Personnel will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as the third-party beneficiary hereof.",
    weAndOrOurSuppli: (<>We and/or our suppliers and licensors own the Products and Services (including related software, code, data, and information relating thereto), and proprietary methods and systems used to provide the Services (collectively, “Our Property”), the materials, text, graphics, data, articles, photos, images, illustrations, information, and other content made available or displayed by us through the Services (collectively, “Our Materials”), and certain of the trademarks, service marks, names, and logos, including, but not limited to, THE MERCER CLUB (“Marks,” and together with Our Property and Our Materials, collectively, “Content”). You agree and acknowledge that the Content is: (i) protected by copyrights, (ii) subject to other intellectual property and proprietary rights and laws, and (iii) owned by us or our suppliers and licensors. Except as expressly permitted in these Terms, Content may not be copied, modified, reproduced, republished, posted, transmitted, sold, offered for sale, redistributed, or otherwise used in any way without our prior written permission and the prior written permission of our applicable licensors. <br />Subject to these Terms, and solely for so long as you are permitted to use the Services, we grant to you a non-transferable, non-sublicensable, non-exclusive, revocable, limited right and license to (a) install, access, and use our App on any single, compatible, personal device that you own or control, and (ii) access and use the other aspects of the Services, in each case solely for your own personal, noncommercial use. The App is licensed (not sold) to you. If you fail to comply with any of the terms or conditions of these Terms, you must immediately cease using the App and remove (that is, uninstall and delete) the App from your mobile device. You promise to abide by all copyright notices, trademark rules, information, and restrictions contained in or attached to any Content, and that you won’t use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell, commercialize, or otherwise exploit for any purpose any Content. You may not modify, publish, transmit, participate in the transfer or sale of, reproduce (except as expressly provided in these Terms), create derivative works based on, or otherwise exploit any of the Content or Services. You may not use our trade names, trademarks, service marks, or logos in connection with any product or service that is not ours, or in any manner that is likely to cause confusion. Nothing contained on the Site should be construed as granting any right to use any trade names, trademarks, service marks, or logos without the express prior written consent of the owner.</>),
    text88: "You represent, warrant, and agree that you will not post, upload, share, store, provide, or otherwise make available any User Submission, otherwise access or use the Content, Products or Services or interact with the Services in a manner that:",
    infringesMisappr: (<>• Infringes, misappropriates, or otherwise violates the intellectual property rights or any other rights of anyone else (including The Mercer Club);<br />• Violates any law, rules, or regulation, including, without limitation, any applicable export control laws or privacy laws;<br />• Is dangerous, harmful, fraudulent, deceptive, threatening, harassing, defamatory, libelous, tortious, obscene, indecent, pornographic, vulgar, unlawful, hateful, or threatening to any group defined by race, religion, gender, national origin, or sexual orientation or otherwise offensive or objectionable, or is for any commercial purpose or is used for any purpose not reasonably intended by The Mercer Club;<br />• Jeopardizes the security of your or any other The Mercer Club user’s Account (such as by allowing someone else to log in to your Account);<br />• Attempts, in any manner, to obtain the The Mercer Club User ID, password, Account, or other security information of or from any other The Mercer Club user or impersonates any other person, including but not limited to a The Mercer Club representative;<br />• Violates the security of any computer network, or cracks any passwords or security mechanisms or encryption codes, or introduces viruses, worms, Trojan horses, spyware, or other computer code, file, or program that is potentially harmful or invasive or intended to damage or hijack the operation of, or to monitor the use of, any hardware, software, or equipment;<br />• Runs a “Maillist,” “Listserv,” any form of auto-responder, or “spam” on the Services, or any processes that run or are activated while you are not logged into the Services, or that otherwise interferes with the proper working of the Services (including by placing an unreasonable load on the Services’ infrastructure);<br />• Restricts or prohibits any other person from using the Services;<br />• Frames or mirrors any portion of the Services, or otherwise incorporates any portion of the Services into any product or service, without our express prior written consent;<br />• Removes or obscures any copyright, trademark, or other proprietary notice from the Services;<br />• Uses any robot, spider, site search/retrieval application, or other manual or automatic device to retrieve, index, “scrape,” “data mine,” or otherwise gather Site content, or reproduce or circumvent the navigational structure or presentation of the Site, without our express prior written consent. Notwithstanding the foregoing, and subject to compliance with any instructions posted in the robots.txt file located in the Site’s root directory, The Mercer Club grants to the operators of public search engines permission to use spiders to copy materials from the Site for the sole purpose of (and solely to the extent necessary for) creating publicly available, searchable indices of such materials, but not caches or archives of such materials. The Mercer Club reserves the right to revoke such permission either generally or in specific cases, at any time and without notice;<br />• Systematically copies or stores any portion of the Content; <br />• Decompiles, reverse engineers, disassembles or otherwise attempts to obtain the source code or underlying ideas or information of or relating to the Products or Services, except to the extent that such restriction is expressly prohibited by applicable law; <br />• Displays material that exploits children under 18 years of age or posts, collects, or discloses any personal information (including names) or private information about such children; or<br />• Posts or transmits any unsolicited advertising, promotional materials, or any other forms of solicitation, including without limitation solicitations of credit card numbers, solicitations for sponsors, or promotion of raffles or contests or any other businesses or services.</>),
    anythingThatYouPo: (<>Anything that you post, upload, share, store, provide, or otherwise make available through the Services is a “User Submission.” We do not guarantee any confidentiality with respect to your User Submissions, and they may be viewable by others. You are solely responsible for all User Submissions that you submit or otherwise provide to the Services. You represent that (a) all of your User Submissions are accurate, complete, up-to-date, and in compliance with these Terms and all applicable laws, rules, and regulations, and (b) you own or have the necessary rights, licenses, consents, and permissions, without the need for any permission from or payment to any other person or entity, to exploit and to authorize us to exploit your User Submissions in all manners contemplated by these Terms. You waive all moral rights in User Submissions which may be available to you in any part of the world and confirm that no such rights have been asserted. No User Submissions will be subject to any obligation, whether of confidentiality, attribution or otherwise, on our part and we will not be liable for any use or disclosure of any User Submissions.<br />In addition, if you provide to us any ideas, proposals, suggestions, or other materials (“Feedback”), whether related to the Services or otherwise, such Feedback will be deemed a User Submission, and you hereby acknowledge and agree that such Feedback is not confidential, and that your provision of such Feedback is gratuitous, unsolicited, and without restriction, and does not place The Mercer Club under any fiduciary or other obligation.<br />You hereby grant to The Mercer Club and our affiliates a perpetual, non-exclusive, irrevocable, fully-paid, royalty-free, sub-licensable (through multiple tiers), and transferable (in whole or part) worldwide license to use, edit, truncate, aggregate, reproduce, transmit, display, exhibit, distribute, prepare, index, comment on, modify, create derivative works of, display, perform, and otherwise fully exploit User Submissions in connection the Services and our (and our successors’ and assigns’) businesses, including without limitation for promoting, marketing, advertising, and redistributing part or all of the Site or the Services (and derivative works thereof) in any media formats (whether now existing or hereafter created or discovered) and through any media channels, whether now existing or hereafter created or discovered (including, without limitation, third-party websites and feeds). <br />We have the right, but not the obligation, to monitor, scan, intercept, review, analyze, store, alter, or remove any information (including all User Submissions received from you), and to monitor, review or analyze your access to or use of the Services, in each case, by manual, automated or other means, and in each case for any purpose, including such purposes as may be described in the Privacy Policy. We may take appropriate action against you or your User Submissions if you violate our rights or the rights of any third party or any other provision of these Terms. This may include, but is not limited to, removing or modifying User Submissions, terminating your account, and/or reporting you to law enforcement authorities. You acknowledge that all Content, including User Submissions, accessed by you while using the Services is at your own risk and you will be solely responsible for any damage or loss to you or any other party resulting therefrom.</>),
    youMayNotRedeemI: (<>You may not redeem Invitations or earn Referral Credits by (i) promoting your Invitation (or its unique referral code) through paid marketing, such as search engine or social media marketing (e.g., Facebook, AdWords, Yahoo), (ii) posting your Invitation (or its unique referral code) on any public forum or coupon site where you are not the primary content owner (e.g., you may post a referral link on your personal social media account, but you may not post it on a site like RetailMeNot), (iii) using the Services in violation of these Terms, or (iv) violating any other restriction that we may impose on participants in the Refer a Friend Program.<br />You may not obtain any cash or money in exchange for Referral Credits. You are responsible for notifying The Mercer Club if you believe the number of Referral Credits in your Account is incorrect.<br />The Mercer Club reserves the right to modify, suspend or terminate the Refer a Friend Program, in part or in whole, at any time, for any reason, or, upon reasonable notice to you (including by email), to void or remove Referral Credits from an Account at any time. All Referral Credits will be voided immediately upon termination of these Terms or if you Cancel your Account. </>),
    neitherTheMercerC: (<>Neither The Mercer Club nor its licensors, suppliers, partners, parent, subsidiaries, or affiliated entities, and each of their respective officers, directors, members, employees, consultants, contract employees, representatives, and agents, and each of their respective successors and assigns (The Mercer Club and all such parties together, the “The Mercer Club Parties”) make any representations or warranties concerning the Services, including without limitation regarding any content contained in or accessed through the Services or any Products, and the The Mercer Club Parties will not be responsible or liable for the accuracy, copyright compliance, legality, or decency of material contained in or accessed through the Services or any claims, actions, suits procedures, costs, expenses, damages, or liabilities arising out of or in any way related to your participation in or use of the Services. We make no warranty that the Products or Services will meet your requirements, or that the Services will be uninterrupted, timely, secure, or error free; nor do we make any warranty as to the results that may be obtained from the use of the Products, or Services, or that defects in the Products or Services will be corrected. The Services may become unavailable due to maintenance or malfunction of computer equipment or other reasons. You understand and agree that you will be solely responsible for any damage to your computer or loss of data that results from the download of any material in any way related to the Services and/or our Content. No advice or information, whether oral or written, obtained by you from us through the Services or otherwise will create any warranty, representation, or guarantee not expressly stated in these Terms.<br />TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, THE SERVICES, PRODUCTS, CONTENT, AND ANY THIRD PARTY MATERIALS ARE PROVIDED BY THE MERCER CLUB (AND ITS LICENSORS AND SUPPLIERS) ON AN “AS-IS,” “WHERE IS,” AND “AS AVAILABLE” BASIS, AND THE MERCER CLUB HEREBY DISCLAIMS ALL REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</>),
    digitalGiftCardsA: "Digital Gift Cards are only issued electronically; no physical card will be provided. The digital Gift Card number will be delivered to the recipient’s email address that the purchaser provides at time of purchase of the digital Gift Card. Purchaser is responsible for providing an accurate and deliverable recipient email address. Recipient will usually receive a digital Gift Card via email within 24 hours, or on the delivery date the purchaser chooses. Digital Gift Cards may be redeemed by providing the digital Gift Card number at the time of checkout online on our Services or at a The Mercer Club retail location.",
    text89: "Gift Cards do not expire and are not subject to any fees. Gift Cards are not redeemable or exchangeable for cash (except as required by law). Gift Cards cannot be reloaded and are not refundable. Gift Cards cannot be transferred for value.",
    inAdditionToTheG: "IN ADDITION TO THE GENERAL “LIMITATIONS OF LIABILITY” SECTION SET FORTH BELOW, IN THE EVENT THAT THE MERCER CLUB IS FOUND LIABLE TO YOU FOR A CLAIM ARISING FROM A GIFT CARD, YOUR SOLE AND EXCLUSIVE REMEDY WILL BE TO RECOVER ACTUAL AND DIRECT DAMAGES WHICH SHALL NOT EXCEED THE LAST BALANCE HELD ON YOUR GIFT CARD.",
    text90: "Please see our  FAQ Section for assistance regarding Gift Cards (including on how to check Gift Card balance).",
    youShouldTreatYou: "You should treat your Gift Card like cash and protect it accordingly. Title to and risk of loss for Gift Cards passes to the purchaser upon sale. The Mercer Club reserves the right to refuse to accept Gift Cards that The Mercer Club believes were fraudulently or illegally obtained. The Mercer Club is not responsible if a Gift Card is lost, stolen, destroyed, damaged, or used without permission. Gift Cards will be replaced if lost, stolen, or damaged only with proof of purchase and only for the value shown on The Mercer Club’s records. The Mercer Club is not responsible if your Gift Card is used without your permission.",
    giftCardsMayBePu: "Gift Cards may be purchased online or through participating The Mercer Club retail locations. Gift Cards are redeemable only for eligible Services and merchandise through our Services or at The Mercer Club retail locations. Limits may apply to Gift Card redemption and use at The Mercer Club’s discretion, and as stated in the Services, at retail locations, or on the Gift Card packaging. A Gift Card cannot be used to purchase other Gift Cards. When a Gift Card is redeemed, the value of the rental or purchase plus any shipping/handling fees and sales tax will be deducted from the currently available Gift Card balance.",
    anyFreeTrialOrOt: (<>Any free trial or other promotion that provides access to a Paid Service must be used within the specified time of the trial. At the end of your free trial or promotion, you will be signed up to use the applicable Paid Service and charged in accordance with these Terms, unless you Cancel the Paid Service in accordance with these Terms. Please note that any payment terms presented to you in the process of using or signing up for a free trial or other promotion are deemed part of these Terms.<br />Any sweepstakes, contests, raffles, surveys, games, or similar promotions (collectively, “Promotions”) made available through the Services may be governed by rules that are separate from this Agreement. If you participate in any Promotions, please review the applicable rules, as well as our  Privacy Policy. If the rules for a Promotion conflict with this Agreement, the Promotion rules will govern.</>),
    youMayTerminateYo: (<>You may terminate your Account or your Membership Service (“Cancel”) at any time. If you Cancel your Membership Service, you may use the Membership Service until the end of your then-current Billing Period and your membership will not be renewed after the expiration of your then-current Billing Period. You must return all Products in your possession in accordance with these Terms no later than the expiration of your then-current Billing Period or the return date in the applicable online invoice (whichever is earlier) to avoid incurring additional charges, including late fees. Please see our  FAQ Section for more information regarding how to Cancel your Account or your Membership Service.  <br />Please note that you will not receive any refunds for amounts already paid for the Membership Services, and you will still be responsible for payment of any fees or charges (including, without limitation, all Rental Fees) incurred by you prior to termination of your Membership Service. Membership Services cannot be terminated before the end of the Billing Period for which you have already paid, and except as expressly provided in these terms, The Mercer Club will not refund any fees that you have already paid.<br />The Mercer Club is also free to suspend, limit, or terminate your access to or use of the Services or your Account, for any reason in our discretion, including your breach of these Terms.<br />The following provisions survive expiration or termination of these Terms (or your Account):  “Changes,” “Late Fees,” “The Mercer Club Packaging,” “Returns, Extensions, Shipping and Lost Items,” “Your Content,” “Use Restrictions,” “Use of your Content,” “Limitation of Liability,” “Disclaimer of Warranties,” “Indemnity,” “Assignment,” “Choice of Law,” “Arbitration Agreement,” “Taxes,” “Waiver; Severability,” and “Entire Agreement.”</>),
    whenYouPlaceARen: (<>When you place a rental order for a Product, you hereby authorize The Mercer Club to charge your payment card or other payment instrument (“Payment Method”) for the Rental Fee. You must ensure that at all times your Payment Method is valid and up-to-date. You are responsible for providing complete and accurate billing and contact information to The Mercer Club and notifying The Mercer Club of any changes to such information. The Mercer Club will charge your Payment Method the amount of the Rental Fee immediately upon your rental order. A reservation of a Product through the Services is an order for the rental of that Product, regardless of how far in advance that Product is reserved. In addition, at the time of your rental order for a Product, you hereby authorize The Mercer Club to charge your Payment Method for an amount up to the Retail Value of the Product set forth on the applicable Service plus applicable sales taxes; provided that The Mercer Club will only charge your Payment Method for an amount that is greater than the Rental Fee as described below and in the Cost of Services section above. Rental Fees exclude all federal, state, and local taxes, goods and service tax, fees, customs, duties, levies, and other governmental assessments, all of which shall be paid by you directly or, if paid by The Mercer Club, shall be paid by you to The Mercer Club in connection with your rental order.   <br />We use a third-party payment processor (the “Payment Processor”) to bill you for any Paid Services through a payment account linked to your account (your “Billing Account”). By choosing to use Paid Services, you agree to pay us, through the Payment Processor, all charges at the prices then in effect for any use of such Paid Services in accordance with the applicable payment terms, and you authorize us, through the Payment Processor, to charge your chosen Payment Method. You agree to make payment using that selected Payment Method, but if the Payment Processor is not able to charge your preferred Payment Method, you authorize us to use any Payment Method stored on record for your Billing Account. We reserve the right to suspend or cancel a rental order or terminate your access to the Services in the event that we are unable to successfully charge the provided Payment Method. We are not responsible for errors by the Payment Processor, and we reserve the right to correct any errors or mistakes that we or the Payment Processor make(s) even if we have or our Payment Processor has already requested or received payment. If we, through the Payment Processor, do not receive payment from you, you agree to pay all amounts due on your Billing Account upon demand.  </>),
    youMustProvideCur: "You must provide current, complete, and accurate information for your Billing Account. You must promptly update all information to keep your Billing Account current, complete, and accurate (such as a change in billing address, credit card number, or credit card expiration date). If your Payment Method is canceled for any reason (e.g., for loss or theft) or if you become aware of a potential breach of security, such as the unauthorized disclosure or use of your User ID or password, you must promptly notify us and update your Payment Method. Changes to such information can be made in your  account settings. IF YOU FAIL TO PROVIDE ANY OF THE REQUIRED INFORMATION OR KEEP SUCH INFORMATION UP-TO-DATE, YOU AGREE AND ACKNOWLEDGE THAT WE MAY CONTINUE CHARGING YOU USING ANY PAYMENT METHOD YOU HAVE ON RECORD, FOR ANY USE OF PAID SERVICES UNDER YOUR BILLING ACCOUNT, UNLESS YOU HAVE CANCELLED OR PAUSED YOUR PAID SERVICES OR TERMINATED YOUR ACCOUNT IN ACCORDANCE WITH THESE TERMS. ",
    ifTheAmountToBe: (<>If the amount to be charged to your Billing Account varies from the amount you preauthorized (other than due to the imposition or change in the amount of state taxes), we shall provide notice of the amount to be charged and the date of the charge before the scheduled date of the transaction. Any agreement you have with your payment provider will govern your use of your Payment Method. You agree that we may accumulate charges incurred and submit them as one or more aggregate charges during or at the end of each Billing Period.<br />Your non-termination or continued use of a Membership Service reaffirms that we (and/or our Payment Processor) are authorized to charge your Payment Method for that Membership Service. We may submit those charges for payment and you will be responsible for such charges. This does not waive our right to seek payment directly from you. Your charges may be payable in advance, in arrears, per usage, or as otherwise described when you initially selected to use the Membership Service.</>),
    someOfThePaidSer: (<>Some of the Paid Services are offered as a subscription that may consist of an initial period, for which there will be an initial charge, followed by recurring period charges as agreed to by you (“Membership Services”). If you choose a Membership Service, your Payment Method will be charged the then-current applicable rate (including all applicable taxes and fees) on the date that you sign up for such Membership Service. This date is your “Billing Date.” The applicable fee will automatically renew, meaning your Payment Method will be automatically charged the then-current applicable rate for the Membership Service during each subsequent month until you Pause or Cancel (each as defined below) the Membership Service or terminate your Account.  Recurring charges will occur on a going-forward basis each month on or about the same date as your Billing Date (however, if your Billing Date does not exist in a given month, you will be billed on or around the last day of that month). The period between your Billing Dates is referred to as a “Billing Period.” As of your first Billing Date, the Membership Services are available to you, subject to these Terms. Your Account will remain active and you will remain eligible to participate in the Membership Services for subsequent Billing Periods after we successfully receive your payment for each applicable Billing Date. If you do not want to continue to be charged on a recurring monthly basis, you must Cancel or Pause the applicable Membership Service or terminate your Account before the end of the then-current Billing Period.<br />By choosing a recurring Membership Service, you acknowledge that such Paid Services have an initial and recurring payment feature and you accept responsibility for all recurring charges prior to cancellation. WE MAY SUBMIT PERIODIC CHARGES (E.G., MONTHLY) WITHOUT FURTHER AUTHORIZATION FROM YOU, UNTIL YOU PROVIDE PRIOR NOTICE (RECEIPT OF WHICH IS CONFIRMED BY US) THAT YOU HAVE TERMINATED THIS AUTHORIZATION OR CANCELLED OR PAUSED THE SERVICES OR YOUR ACCOUNT. Such notice will not affect charges that have already been submitted or are in process. <br />To change your Payment Method, go to your  account settings. To delete a Payment Method or terminate your payment authorization, contact us at support@themercerclubnyc.com or 954-787-0304. For information on how to Pause or Cancel your account, see below.</>),
    youMustProvideUs: "You must provide us with accurate shipping information, so that we can timely deliver Products to you. You are responsible for providing us with accurate shipping information for deliveries and for keeping the shipping information for your Account up-to-date. If you provide us with a shipping address that is invalid or where you cannot securely accept Products upon delivery, or if you do not keep your shipping information up-to-date, you are solely responsible for any resulting loss, theft, or damage to the Products. Following delivery to the designated address, as between you and us, you will be solely responsible for the condition of each Product until you return such Product (including while they are in transit). We reserve the right to reject, cancel, or prohibit any rentals or sales of Products for any reason. Please see our  FAQ Section for more information regarding deliveries.",
    weMayFromTimeTo: "We may, from time to time, permit you to have rental Products shipped to our third-party partners. If you choose to have rental Products shipped to such third-party partners, notwithstanding anything to the contrary in these Terms, you must return such rental Products, using the Return Packaging, to our third-party partners, unless we expressly permit you to otherwise return the rental Products in accordance with these Terms.",
    youAgreeToReturn: (<>You agree to return each rented Product to The Mercer Club on or before the return date for the Product identified in the applicable online invoice for your order. We may, but are not required to, permit you to extend your order for a Product (including by contacting us), subject to pre-payment of any additional fees applicable to that Product for the period of time of the extension. We are not responsible for any personal or other items left in the Products or which are returned to The Mercer Club in the Return Packaging. If you believe you have accidentally or otherwise sent any such items to us, please contact customer service as soon as possible at support@themercerclubnyc.com. We may, but are not required to, assist you in attempting to locate such items at your request, and we assume no responsibility or liability if we attempt to locate such items.<br />If you use the Return Packaging that we provide, you must use the shipping carrier specified on the pre-paid shipping label included with the Return Packaging. The Mercer Club will not be responsible for loss, theft, or damage to Products that are shipped back to us using any carrier other than the carrier that is specified on our Return Packaging, or for any fees or expenses that you incur due to delays in The Mercer Club receiving the Product. The Mercer Club does not ship Products outside of the United States, and you may not return Products to us from outside of the United States without our prior written permission.<br />In the event that you lose or damage the Return Packaging that we provide, you will be responsible for returning the Product to us in your own packaging, at your own expense. Furthermore, you acknowledge that using any packaging or shipping carriers other than our Return Packaging and the carrier specified thereon may result in delivery delays and additional delivery fees for which The Mercer Club will not be liable. You will be solely liable for all such delays and additional delivery fees.<br />If you are returning a Product using our self-service kiosks, once a Product has been scanned into a kiosk return scanner, it is considered a Product return and you must immediately deposit the Product in the return bin provided. Failure to deposit a Product in the return bin at the self-service kiosk at the time that it is scanned into the kiosk is a violation of our Terms, and we may terminate your Account, charge your Payment Method for the full Value of the Product, and/or take other legal action.<br />For more information regarding Product returns, please refer to our  FAQ Section for the most up-to-date information. </>),
    weMayInOurSole: "We may, in our sole discretion, provide listings, descriptions, or images of Products that are available on the Services, as well as references and links to Products, but we do not warrant that the Product listings, descriptions, or images are accurate, complete, reliable, current, or error-free, or that any Products will be available, even if noted as so on our Services. Such information and the availability of any Product are subject to change at any time without notice. Certain weights, measures, and similar descriptions are approximate and are for convenience only. We make reasonable efforts to accurately display the attributes of Products, including the applicable colors, however the actual colors you see will depend on your computer system, and we cannot guarantee that your computer (including a smart phone or similar device) will accurately display such colors. The prices displayed for Products and Services are quoted in U.S. dollars, unless otherwise indicated. Prices and availability for Products on our Reserve Service are not confirmed until the applicable Products are shipped; if the actual price of such a Product is higher than our stated price, or if the Product is no longer available, we will contact you for instructions before shipping or cancel your order and notify you of such cancellation. The availability through the Services of any listing, description, or image of a Product does not imply our endorsement of such Product or affiliation with the provider of such Product.",
    weMayChargeYouTo: (<>We may charge you to access and use certain parts of the Services (the “Paid Services”). We reserve the right to modify or waive fees required to use certain parts of the Services. You are solely responsible for: (i) the fee for any Paid Services that you order and that are not cancelled in accordance with our cancellation policy, (ii) the price of any Products that are not returned in accordance with our policies, and (iii) any late fees accrued by you due to late or lost items. <br />For more information about our Services, including pricing and fees and cancellation policies, please see our  FAQ Section. Please note that any payment terms presented to you in the process of using or signing up for a Paid Service are deemed part of these Terms.</>),
    ifYouRentAProduc: "If you rent a Product through our Reserve Service, the rental fee (“Rental Fee”) will include insurance charges and delivery charges (as applicable) listed on the Reserve Service for your rental of the applicable Product. The Mercer Club reserves the right to alter the Rental Fee or availability of any particular item at its discretion and without notice. ",
    ifYouPurchaseAMe: "If you purchase a Membership Service, the subscription fee (“Subscription Fee”) will be the then-current applicable subscription rate (including all applicable taxes and fees) listed on the Membership Service on the date that you sign up for such Membership Service; provided that, if your Membership Service is based on a promotional rate, you will be charged a fee equal to the promotional rate for the duration of the promotion, and, after the expiration of the applicable promotion, you will be charged the applicable rate on a recurring monthly basis. For information on the applicable fees, including any applicable discounts and insurance charges listed during the check-out process, please see the “ Plans” section of our Site. The Mercer Club reserves the right to alter the Subscription Fee or availability of any particular item at its discretion and without notice.",
    ifYouPurchaseAPr: "If you purchase a Product through the Services, the purchase price for such Product (“Purchase Price”) will be equal to the purchase fee and delivery charges listed on the Service for the applicable Product at the time of purchase. The Mercer Club, at its discretion and without notice, reserves the right to alter the price of a Product, the amount or availability of any discount, or the availability of any particular item. You hereby authorize us (or our third-party payment processor) to charge your Payment Method (as defined below) for the Purchase Price when you purchase Products. We will charge your Payment Method the amount of the Purchase Price immediately upon your purchase order. We do not make, and expressly disclaim, any warranties of any kind with respect to any Product that you purchase, and such Product is provided on an “AS IS” basis.",
    ifYouDoNotReturn: (<>If you do not return one or more Products that are part of a single order (other than Products that you purchase) after the date on which such Products must be returned or do not return the Product(s) at all (see the “Returns, Extensions, Shipping, and Lost Items” section below), you hereby authorize us (or our third-party payment processor) to charge your Payment Method a non-refundable late fee for every day that we do not receive every Product that comprises such order, up to an amount equal to one hundred percent (100%) of the The Mercer Club’s purchase value of the Products not returned to us (for each Product, the “Retail Value”) plus applicable sales tax. The late fee is payable on a per-order, not a per-Product, basis. If you have not returned a Product within twenty (20) days after the specified return date for such Product, your late return will be considered a non-return and you hereby authorize us (or our third-party payment processor) to charge your Payment Method the Retail Value of the Product, minus any late fees that you have already paid, plus applicable sales tax. Please see our  FAQ Section for the current amount we charge for a late fee.<br />If you are charged by The Mercer Club for the full Retail Value of a Product pursuant to this “Late Fees” section, you are permitted to retain the Product; however, we do not make, and expressly disclaim, any warranties of any kind with respect to the Product, and the Product is provided to you on an “AS IS” basis. For the avoidance of doubt, this “Late Fees” section shall not apply to the Rental Fee, or fees paid or payable by you for the non-return of Return Packaging (as defined below), each of which will be charged separately from, and in addition to, any late fees. Late fees will not apply to any Products ordered using the Membership Service, unless you Cancel the Membership Service. Payment of any late fees does not excuse your breach of these Terms and does not limit our rights or remedies hereunder.</>),
    withTheDeliveryOf: "With the delivery of a Product, The Mercer Club will provide you with pre-paid, pre-addressed packaging that you can use to return the Product (“Return Packaging”), as well as instructions for returning the Product to The Mercer Club. You may not keep, sell, or transfer (other than to us) any The Mercer Club-branded garment bags, accessory bags, and accessory boxes (“The Mercer Club Packaging”) that we provide to you. If The Mercer Club Packaging is not returned prior to the earlier of (i) sixty (60) days after the return of the associated Product or (ii) the termination, cancellation, or expiration of your Account or Paid Services, you hereby authorize us (or our third-party payment processor) to charge your Payment Method a non-refundable non-return fee for each garment bag, accessory bag, and/or accessory box that is not returned to us. After we charge your Payment Method for The Mercer Club Packaging that you did not return, you are permitted to retain such The Mercer Club Packaging; however, we do not make, and expressly disclaim, any warranties of any kind with respect to such The Mercer Club Packaging, and The Mercer Club Packaging is provided to you on an “AS IS” basis. Please see our  FAQ Section for the current amount we charge for non-return fees (including for garment bags, accessory bags, and accessory boxes).",
    aboutOurService: "ABOUT OUR SERVICE",
    text91: "OTHER TERMS RELATED TO PRODUCTS AND SERVICES",
    text92: "PAUSING AND CANCELLING SERVICES",
    text93: "FREE TRIALS AND PROMOTIONS",
    giftCards: "GIFT CARDS",
    referralProgram: "REFERRAL PROGRAM",
    miscellaneous: "MISCELLANEOUS",
    text94: "OWNERSHIP AND USE OF INTELLECTUAL PROPERTY",
    text95: "BILLING AND PAYMENTS",
    ourContent: "Our Content",
    useRestrictions: "Use Restrictions",
    yourContent: "Your Content",
    youAreAlsoRespons: "You are also responsible for obtaining, maintaining, and paying for all hardware and all telecommunications and other services needed to access or use the Services. A violation of any of the foregoing is grounds for termination of your right to use or access the Services. ",
    certainServicesFun: (<>Certain Services functionality may contain links or connections to, or otherwise make available access to, third-party websites, services, information, services, products, or other materials that are not owned or controlled by The Mercer Club (“Third Party Materials”), or allow for the routing or transmission of such Third Party Materials, including via links. When you access or use any Third Party Materials, you are directing us to access, route and transmit to you the applicable Third Party Materials. Your use of Third Party Materials is at your own risk and is subject to any additional terms, conditions, and policies applicable to such Third Party Materials (such as terms of service or privacy policies of the providers of such Third Party Materials).<br />The Mercer Club has no control over, does not endorse, and assumes no responsibility for, any Third Party Materials, including the content, accuracy, validity, timeliness, reliability, completeness, quality, legality, usefulness, safety, or practices of or opinions expressed in any Third Party Materials. In addition, The Mercer Club has no obligation to monitor, verify, censor, or edit the content of any Third Party Materials, and we may block or disable access to any Third Party Materials (in whole or in part) through the Services at any time. In addition, the availability of any Third Party Materials through the Services does not imply our endorsement of, or our affiliation with, any provider of such Third Party Materials, nor does such availability create any legal relationship between you and any such provider. We encourage you to be aware when you leave the Services and to read the terms and conditions and privacy policy of each third-party website or service that you access or use. By accessing or using the Services, you release and hold us harmless from any and all liability arising from your access to or use of any Third Party Materials. <br />If there is a dispute between participants on this site or Services, or between users and any third party, including in connection with any Third Party Materials, you agree that The Mercer Club is under no obligation to become involved and you are solely responsible for such disputes.</>),
    ourServicesMayAll: "Our Services may allow you to rate and post reviews of Products. Any ratings or reviews provided by you are considered User Submissions and are governed by these Terms. Ratings and reviews are not endorsed by The Mercer Club, and do not represent the views of The Mercer Club or of any affiliate or partner of The Mercer Club. The Mercer Club does not assume liability for any ratings and reviews or for any claims, liabilities, or losses resulting from or relating to ratings or reviews. We reserve the right to modify, remove, or exclude any rating and/or review for any reason at any time, without notice.",
    theDigitalMillenni: "The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that materials available on the Services infringe your copyright, you (or your agent) may send to The Mercer Club a written notice by mail, email, or fax, requesting that The Mercer Club remove such material or block access to it. If you believe in good faith that someone has wrongly filed a notice of copyright infringement against you, the DMCA permits you to send to The Mercer Club a counter-notice. Notices and counter-notices must meet the then-current statutory requirements imposed by the DMCA. See  http://www.copyright.gov/ for details. Notices and counter-notices must be sent in writing to The Mercer Club as follows: by email to  founders@themercerclubnyc.com; or by phone via 954-787-0304.",
    inAdditionToYour: "In addition to your agreement with the foregoing terms and conditions, and notwithstanding anything to the contrary herein, the following provisions apply with respect to your use of any version of the App compatible with the iOS operating system of Apple Inc. (“Apple”). Apple is not a party to these Terms and does not own and is not responsible for the App. Apple is not providing any warranty for the App except, if applicable, to refund the purchase price for it. Apple is not responsible for maintenance or other support services for the App and shall not be responsible for any other claims, losses, liabilities, damages, costs or expenses with respect to the App, including any third-party product liability claims, claims that the App fails to conform to any applicable legal or regulatory requirement, claims arising under consumer protection or similar legislation, and claims with respect to intellectual property infringement. Any inquiries or complaints relating to the use of the App, including those pertaining to intellectual property rights, must be directed to The Mercer Club in accordance with the “Information or Complaints” section below. The license you have been granted herein is limited to a non-transferable license to use the App on an Apple-branded product that runs Apple’s iOS operating system and is owned or controlled by you, or as otherwise permitted by the usage rules set forth in Apple’s App Store Terms of Service. In addition, you must comply with the terms of any third-party agreement applicable to you when using the App, such as your wireless data service agreement. Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance of the terms and conditions of the Terms, will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary thereof. Notwithstanding the foregoing, The Mercer Club’s right to enter into, rescind, or terminate any variation, waiver, or settlement under these Terms is not subject to the consent of any third party.",
    text96: "Third Party Materials",
    ratingsAndReviews: "Ratings and Reviews",
    text97: "Copyright Infringement Claims",
    text98: "Additional Terms for Mobile Applications",
    arbitrationRules: (<>• Arbitration Rules; Applicability of Arbitration Agreement. The parties shall use their best efforts to settle any dispute, claim, question, or disagreement arising out of or relating to the subject matter of these Terms directly through good-faith negotiations, which shall be a precondition to either party initiating arbitration. If such negotiations do not resolve the dispute, such dispute shall be finally settled by binding arbitration in accordance with this Arbitration Agreement. The arbitration will proceed in the English language, in accordance with the American Arbitration Association under its Consumer Arbitration Rules, as amended by this Arbitration Agreement (the “Rules”) then in effect, by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes. The Consumer Arbitration Rules are available online at  https://www.adr.org/sites/default/files/CommercialRules_Web_FINAL_2.pdf. The arbitrator will conduct hearings, if any, by teleconference or videoconference, rather than by personal appearances, unless the arbitrator determines upon request by you or by us that an in-person hearing is appropriate. Any in-person appearances will be held at a location which is reasonably convenient to both parties with due consideration of their ability to travel and other pertinent circumstances. If the parties are unable to agree on a location, such determination should be made by the AAA or by the arbitrator. The arbitrator’s decision will follow the terms of this Agreement and will be final and binding. The arbitrator will have authority to award temporary, interim or permanent injunctive relief or relief providing for specific performance of this Agreement, but only to the extent necessary to provide relief warranted by the individual claim before the arbitrator. The award rendered by the arbitrator may be confirmed and enforced in any court having jurisdiction thereof. Notwithstanding any of the foregoing, nothing in this Agreement will preclude you from bringing issues to the attention of federal, state, or local agencies and, if the law allows, they can seek relief against us for you. <br />• Class Action Waiver. You agree that any arbitration under these Terms will take place on an individual basis; class arbitrations and class actions are not permitted and you are agreeing to give up the ability to participate in a class action. Notwithstanding anything to the contrary in this Arbitration Agreement or any other provision of these Terms or in the American Arbitration Association’s Consumer Arbitration Rules, disputes regarding the enforceability, revocability, or validity of the foregoing class action waiver may be resolved only by a civil court of competent jurisdiction and not by an arbitrator. In any case in which (i) the dispute is filed as a class, collective, or representative action, and (ii) there is a final judicial determination that all or part of such class action waiver is unenforceable, then the class, collective, and/or representative action, to that extent, must be litigated in a civil court of competent jurisdiction, but the portion of such class action waiver that is enforceable shall be enforced in arbitration.<br />• Small Claims Court; Infringement. Notwithstanding the foregoing obligation to resolve disputes using arbitration, both you and The Mercer Club may assert claims, if they qualify, in small claims court in New York County, New York or any United States county where you live or work. Furthermore, both you and The Mercer Club will have the right to pursue injunctive or other equitable relief at any time, from any court of competent jurisdiction, to prevent the actual or threatened infringement, misappropriation, or violation of a party&#x27;s copyrights, trademarks, trade secrets, patents, or other intellectual property rights.<br />• Waiver of Jury Trial. You and The Mercer Club are each waiving the right to trial by a jury and instead choosing to have claims and disputes resolved by arbitration. Except for disputes that qualify for small claims court, all disputes arising out of or related to these Terms or any aspect of the relationship between you and The Mercer Club, whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, will be resolved pursuant to this Arbitration Agreement. Except as provided above regarding the class action waiver, such disputes include, without limitation, disputes arising out of or relating to interpretation or application of this arbitration provision, including the enforceability, revocability or validity of the arbitration provision or any portion of the arbitration provision. All such matters shall be decided by an arbitrator and not by a court or judge. However, as set forth above, the preceding arbitration requirement shall not apply to disputes to the extent relating to the interpretation or application of the class action waiver above, including its enforceability, revocability, or validity. <br />• Exclusive Venue. In any circumstances where the foregoing Arbitration Agreement permits either you or The Mercer Club to litigate any dispute arising out of or relating to the subject matter of these Terms in court, then the foregoing Arbitration Agreement will not apply to either party, and both you and The Mercer Club agree that any judicial proceeding (other than small claims actions) will be brought in the state or federal courts located in New York County, New York.<br />• Severability. If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Arbitration Agreement section will be null and void. This Arbitration Agreement will survive the termination of your relationship with The Mercer Club.</>),
    faq: "FAQ",
    rentalPolicy: "Rental Policy",
    privacyPolicy: "Privacy Policy",
    termsConditions2: "Terms & Conditions",
    line4: "/img/line-4-3@1x.png",
    browse: "Browse",
    rentalPolicy2: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text99: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions3: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy2: "Privacy Policy",
    membership: "Membership",
    spanText4: (<>Customer Service<br /></>),
    spanText5: "(954) 787-0304",
    group5: "/img/path-27-2@1x.png",
    group6: "/img/path-28-1@1x.png",
    path13: "/img/path-13@1x.png",
    group7: "/img/path-30-4@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text101: "SIGN-UP FOR MEMBERSHIP",
    text102: "STAR WITH YOUR EMAIL ",
    theMercerClub: "THE MERCER CLUB",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    group179Props: group1798Data,
    login2Props: login25Data,
    component2212Props: component22125Data,
};

const group74Data = {
    group7: "/img/path-30-5@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
};

const group1799Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16441Data = {
    email: "Email",
};

const group16442Data = {
    email: "Password",
};

const maskGroup19Data = {
    group164Props: group16441Data,
    group1642Props: group16442Data,
};

const login32Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup19Data,
};

const group16443Data = {
    email: "Email",
};

const group16444Data = {
    email: "Name",
};

const group16445Data = {
    email: "Password",
};

const maskGroup128Data = {
    group164Props: group16443Data,
    group1642Props: group16444Data,
    group1643Props: group16445Data,
};

const component22132Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-9@1x.png",
    line2: "/img/line-2-17@1x.png",
    maskGroup12Props: maskGroup128Data,
};

const EditorialData = {
    editorial: "EDITORIAL",
    text103: (<>The History Of <br />the Air Jordan 1</>),
    text104: (<>Finding the Face <br />Mask For You</>),
    spanText: (<>Design In Streetwear:<br /></>),
    spanText2: "Fear Of God",
    safetyIsFashion: "Safety Is Fashion",
    text106: (<>Unique Mediums <br />on The Runway</>),
    line4: "/img/line-4-4@1x.png",
    path37: "/img/path-37@1x.png",
    path38: "/img/path-38@1x.png",
    givenTheIncreasing: (<>Given the increasing significance and relevance of face masks in the current climate, The Mercer Club wanted to take a look into how face masks are utilized not only in the medical field but also in the fashion industry.<br />Throughout history, facial gear has often been used as a form of expression particularly during dire straights. According to Valerie Steel, director and curator at the Fashion Institute of Technology&#x27;s &quot;The Museum&quot; facial wear was often utilized as a form of protection and defense during &quot;uncertain times&quot;. During the Renaissance period, for instance, many people were depicted covering their noses with handkerchiefs to prevent catching any illnesses. Moreover, in the 1600&#x27;s doctor&#x27;s who were responsible for treating and diagnosing patients during the plague were often seem wearing elongated mask with beaks as a means of protections. </>),
    givenTheCurrentPa: "Given the current pandemic and the increasing need for face masks we've see many companies shifting their focus to help supply demand. Prominent fashion houses like Chanel, Balenciaga and Gucci are all manufacturing variations of face coverings for the public. With the CDC recommending the American public wear face masks to flatten the curve it is only natural that they become another form of expression in the fashion world. We will be releasing our own custom face masks in the coming weeks. Be on the look out and stay safe!",
    spanText3: (<>Ivan Ip<br /></>),
    spanText4: "Staff Writer",
    editorialPhoto1: "/img/editorial-photo-1@1x.png",
    text107: "Finding The Face Mask For You",
    posted10222020: "Posted 10/22/2020",
    browse: "Browse",
    rentalPolicy: "Rental Policy",
    editorial2: "Editorial",
    contactUs: "Contact Us",
    text108: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy: "Privacy Policy",
    membership: "Membership",
    spanText5: (<>Customer Service<br /></>),
    spanText6: "(954) 787-0304",
    group5: "/img/path-27@1x.png",
    group6: "/img/path-28@1x.png",
    path13: "/img/path-13@1x.png",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text110: "SIGN-UP FOR MEMBERSHIP",
    text111: "STAR WITH YOUR EMAIL ",
    theMercerClub: "THE MERCER CLUB",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    group7Props: group74Data,
    group179Props: group1799Data,
    login3Props: login32Data,
    component2213Props: component22132Data,
};

const union6Data = {
    union6: "/img/union-6@1x.png",
};

const union62Data = {
    union6: "/img/union-6@1x.png",
};

const union63Data = {
    union6: "/img/union-6@1x.png",
};

const union64Data = {
    union6: "/img/union-6@1x.png",
};

const union65Data = {
    union6: "/img/union-6@1x.png",
};

const union66Data = {
    union6: "/img/union-6@1x.png",
};

const union67Data = {
    union6: "/img/union-6@1x.png",
};

const union68Data = {
    union6: "/img/union-6@1x.png",
};

const union69Data = {
    union6: "/img/union-6@1x.png",
};

const union610Data = {
    union6: "/img/union-6@1x.png",
};

const union611Data = {
    union6: "/img/union-6@1x.png",
};

const union612Data = {
    union6: "/img/union-6@1x.png",
};

const union613Data = {
    union6: "/img/union-6@1x.png",
};

const union614Data = {
    union6: "/img/union-6@1x.png",
};

const union615Data = {
    union6: "/img/union-6@1x.png",
};

const union616Data = {
    union6: "/img/union-6@1x.png",
};

const union617Data = {
    union6: "/img/union-6@1x.png",
};

const union618Data = {
    union6: "/img/union-6@1x.png",
};

const union619Data = {
    union6: "/img/union-6@1x.png",
};

const union620Data = {
    union6: "/img/union-6@1x.png",
};

const union621Data = {
    union6: "/img/union-6@1x.png",
};

const union622Data = {
    union6: "/img/union-6@1x.png",
};

const union623Data = {
    union6: "/img/union-6@1x.png",
};

const union624Data = {
    union6: "/img/union-6@1x.png",
};

const union625Data = {
    union6: "/img/union-6@1x.png",
};

const union626Data = {
    union6: "/img/union-6@1x.png",
};

const union627Data = {
    union6: "/img/union-6@1x.png",
};

const union628Data = {
    union6: "/img/union-6@1x.png",
};

const union629Data = {
    union6: "/img/union-6@1x.png",
};

const union630Data = {
    union6: "/img/union-6@1x.png",
};

const union631Data = {
    union6: "/img/union-6@1x.png",
};

const union632Data = {
    union6: "/img/union-6@1x.png",
};

const union633Data = {
    union6: "/img/union-6@1x.png",
};

const union634Data = {
    union6: "/img/union-6@1x.png",
};

const union635Data = {
    union6: "/img/union-6@1x.png",
};

const union636Data = {
    union6: "/img/union-6@1x.png",
};

const group17910Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16446Data = {
    email: "Email",
};

const group16447Data = {
    email: "Password",
};

const maskGroup110Data = {
    group164Props: group16446Data,
    group1642Props: group16447Data,
};

const login33Data = {
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    maskGroup1Props: maskGroup110Data,
};

const group16448Data = {
    email: "Email",
};

const group16449Data = {
    email: "Name",
};

const group16450Data = {
    email: "Password",
};

const maskGroup129Data = {
    group164Props: group16448Data,
    group1642Props: group16449Data,
    group1643Props: group16450Data,
};

const component22133Data = {
    component211: "/img/path-34@1x.png",
    path5: "/img/path-5-9@1x.png",
    line2: "/img/line-2-17@1x.png",
    maskGroup12Props: maskGroup129Data,
};

const BrowseData = {
    tops: "Tops",
    pants: "Pants",
    footwear: "Footwear",
    accessories: "Accessories",
    jackets: "Jackets",
    hats: "Hats",
    bags: "Bags",
    x_56A7368600X600: "/img/file-56a7368-600x600@1x.png",
    spanText: (<>Brand Name<br /></>),
    spanText2: (<>Item name<br /></>),
    spanText3: "Available/ Out of Stock",
    spanText4: (<>Brand Name<br /></>),
    spanText5: (<>Item name<br /></>),
    spanText6: "Available/ Out of Stock",
    spanText7: (<>Brand Name<br /></>),
    spanText8: (<>Item name<br /></>),
    spanText9: "Available/ Out of Stock",
    spanText10: (<>Brand Name<br /></>),
    spanText11: (<>Item name<br /></>),
    spanText12: "Available/ Out of Stock",
    spanText13: (<>Brand Name<br /></>),
    spanText14: (<>Item name<br /></>),
    spanText15: "Available/ Out of Stock",
    spanText16: (<>Brand Name<br /></>),
    spanText17: (<>Item name<br /></>),
    spanText18: "Available/ Out of Stock",
    spanText19: (<>Brand Name<br /></>),
    spanText20: (<>Item name<br /></>),
    spanText21: "Available/ Out of Stock",
    spanText22: (<>Brand Name<br /></>),
    spanText23: (<>Item name<br /></>),
    spanText24: "Available/ Out of Stock",
    spanText25: (<>Brand Name<br /></>),
    spanText26: (<>Item name<br /></>),
    spanText27: "Available/ Out of Stock",
    spanText28: (<>Brand Name<br /></>),
    spanText29: (<>Item name<br /></>),
    spanText30: "Available/ Out of Stock",
    spanText31: (<>Brand Name<br /></>),
    spanText32: (<>Item name<br /></>),
    spanText33: "Available/ Out of Stock",
    spanText34: (<>Brand Name<br /></>),
    spanText35: (<>Item name<br /></>),
    spanText36: "Available/ Out of Stock",
    spanText37: (<>Brand Name<br /></>),
    spanText38: (<>Item name<br /></>),
    spanText39: "Available/ Out of Stock",
    spanText40: (<>Brand Name<br /></>),
    spanText41: (<>Item name<br /></>),
    spanText42: "Available/ Out of Stock",
    spanText43: (<>Brand Name<br /></>),
    spanText44: (<>Item name<br /></>),
    spanText45: "Available/ Out of Stock",
    spanText46: (<>Brand Name<br /></>),
    spanText47: (<>Item name<br /></>),
    spanText48: "Available/ Out of Stock",
    spanText49: (<>Brand Name<br /></>),
    spanText50: (<>Item name<br /></>),
    spanText51: "Available/ Out of Stock",
    spanText52: (<>Brand Name<br /></>),
    spanText53: (<>Item name<br /></>),
    spanText54: "Available/ Out of Stock",
    spanText55: (<>Brand Name<br /></>),
    spanText56: (<>Item name<br /></>),
    spanText57: "Available/ Out of Stock",
    spanText58: (<>Brand Name<br /></>),
    spanText59: (<>Item name<br /></>),
    spanText60: "Available/ Out of Stock",
    spanText61: (<>Brand Name<br /></>),
    spanText62: (<>Item name<br /></>),
    spanText63: "Available/ Out of Stock",
    spanText64: (<>Brand Name<br /></>),
    spanText65: (<>Item name<br /></>),
    spanText66: "Available/ Out of Stock",
    spanText67: (<>Brand Name<br /></>),
    spanText68: (<>Item name<br /></>),
    spanText69: "Available/ Out of Stock",
    spanText70: (<>Brand Name<br /></>),
    spanText71: (<>Item name<br /></>),
    spanText72: "Available/ Out of Stock",
    spanText73: (<>Brand Name<br /></>),
    spanText74: (<>Item name<br /></>),
    spanText75: "Available/ Out of Stock",
    spanText76: (<>Brand Name<br /></>),
    spanText77: (<>Item name<br /></>),
    spanText78: "Available/ Out of Stock",
    spanText79: (<>Brand Name<br /></>),
    spanText80: (<>Item name<br /></>),
    spanText81: "Available/ Out of Stock",
    spanText82: (<>Brand Name<br /></>),
    spanText83: (<>Item name<br /></>),
    spanText84: "Available/ Out of Stock",
    spanText85: (<>Brand Name<br /></>),
    spanText86: (<>Item name<br /></>),
    spanText87: "Available/ Out of Stock",
    spanText88: (<>Brand Name<br /></>),
    spanText89: (<>Item name<br /></>),
    spanText90: "Available/ Out of Stock",
    spanText91: (<>Brand Name<br /></>),
    spanText92: (<>Item name<br /></>),
    spanText93: "Available/ Out of Stock",
    spanText94: (<>Brand Name<br /></>),
    spanText95: (<>Item name<br /></>),
    spanText96: "Available/ Out of Stock",
    spanText97: (<>Brand Name<br /></>),
    spanText98: (<>Item name<br /></>),
    spanText99: "Available/ Out of Stock",
    spanText100: (<>Brand Name<br /></>),
    spanText101: (<>Item name<br /></>),
    spanText102: "Available/ Out of Stock",
    spanText103: (<>Brand Name<br /></>),
    spanText104: (<>Item name<br /></>),
    spanText105: "Available/ Out of Stock",
    spanText106: (<>Brand Name<br /></>),
    spanText107: (<>Item name<br /></>),
    spanText108: "Available/ Out of Stock",
    group28: "/img/path-65@1x.png",
    x_56A75112600X600: "/img/file-56a7511-2-600x600@1x.png",
    group282: "/img/path-65@1x.png",
    x_56A7524600X600: "/img/file-56a7524-600x600@1x.png",
    group283: "/img/path-65@1x.png",
    x156A7675600X600: "/img/156a7675-600x600@1x.png",
    group284: "/img/path-65@1x.png",
    x156A7690600X600: "/img/156a7690-600x600@1x.png",
    group285: "/img/path-65@1x.png",
    x156A7693600X600: "/img/156a7693-600x600@1x.png",
    group286: "/img/path-65@1x.png",
    x156A7695600X600: "/img/156a7695-600x600@1x.png",
    group287: "/img/path-65@1x.png",
    x156A77112600X600: "/img/156a7711-2-600x600@1x.png",
    group288: "/img/path-65@1x.png",
    accesories1600X600: "/img/accesories-1-600x600@1x.png",
    group289: "/img/path-65@1x.png",
    amiri1600X600: "/img/amiri-1-600x600@1x.png",
    group2810: "/img/path-65@1x.png",
    bag1600X600: "/img/bag-1-600x600@1x.png",
    group2811: "/img/path-65@1x.png",
    ct0856_600_1600X600: "/img/ct0856-600-1-600x600@1x.png",
    group2812: "/img/path-65@1x.png",
    dior_Kaws_2400X600X600: "/img/dior-kaws-2400x-600x600@1x.png",
    group2813: "/img/path-65@1x.png",
    dior600X600: "/img/dior-600x600@1x.png",
    group2814: "/img/path-65@1x.png",
    ezgif19D2E367Sdrgc8E6C_360Dfx_2400X: "/img/ezgif-1-9d2e367sdrgc8e6c-360dfx-2400x-600x600@1x.png",
    group2815: "/img/path-65@1x.png",
    gucciTop2600X600: "/img/gucci-top-2-600x600@1x.png",
    group2816: "/img/path-65@1x.png",
    products_0003_Levels91600X600: "/img/products-0003-levels-9-1--600x600@1x.png",
    group2817: "/img/path-65@1x.png",
    products_0007_Layer29600X600: "/img/products-0007-layer-29-600x600@1x.png",
    group2818: "/img/path-65@1x.png",
    products_0010_Layer27600X600: "/img/products-0010-layer-27-600x600@1x.png",
    group2819: "/img/path-65@1x.png",
    products_0014_Levels5600X600: "/img/products-0014-levels-5-600x600@1x.png",
    group2820: "/img/path-65@1x.png",
    products_0015_Layer25600X600: "/img/products-0015-layer-25-600x600@1x.png",
    group2821: "/img/path-65@1x.png",
    products_0020_Layer22600X600: "/img/products-0020-layer-22-600x600@1x.png",
    group2822: "/img/path-65@1x.png",
    products_0024_Layer20600X600: "/img/products-0024-layer-20-600x600@1x.png",
    group2823: "/img/path-65@1x.png",
    products_0026_Layer19600X600: "/img/products-0026-layer-19-600x600@1x.png",
    group2824: "/img/path-65@1x.png",
    products_0029_Layer17600X600: "/img/products-0029-layer-17-600x600@1x.png",
    group2825: "/img/path-65@1x.png",
    products_0031_Layer15600X600: "/img/products-0031-layer-15-600x600@1x.png",
    group2826: "/img/path-65@1x.png",
    products_0033_Layer13600X600: "/img/products-0033-layer-13-600x600@1x.png",
    group2827: "/img/path-65@1x.png",
    products_0035_Layer11600X600: "/img/products-0035-layer-11-600x600@1x.png",
    products_0045_Layer5600X600: "/img/products-0045-layer-5-600x600@1x.png",
    supream1600X600: "/img/supream-1-600x600@1x.png",
    group2828: "/img/path-65@1x.png",
    group51: "/img/path-65@1x.png",
    group52: "/img/path-65@1x.png",
    products_0038_Layer9600X600: "/img/products-0038-layer-9-600x600@1x.png",
    products_0047_Layer3600X600: "/img/products-0047-layer-3-600x600@1x.png",
    tops11600X600: "/img/tops-11-600x600@1x.png",
    group2829: "/img/path-65@1x.png",
    group49: "/img/path-65@1x.png",
    group53: "/img/path-65@1x.png",
    products_0041_Layer7600X600: "/img/products-0041-layer-7-600x600@1x.png",
    products_0051_Layer1600X600: "/img/products-0051-layer-1-600x600@1x.png",
    viewProductLoggedIn600X600: "/img/view-product-logged-in-600x600@1x.png",
    group2830: "/img/path-65@1x.png",
    group50: "/img/path-65@1x.png",
    group54: "/img/path-65@1x.png",
    browse: "Browse",
    rentalPolicy: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text148: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy: "Privacy Policy",
    membership: "Membership",
    spanText109: (<>Customer Service<br /></>),
    spanText110: "(954) 787-0304",
    group5: "/img/path-27-6@1x.png",
    group6: "/img/path-28-6@1x.png",
    path13: "/img/path-13@1x.png",
    group7: "/img/path-30-5@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text150: "SIGN-UP FOR MEMBERSHIP",
    text151: "STAR WITH YOUR EMAIL ",
    theMercerClub: "THE MERCER CLUB",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    union6Props: union6Data,
    union62Props: union62Data,
    union63Props: union63Data,
    union64Props: union64Data,
    union65Props: union65Data,
    union66Props: union66Data,
    union67Props: union67Data,
    union68Props: union68Data,
    union69Props: union69Data,
    union610Props: union610Data,
    union611Props: union611Data,
    union612Props: union612Data,
    union613Props: union613Data,
    union614Props: union614Data,
    union615Props: union615Data,
    union616Props: union616Data,
    union617Props: union617Data,
    union618Props: union618Data,
    union619Props: union619Data,
    union620Props: union620Data,
    union621Props: union621Data,
    union622Props: union622Data,
    union623Props: union623Data,
    union624Props: union624Data,
    union625Props: union625Data,
    union626Props: union626Data,
    union627Props: union627Data,
    union628Props: union628Data,
    union629Props: union629Data,
    union630Props: union630Data,
    union631Props: union631Data,
    union632Props: union632Data,
    union633Props: union633Data,
    union634Props: union634Data,
    union635Props: union635Data,
    union636Props: union636Data,
    group179Props: group17910Data,
    login3Props: login33Data,
    component2213Props: component22133Data,
};

const group722Data = {
    group7: "/img/path-30-5@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
};

const group17911Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16451Data = {
    email: "Email",
};

const group16452Data = {
    email: "Password",
};

const maskGroup111Data = {
    group164Props: group16451Data,
    group1642Props: group16452Data,
};

const group16453Data = {
    email: "Email",
};

const group16454Data = {
    email: "Name",
};

const group16455Data = {
    email: "Password",
};

const maskGroup1210Data = {
    group164Props: group16453Data,
    group1642Props: group16454Data,
    group1643Props: group16455Data,
};

const AboutUsData = {
    text152: "HISTORY OF THE MERCER CLUB",
    img_7544: "/img/img-7544@1x.png",
    history: "History",
    photoGallery: "Photo Gallery",
    employees: "Employees",
    line4: "/img/line-4-5@1x.png",
    theMercerClubIsA: "The Mercer Club is a New York city based subscription service founded by Chike Achebe and Travis Ezidiegwu in 2019 with the intent to grow sustainable fashion through our online community. Our mission statement is rooted in the belief that the fashion industry’s global carbon footprint has ballooned out of control and that something must be done to the slow danger it presents to worldwide climate change. With that in mind (and a lifelong love of avant garde fashion) the Mercer Club was conceived. We aim to not only bring sustainable fashion to more people but also recreate the digital community of artists, musicians and creators we grew up being so inspired by.",
    theMercerClub: "THE MERCER CLUB",
    humbleBeginnings: "Humble Beginnings ",
    browse: "Browse",
    rentalPolicy: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text153: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy: "Privacy Policy",
    membership: "Membership",
    spanText: (<>Customer Service<br /></>),
    spanText2: "(954) 787-0304",
    group5: "/img/path-27@1x.png",
    group6: "/img/path-28@1x.png",
    path13: "/img/path-13@1x.png",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text155: "SIGN-UP FOR MEMBERSHIP",
    text156: "STAR WITH YOUR EMAIL ",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    component211: "/img/path-34@1x.png",
    path52: "/img/path-5-9@1x.png",
    line22: "/img/line-2@1x.png",
    group72Props: group722Data,
    group179Props: group17911Data,
    maskGroup1Props: maskGroup111Data,
    maskGroup12Props: maskGroup1210Data,
};

const group723Data = {
    group7: "/img/path-30-5@1x.png",
    path31: "/img/path-31-1@1x.png",
    path32: "/img/path-32@1x.png",
};

const group17912Data = {
    browse: "Browse",
    membership: "Membership",
    editorial: "Editorial",
};

const group16456Data = {
    email: "Email",
};

const group16457Data = {
    email: "Password",
};

const maskGroup112Data = {
    group164Props: group16456Data,
    group1642Props: group16457Data,
};

const group16458Data = {
    email: "Email",
};

const group16459Data = {
    email: "Name",
};

const group16460Data = {
    email: "Password",
};

const maskGroup1211Data = {
    group164Props: group16458Data,
    group1642Props: group16459Data,
    group1643Props: group16460Data,
};

const DashboardData = {
    menu: "Menu",
    account: "Account",
    place: "Home",
    payment: "Payment",
    orderHistory: "Order History",
    profile: "Profile",
    gallery: "Gallery",
    favorites: "Favorites",
    brandWebsite: "Brand Website",
    logOut: "Log-Out",
    orderHistory2: "Order History",
    profile2: "Profile",
    favorites2: "Favorites",
    group13: "/img/matthew-dagelet-6jfmiprgizs-unsplash@1x.png",
    newArrivals: "New Arrivals",
    nikeOffWhite: (<>Nike<br />Off-White</>),
    gucciMiuMiu: (<>GUCCI<br />Miu Miu </>),
    spanText: (<>Yeezy<br /></>),
    spanText2: "FEAR OF GOD",
    group14: "/img/img-3259-1@1x.png",
    announcements: "Announcements",
    userPhotoGallery: (<>User<br />Photo Gallery</>),
    browse: "Browse",
    rentalPolicy: "Rental Policy",
    editorial: "Editorial",
    contactUs: "Contact Us",
    text157: "support@themercerclubnyc.com",
    aboutUs: "About Us",
    termsConditions: "Terms & Conditions",
    faqs: "FAQs",
    privacyPolicy: "Privacy Policy",
    membership: "Membership",
    spanText3: (<>Customer Service<br /></>),
    spanText4: "(954) 787-0304",
    group5: "/img/path-27@1x.png",
    group6: "/img/path-28@1x.png",
    path13: "/img/path-13@1x.png",
    emailSubscription: "EMAIL SUBSCRIPTION",
    text159: "SIGN-UP FOR MEMBERSHIP",
    text160: "STAR WITH YOUR EMAIL ",
    theMercerClub: "THE MERCER CLUB",
    theMercerClub2: "THE MERCER CLUB",
    logIn: "LOG-IN",
    signUp: "SIGN-UP",
    path292: "/img/path-292-1@1x.png",
    group173: "/img/path-34@1x.png",
    path5: "/img/path-5@1x.png",
    line2: "/img/line-2@1x.png",
    placeholderPerson: "/img/placeholder-person@1x.png",
    component211: "/img/path-34@1x.png",
    path52: "/img/path-5-9@1x.png",
    line22: "/img/line-2@1x.png",
    group72Props: group723Data,
    group179Props: group17912Data,
    maskGroup1Props: maskGroup112Data,
    maskGroup12Props: maskGroup1211Data,
};

