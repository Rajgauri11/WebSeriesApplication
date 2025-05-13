import React from "react";
import "./Footer.css";
import IMG from './assets/Logo.png'

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-left">
        <img src={IMG} alt="Watchx" className="logo" />
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/MX_Player_Logo.svg" alt="MX Player" className="logo mx-logo" /> */}
        <span className="tagline">Young Janta Ko Yahi Mangta</span>
      </div>

      <div className="footer-middle">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="store-badge"
        />
      
      </div>

      <div className="footer-right">
        <div className="social-icons">
       <a href="https://x.com/home"> <i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com/"> <i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/"> <i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.youtube.com/"> <i class="fa-brands fa-youtube"></i></a>

        </div>
        <div className="system-info">
          <p>Platform: Windows 10</p>
          <p>Browser: Chrome 135.0.0.0</p>
          <p>SessionId: 258-3556805-3001923 /AML4SHJ2SOS2Y</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
