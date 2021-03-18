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
            <p onClick={toggleUp}>Back to top</p>
        </div>
    )
}

export default Footer
