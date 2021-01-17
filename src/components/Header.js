import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="covid-update">
                <span>COVID19 Travel Advisory. Click <Link to="/">here</Link> for more information. Last Updated: December 18, 2020</span>
            </div>
            <div className="container header-container">
                <div className="row">
                    <div className="header-left-container col-6">
                        <Link to="/">
                            <img src="https://www.rbcrewards.com/res/images/logo/rbc_rewards_logo_blue.svg" alt="rbc rewards logo" />
                        </Link>
                    </div>
                    <div className="header-right-container col-6">
                        <div className="input-container">
                            <input className="header-input" type="text" placeholder="Ask your question" />

                        </div>
                        <div className="language-container">
                            <a className="language" href="#">Français</a>
                        </div>

                        <button className="join-btn header-btn">Join Now</button>
                        <button className="signIn-btn header-btn">Sign In</button>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">TRAVEL <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <button className="btn shop-redeem-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>SHOP & REDEEM</span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Shop & Redeem Home</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Gift Cards</a>
                                    <a className="dropdown-item" href="#">Apple</a>
                                    <a className="dropdown-item" href="#">Best Buy</a>
                                    <a className="dropdown-item" href="#">Merchandise</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Pay Credit Card with Points</a>
                                    <a className="dropdown-item" href="#">Financial Rewards</a>
                                    <a className="dropdown-item" href="#">Pay Bills with Points</a>
                                    <a className="dropdown-item" href="#">Donate to Charity</a>
                                    <a className="dropdown-item" href="#">Plant a Tree</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PROMOTIONS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MANAGE POINTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOW IT WORKS</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header;