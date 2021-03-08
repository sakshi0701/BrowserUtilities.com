import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './footer.css';

const Footer = () => {

    const toggleUp = () => {
        scroll.scrollToTop();
    }

    return (
        <div className="footer">
            © 2020-2021 BrowserUtilities.com
            <a onClick={toggleUp}> Back to top</a>
        </div>
    )
}

export default Footer
