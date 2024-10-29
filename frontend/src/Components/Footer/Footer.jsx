import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <p>Unlock Your Potential with Our Expertise and Expand Your Career</p>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-links">
            <div className="Business">
              <h4>Udemy Business</h4>
              <a href="#">Teach on Udemy</a>
              <a href="#">Get the app</a>
              <a href="#">About us</a>
              <a href="#">Contact us</a>
            </div>
            <div className="Resources">
              <h4>Resources</h4>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Help and Support</a>
              <a href="#">Affiliate</a>
              <a href="#">Investors</a>
            </div>
            <div className="Legal">
              <h4>Legal</h4>
              <a href="#">Terms</a>
              <a href="#">Privacy policy</a>
              <a href="#">Sitemap</a>
              <a href="#">Accessibility statement</a>
            </div>
          </div>
          <div className="lang-cyp">
            <div className="footer-lang-copyright">
              <button>🌐 English</button>
            </div>
            <div className="copyright">© 2024 Udemy, Inc.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
