import React, { Component } from "react";

import {
  Brief,
  House,
  Logout,
  OpenBook,
  OpenParcel,
  Postcard,
  Settings,
  User,
} from "../../../assets";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    this.mm("dispose");
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }

    btn.addEventListener("click", toggleFunc);
  }
  render() {
    /// Path
    const path = window.location.pathname;

    /// Active menu
    let deshBoard = ["", "analytics", "companies", "statistics"],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
      ],
      charts = [
        "chart-morris",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-peity",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-jqvmap",
        "uc-noui-slider",
      ],
      widget = ["widget"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = ["table-bootstrap-basic", "table-datatable-basic"];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li
              className={`${
                deshBoard.includes(path.slice(1)) ? "mm-active" : ""
              }`}
            >
              <Link className="has-arrow ai-icon" to="#">
                {/* <i className="flaticon-381-home"></i> */}

                <img className="imgicon" src={House} alt="icon" />
                <span className="nav-text">Dashboard</span>
              </Link>
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
              </ul>
            </li>
            <li className={`${app.includes(path.slice(1)) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#">
                {/* <i className="flaticon-381-television"></i> */}
                <img className="imgicon" src={Brief} alt="icon" />
                <span className="nav-text">Pages</span>
              </Link>
              <ul>
                <li>
                  <Link to="/all-Pages">All Pages</Link>
                </li>
                <li>
                  <Link to="/create-pages">Create Pages</Link>
                </li>
                <li>
                  <Link to="/edit-pages">Edit Pages</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${charts.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link className="has-arrow ai-icon" to="#">
                {/* <i className="flaticon-381-controls-3"></i> */}
                <img className="imgicon" src={OpenBook} alt="icon" />
                <span className="nav-text">Posts</span>
              </Link>
              <ul>
                <li>
                  <Link to="/posts">Create Post</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${
                bootstrap.includes(path.slice(1)) ? "mm-active" : ""
              }`}
            >
              <Link className="has-arrow ai-icon" to="#">
                {/* <i className="flaticon-381-internet"></i> */}
                <img className="imgicon" src={OpenParcel} alt="icon" />
                <span className="nav-text">Commerce</span>
              </Link>
              <ul>
                <li>
                  <Link to="/commerce">New Commerce</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${
                plugins.includes(path.slice(1)) ? "mm-active" : ""
              }`}
            >
              <Link className="has-arrow ai-icon" to="#">
                {/* <i className="flaticon-381-heart"></i> */}
                <img className="imgicon" src={User} alt="icon" />
                <span className="nav-text">Publisher</span>
              </Link>
              <ul>
                <li>
                  <Link to="/all-publisher">All Publisher</Link>
                </li>
                <li>
                  <Link to="/Create-publisher">Create Publisher</Link>
                </li>
                <li>
                  <Link to="/edit-publisher">Edit Publisher</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${widget.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link to="widget-basic" className="has-arrow ai-icon">
                {/* <i className="flaticon-381-settings-2"></i> */}
                <img className="imgicon" src={Postcard} alt="icon" />
                <span className="nav-text">Newsletter</span>
              </Link>
              <ul>
                <li>
                  <Link to="/newsletter">Create Newsletter</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${forms.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link className="has-arrow ai-icon" to="#">
                {/* <i className="flaticon-381-notepad"></i> */}
                <img className="imgicon" src={Settings} alt="icon" />
                <span className="nav-text forms">Settings</span>
              </Link>
              <ul>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${table.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link className="ai-icon" to="#">
                {/* <i className="flaticon-381-network"></i> */}
                <img className="imgicon" src={Logout} alt="icon" />
                <span className="nav-text">Logout</span>
              </Link>
            </li>
            <li>
              <Link className="has-arrow ai-icon" to="#">
                <i className="flaticon-381-layer-1"></i>
                <span className="nav-text">Pages</span>
              </Link>
              <ul>
                <li>
                  <Link to="/page-register">Register</Link>
                </li>
                <li>
                  <Link to="/page-login">Login</Link>
                </li>
                <li>
                  <Link className="has-arrow" to="#">
                    Error
                  </Link>
                  <ul>
                    <li>
                      <Link to="/page-error-400">Error 400</Link>
                    </li>
                    <li>
                      <Link to="/page-error-403">Error 403</Link>
                    </li>
                    <li>
                      <Link to="/page-error-404">Error 404</Link>
                    </li>
                    <li>
                      <Link to="/page-error-500">Error 500</Link>
                    </li>
                    <li>
                      <Link to="/page-error-503">Error 503</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/page-lock-screen">Lock Screen</Link>
                </li>
              </ul>
            </li>
          </MM>
          {/* <div className="plus-box">
					<p className="fs-13 font-w300 mb-4">Organize your menus through button bellow</p>
					<Link className="btn bg-white text-black btn-rounded d-block" to="#">+Add Menus</Link>
				</div>
               <div className="copyright">
                  <p>
                     <strong>Hubit CMS</strong> ©All Rights Reserved
                  </p>
                  <p>by Hubit Team</p>
               </div> */}
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
