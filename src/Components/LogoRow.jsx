import React from "react";
import bayernLogo from "../Assets/Images/acrevis-logo.png";
import evolvedLogo from "../Assets/Images/evolved-logo.png";
import wolvesLogo from "../Assets/Images/wolves-logo.png";
import sauterLogo from "../Assets/Images/sauter-logo.png";
import acrevisLogo from "../Assets/Images/acrevis-logo.png";
import smatricLogo from "../Assets/Images/smatric-logo.png";

const LogoRow = () => {
  const logos = [
    { src: bayernLogo, alt: "Bayern International" },
    { src: evolvedLogo, alt: "Evolved" },
    { src: wolvesLogo, alt: "Wolves Partnership" },
    { src: sauterLogo, alt: "Sauter" },
    { src: acrevisLogo, alt: "Acrevis" },
    { src: smatricLogo, alt: "Smatric" },
  ];

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center align-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="col-6 col-sm-4 col-lg-2 col-md-3 mb-3 text-center">
            <img
              src={logo.src}
              alt={logo.alt}
              style={styles.logo}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  logo: {
    maxHeight: "50px",
  },
};

export default LogoRow;
