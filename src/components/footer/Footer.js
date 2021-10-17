import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import "./Footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-contact">
                        <a className="social" target="_blank" rel="noreferrer"  href="https://github.com/ShijinRaj0"><FontAwesomeIcon icon={['fab','github']} size="lg" /></a>
                        <a  className="social" target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/shijin-raj-4791a3200"><FontAwesomeIcon icon={['fab','linkedin']} size="lg" /></a>
                        <a  className="social" target="_blank" rel="noreferrer"  href="https://facebook.com/shijinraj.arakkan"><FontAwesomeIcon icon={['fab','facebook']} size="lg" /></a>
                </div>
            </div>
        )
    }
}
