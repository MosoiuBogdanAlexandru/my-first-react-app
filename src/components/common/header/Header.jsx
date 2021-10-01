import React from 'react';
import { Navbar } from '../../common';

import './Header.css';


function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top_logo">
                    <a href="/" className="header-logo">LOGO</a>
                </section>
                <section className="header-top_navbar">
                    <Navbar />
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom__phone">
                    99999999999
                </section>
                <section className="header-bottom__email">
                    reactapp@mail.com
                </section>
            </section>
        </section>
    )
}


export default Header;