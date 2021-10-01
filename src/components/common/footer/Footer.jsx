import React from 'react';

import './Footer.css';

function Footer () {

    return (
        <section className="footer">
            <hr className="footer-separator"/>
            <section className="footer-social-media">
                <a href="" target="_blank" rel="noopener noreferrer"> Social Linkedin</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Software Engineer Bogdan
                    </section>
                    <section className="footer-info__returns">
                        Return Policy
                        <br />
                        Delivery
                    </section>
                </section>
                <section lassName="footer-info-center">
                    <section className="footer-info__email">
                        reactapp@mail.com
                    </section>
                    <section className="footer-info__terms">
                        Terms and Conditions
                        <br />
                        Copyright
                    </section>
                </section>
                <section lassName="footer-info-right">
                    <section className="footer-info__number">
                        99999999999
                    </section>
                    <section className="footer-info__contact">
                        My Story
                        <br />
                        Contact Us
                    </section>
                </section>
            </section>
            <hr className="footer-separator"/>
        </section>
    )
}

export default Footer;