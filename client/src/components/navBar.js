import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
        <header>
          <div class="container">
            <div class="header-data">
              <div class="logo">
                <a href="index.html" title="">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>

              <div class="search-bar">
                <form>
                  <input type="text" name="search" placeholder="Search..." />
                  <button type="submit">
                    <i class="la la-search" />
                  </button>
                </form>
              </div>

              <nav>
                <ul>
                  <li>
                    <NavLink to="/" >
                      <span>
                        <img src="images/icon1.png" alt="" />
                      </span>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Companies">
                      <span>
                        <img src="images/icon2.png" alt="" />
                      </span>
                      Companies
                    </NavLink>
                  </li>
                  <li>
                    <a>
                      <span>
                        <img src="images/icon3.png" alt="" />
                      </span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <NavLink to="/Profile">
                      <span>
                        <img src="images/icon4.png" alt="" />
                      </span>
                      Profiles
                    </NavLink>
                    <ul>
                      <li>
                        <a href="user-profile.html" title="">
                          User Profile
                        </a>
                      </li>
                      <li>
                        <a href="my-profile-feed.html" title="">
                          my-profile-feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <span>
                        <img src="images/icon5.png" alt="" />
                      </span>
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" class="not-box-open">
                      <span>
                        <img src="images/icon6.png" alt="" />
                      </span>
                      Messages
                    </a>
                    <div class="notification-box msg">
                      <div class="nt-title">
                        <h4>Setting</h4>
                        <a href="#" title="">
                          Clear all
                        </a>
                      </div>
                      <div class="nott-list">
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src="images/resources/ny-img1.png" alt="" />
                          </div>
                          <div class="notification-info">
                            <h3>
                              <a href="messages.html" title="">
                                Jassica William
                              </a>{" "}
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do.
                            </p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src="images/resources/ny-img2.png" alt="" />
                          </div>
                          <div class="notification-info">
                            <h3>
                              <a href="messages.html" title="">
                                Jassica William
                              </a>
                            </h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src="images/resources/ny-img3.png" alt="" />
                          </div>
                          <div class="notification-info">
                            <h3>
                              <a href="messages.html" title="">
                                Jassica William
                              </a>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="view-all-nots">
                          <a href="messages.html" title="">
                            View All Messsages
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" title="" class="not-box-open">
                      <span>
                        <img src="images/icon7.png" alt="" />
                      </span>
                      Notification
                    </a>
                    <div class="notification-box">
                      <div class="nt-title">
                        <h4>Setting</h4>
                        <a href="#" title="">
                          Clear all
                        </a>
                      </div>
                      <div class="nott-list">
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src="images/resources/ny-img1.png" alt="" />
                          </div>
                          <div class="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>{" "}
                              Comment on your project.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src="images/resources/ny-img2.png" alt="" />
                          </div>
                          <div class="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>{" "}
                              Comment on your project.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src="images/resources/ny-img3.png" alt="" />
                          </div>
                          <div class="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>{" "}
                              Comment on your project.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src="images/resources/ny-img2.png" alt="" />
                          </div>
                          <div class="notification-info">
                            <h3>
                              <a href="#" title="">
                                Jassica William
                              </a>{" "}
                              Comment on your project.
                            </h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="view-all-nots">
                          <a href="#" title="">
                            View All Notification
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>

              <div class="menu-btn">
                <a href="#" title="">
                  <i class="fa fa-bars" />
                </a>
              </div>
              <div class="user-account">
                <div class="user-info">
                  <img src="images/resources/user.png" alt="" />
                  <a href="#" title="">
                    John
                  </a>
                  <i class="la la-sort-down" />
                </div>
                <div class="user-account-settingss">
                  <h3>Online Status</h3>
                  <ul class="on-off-status">
                    <li>
                      <div class="fgt-sec">
                        <input type="radio" name="cc" id="c5" />
                        <label for="c5">
                          <span />
                        </label>
                        <small>Online</small>
                      </div>
                    </li>
                    <li>
                      <div class="fgt-sec">
                        <input type="radio" name="cc" id="c6" />
                        <label for="c6">
                          <span />
                        </label>
                        <small>Offline</small>
                      </div>
                    </li>
                  </ul>
                  <h3>Custom Status</h3>
                  <div class="search_form">
                    <form>
                      <input type="text" name="search" />
                      <button type="submit">Ok</button>
                    </form>
                  </div>

                  <h3>Setting</h3>
                  <ul class="us-links">
                    <li>
                      <a href="profile-account-setting.html" title="">
                        Account Setting
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Faqs
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                  <h3 class="tc">
                    <a href="#" title="">
                      Logout
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
  }
}
export default NavBar;
