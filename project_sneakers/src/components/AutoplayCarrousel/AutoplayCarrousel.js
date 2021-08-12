import React from "react";
import nikeLogo from "../../assets/nike.webp";
import adidasLogo from "../../assets/adidas.webp";
import asicsLogo from "../../assets/asics.webp";
import converseLogo from "../../assets/converse.webp";
import jordanLogo from "../../assets/jordan.webp";
import newBalanceLogo from "../../assets/new-balance.webp";
import pumaLogo from "../../assets/puma.webp";
import reebokLogo from "../../assets/reebok.webp";
import sauconyLogo from "../../assets/saucony.webp";
import underArmourLogo from "../../assets/under-armour.webp";
import vansLogo from "../../assets/vans.webp";

const AutoplayCarrousel = () => {
  return (
    <>
      <div className="about-brand">
        <h2>Our Brands</h2>
        <div className="brands">
          <img className="brand-1" src={nikeLogo} alt="nike-logo" />
          <img className="brand-2" src={adidasLogo} alt="adidas-logo" />
          <img className="brand-3" src={pumaLogo} alt="puma-logo" />
          <img className="brand-4" src={vansLogo} alt="vans-logo" />
          <img className="brand-5" src={converseLogo} alt="converse-logo" />
          <img
            className="brand-6"
            src={newBalanceLogo}
            alt="new-balance-logo"
          />
          <img className="brand-7" src={jordanLogo} alt="jordan-logo" />
          <img className="brand-8" src={reebokLogo} alt="reebok-logo" />
          <img
            className="brand-9"
            src={underArmourLogo}
            alt="under-armour-logo"
          />
          <img className="brand-10" src={sauconyLogo} alt="saucony-logo" />
          <img className="brand-11" src={asicsLogo} alt="asics-logo" />
          <img className="brand-1" src={nikeLogo} alt="nike-logo" />
          <img className="brand-2" src={adidasLogo} alt="adidas-logo" />
          <img className="brand-3" src={pumaLogo} alt="puma-logo" />
          <img className="brand-4" src={vansLogo} alt="vans-logo" />
          <img className="brand-5" src={converseLogo} alt="converse-logo" />
          <img
            className="brand-6"
            src={newBalanceLogo}
            alt="new-balance-logo"
          />
          <img className="brand-7" src={jordanLogo} alt="jordan-logo" />
          <img className="brand-8" src={reebokLogo} alt="reebok-logo" />
        </div>
      </div>
    </>
  );
};

export default AutoplayCarrousel;
