import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop > 100;

      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
  };

  return (
    <section>
      <div className="fw navbar-wrapper"></div>
      <nav className="fw navbar" style={navbarStyle}>
        <div className="navlinksA">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => setShowMenu(!showMenu)}
          />
          <ul>
            <li className="product">
              <span className="link-name">Product</span>{" "}
              <img src={nav_caret} alt="nav-caret" className="caret" />
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
              <span className="link-name">Download</span>
              <img src={nav_caret} alt="nav-caret" className="caret" />
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
              <span className="link-name">Solutions</span>
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
              <span className="link-name">Resources</span>
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
            <li className="link-name">Pricing</li>
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
          </>
        )}
      </nav>
      {showMenu && (
        <div className="responsive-dropdown">
          <div className="responsive-links">
            <div className="products-link">
              {
                <>
                  {showDropdown1 ? (
                    <div
                      className="products-links-title"
                      onClick={() => setShowDropdown1(!showDropdown1)}
                    >
                      <span>Products</span>
                      {showDropdown1 ? (
                        <img
                          src={nav_caret}
                          alt=""
                          className="caret"
                          style={{
                            transform: "rotate(360deg)",
                            transition: "all 0.5s ease",
                          }}
                        />
                      ) : (
                        <img src={nav_caret} alt="" className="caret" />
                      )}
                    </div>
                  ) : (
                    <div
                      className="products-links-title"
                      onClick={() => setShowDropdown1(!showDropdown1)}
                    >
                      <span>Products</span>
                      {showDropdown1 ? (
                        <img
                          src={nav_caret}
                          alt=""
                          className="caret"
                          style={{
                            transform: "rotate(360deg)",
                            transition: "all 0.5s ease",
                          }}
                        />
                      ) : (
                        <img
                          src={nav_caret}
                          alt=""
                          className="caret"
                          style={{
                            transition: "all 0.5s ease",
                          }}
                        />
                      )}
                    </div>
                  )}
                </>
              }

              {showDropdown1 && (
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
            <div className="solutions-link">
              <div
                className="solutions-links-title"
                onClick={() => setShowDropdown2(!showDropdown2)}
              >
                <span>Solutions</span>
                {showDropdown2 ? (
                  <img
                    src={nav_caret}
                    alt=""
                    className="caret"
                    style={{
                      transform: "rotate(360deg)",
                      transition: "all 0.5s ease",
                    }}
                  />
                ) : (
                  <img
                    src={nav_caret}
                    alt=""
                    className="caret"
                    style={{
                      transition: "all 0.5s ease",
                    }}
                  />
                )}
              </div>

              {showDropdown2 && (
                <div className="solutions-dropdown">
                  <div className="first-block">
                    <span className="top-snippet">BY TEAM SIZE</span>
                    <div className="solutions-dropdown-link">
                      <span className="title">Enterprise</span>
                      <span className="title">Small Enterprise</span>
                      <span className="title">Personal</span>
                    </div>
                  </div>
                  <div className="second-block">
                    <span className="top-snippet">BY TEAM FUNCTION</span>
                    <div className="solutions-dropdown-link">
                      <span className="title"> Design</span>
                      <span className="title">Engineering</span>
                      <span className="title">Product</span>
                      <span className="title">Managers</span>
                    </div>
                  </div>
                  <div className="third-block">
                    <span className="top-snippet">NOTION FOR</span>
                    <div className="solutions-dropdown-link">
                      <span className="title"> Startups</span>
                      <span className="title">Remote work</span>
                      <span className="title">Education</span>
                      <span className="title">Nonprofits</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="resources-link">
              <div
                className="resources-links-title"
                onClick={() => setShowDropdown3(!showDropdown3)}
              >
                <span>Resources</span>
                {showDropdown3 ? (
                  <img
                    src={nav_caret}
                    alt=""
                    className="caret"
                    style={{
                      transform: "rotate(360deg)",
                      transition: "all 0.5s ease",
                    }}
                  />
                ) : (
                  <img
                    src={nav_caret}
                    alt=""
                    className="caret"
                    style={{
                      transition: "all 0.5s ease",
                    }}
                  />
                )}
              </div>

              {showDropdown3 && (
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
              )}
            </div>
            <div className="downloads-link">
              <div
                className="downloads-links-title"
                onClick={() => setShowDropdown4(!showDropdown4)}
              >
                <span>Downloads</span>
                {showDropdown4 ? (
                  <img
                    src={nav_caret}
                    alt=""
                    className="caret"
                    style={{
                      transform: "rotate(360deg)",
                      transition: "all 0.5s ease",
                    }}
                  />
                ) : (
                  <img
                    src={nav_caret}
                    alt=""
                    className="caret"
                    style={{
                      transition: "all 0.5s ease",
                    }}
                  />
                )}
              </div>

              {showDropdown4 && (
                <div className="download-dropdown">
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
              )}
            </div>
            <div className="pricing-link">
              <div className="pricing-links-title">
                <span>Pricing</span>
              </div>
            </div>
            <div className="request-demo-link">
              <div className="request-demo-links-title">
                <span>Request a demo</span>
              </div>
            </div>
            <button className="get-notion-free-btn">Get Notion Free</button>
            <button className="log-in-btn">Log In</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
