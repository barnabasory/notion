import { useState } from "react";
import "./Navbar.scss";
import {
  logo,
  nav_caret,
  menu,
  close,
  book,
  dart,
  doc,
  star,
  house1,
  house2,
  house3,
} from "../../../pages";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="fw navbar-wrapper">
      <nav className="sw navbar">
        <div className="navlinksA">
          <img src={logo} alt="logo" className="logo" />
          <ul>
            <li className="product">
              Product <img src={nav_caret} alt="nav-caret" className="caret" />
              <div className="product-drop-down">
                <div className="left">
                  <a href="#" className="left-link">
                    <img src={book} alt="book" />
                    <div className="link-content">
                      <span className="title">Wikis</span>
                      <span className="content">Centralize your knowledge</span>
                    </div>
                  </a>
                  <a href="#" className="left-link">
                    <img src={dart} alt="book" />
                    <div className="link-content">
                      <span className="title">Projects</span>
                      <span className="content">For every team or size</span>
                    </div>
                  </a>
                  <a href="#" className="left-link">
                    <img src={doc} alt="book" />
                    <div className="link-content">
                      <span className="title">Docs</span>
                      <span className="content">Simple and Powerful</span>
                    </div>
                  </a>
                  <a href="#" className="left-link">
                    <img src={star} alt="book" />
                    <div className="link-content">
                      <span className="title">Notion AI</span>
                      <span className="content">Integrated AI Assistant</span>
                    </div>
                  </a>
                </div>
                <div className="right">
                  <a href="#" className="right-link">
                    <span className="title">Template gallery</span>
                    <span className="title-content">
                      Setups to get you started
                    </span>
                  </a>
                  <a href="#" className="right-link">
                    <span className="title">Customer stories</span>
                    <span className="title-content">
                      See how teams use Notion
                    </span>
                  </a>
                  <a href="#" className="right-link">
                    <span className="title">Connections</span>
                    <span className="title-content">
                      Connect your tools to Notion
                    </span>
                  </a>
                </div>
              </div>
            </li>
            <li className="download">
              Download <img src={nav_caret} alt="nav-caret" className="caret" />
              <div className="download-drop-down">
                <a href="#" className="download-drop-down-link">
                  iOS & Android
                </a>
                <a href="#" className="download-drop-down-link">
                  Mac & Windows
                </a>
                <a href="#" className="download-drop-down-link">
                  Web Clipper
                </a>
              </div>
            </li>
            <li className="solutions">
              Solutions{" "}
              <img src={nav_caret} alt="nav-caret" className="caret" />
              <div className="solutions-dropdown">
                <div className="first-block">
                  <span className="top-snippet">BY TEAM SIZE</span>
                  <div className="solution-link">
                    <img src={house1} alt="house" className="house" />
                    <div className="solutions-content">
                      <span className="title">Enterprise</span>
                      <span className="title-content">
                        Advanced features for your org
                      </span>
                    </div>
                  </div>
                  <div className="solution-link">
                    <img src={house2} alt="house" className="house" />
                    <div className="solutions-content">
                      <span className="title">Small Enterprise</span>
                      <span className="title-content">
                        Run your team on one tool
                      </span>
                    </div>
                  </div>
                  <div className="solution-link">
                    <img src={house3} alt="house" className="house" />
                    <div className="solutions-content">
                      <span className="title">Personal</span>
                      <span className="title-content">
                        Free for individuals
                      </span>
                    </div>
                  </div>
                </div>
                <div className="second-block">
                  {" "}
                  <span className="top-snippet">BY TEAM FUNCTION</span>
                  <div className="solution-links">
                    <a href="#" className="solution-link">
                      Design
                    </a>
                    <a href="#" className="solution-link">
                      Engineering
                    </a>
                    <a href="#" className="solution-link">
                      Product
                    </a>
                    <a href="#" className="solution-link">
                      Managers
                    </a>
                  </div>
                </div>
                <div className="third-block">
                  <span className="top-snippet">NOTION FOR</span>
                  <div className="solution-links">
                    <a href="#" className="solution-link">
                      Startups
                    </a>
                    <a href="#" className="solution-link">
                      Remote work
                    </a>
                    <a href="#" className="solution-link">
                      Education
                    </a>
                    <a href="#" className="solution-link">
                      Nonprofits
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="resources">
              Resources
              <img src={nav_caret} alt="nav-caret" className="caret" />
              <div className="resources-dropdown">
                <a href="#" className="resources-drop-down-link">
                  Blogs
                </a>
                <a href="#" className="resources-drop-down-link">
                  Guides and tutorials
                </a>
                <a href="#" className="resources-drop-down-link">
                  Webinars
                </a>
                <a href="#" className="resources-drop-down-link">
                  Help center
                </a>
                <a href="#" className="resources-drop-down-link">
                  API Docs
                </a>
                <a href="#" className="resources-drop-down-link">
                  Community
                </a>
              </div>
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="navlinksB">
          <a className="cta">Request a demo</a>
          <a className="cta">Log in</a>
          <a>
            <button>Get Notion free</button>
          </a>
        </div>

        {/* responsive */}
        {!showMenu && (
          <div className="open-menu" onClick={() => setShowMenu(!showMenu)}>
            <img src={menu} alt="open-menu" className="open-menu-icon" />
          </div>
        )}
        {showMenu && (
          <>
            {" "}
            <div className="close-menu" onClick={() => setShowMenu(!showMenu)}>
              <img src={close} alt="close-menu" className="close-menu-icon" />
            </div>
            <div className="responsive-dropdown">
              <div className="responsive-links">
                <div className="products-link">
                  <div
                    className="products-links-title"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <span>Products</span>
                    {showDropdown ? (
                      <img
                        src={nav_caret}
                        alt=""
                        className="caret"
                        style={{ transform: "rotate(360deg)" }}
                      />
                    ) : (
                      <img src={nav_caret} alt="" className="caret" />
                    )}
                  </div>
                  {!showDropdown && <hr className="hr" />}
                  {showDropdown && (
                    <div className="key-sub-links">
                      <div className="key-links">
                        <a href="#" className="key-link">
                          <img src={book} alt="book" />
                          <span className="title">Wikis</span>
                        </a>
                        <a href="#" className="key-link">
                          <img src={dart} alt="book" />
                          <span className="title">Projects</span>
                        </a>
                        <a href="#" className="key-link">
                          <img src={doc} alt="book" />
                          <span className="title">Docs</span>
                        </a>
                        <a href="#" className="key-link">
                          <img src={star} alt="book" />
                          <span className="title">Notion AI</span>
                        </a>
                      </div>
                      <div className="sub-links">
                        <a href="#" className="sub-link">
                          <span className="title">Template gallery</span>
                        </a>
                        <a href="#" className="sub-link">
                          <span className="title">Customer stories</span>
                        </a>
                        <a href="#" className="sub-link">
                          <span className="title">Connections</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
