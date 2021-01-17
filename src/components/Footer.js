import React from 'react';
import '../css/Footer.css';
import footerLogo from '../img/rbc-footer-logo.svg';

function Footer() {
    return (
        <footer>
            <img src={footerLogo} alt="RBC Rewards" height="30px" />
                <br /><br />
                <p>© My Forest, 2021. Thank you for making a difference!</p>
        </footer>
    )
}

export default Footer;