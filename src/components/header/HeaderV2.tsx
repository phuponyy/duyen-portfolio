"use client";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import useStickyMenu from "@/hooks/useStickyMenu";
import useSidebarMenu from "@/hooks/useSidebarMenu";

const HeaderV2 = () => {
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const isMenuSticky = useStickyMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-box navbar-default validnavs navbar-sticky on no-full ${isMenuSticky ? "sticked" : ""} ${isOpen ? "navbar-responsive" : ""}`}
        >
          <div className="top-search">
            <div className="container-xl">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>
          </div>
          <div className="container nav-box d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={openMenu}
              >
                <i className="fa fa-bars" />
              </button>
              <Link className="navbar-brand" href="/">
                <Image src={logo} className="logo" alt="Logo" />
              </Link>
            </div>
            <div
              className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`}
              id="navbar-menu"
            >
              <Image src={logo} alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={closeMenu}
              >
                <i className="fa fa-times" />
              </button>
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li>
                  <Link href="/" className="active" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="smooth-menu" href="/service">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="smooth-menu" href="/resume">
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                    className="smooth-menu"
                    href="/projects"
                    onClick={closeMenu}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="smooth-menu" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <div className="attr-right">
                <div className="attr-nav attr-box">
                  <ul>
                    <li className="button">
                      <Link className="smooth-menu" href="/contact">
                        {`Let's Talk`} <i className="fas fa-comment-alt" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
          ></div>
        </nav>
      </header>
    </>
  );
};

export default HeaderV2;
