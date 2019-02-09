import React from 'react';
import PropTypes from 'prop-types';
import './webedialogo.css';
import logoWebedia from '../assets/imgs/logoWebedia.png';


const WebediaLogo  = ({ atrrbAlt, atrrHref, atrrTarget }) => (
    <a href={atrrHref} target={atrrTarget}>
        <img className="logo" alt={atrrbAlt} src={logoWebedia} >
        </img>
    </a>

);

WebediaLogo.propTypes = {
    atrrbAlt: PropTypes.string.isRequired,
    atrrHref: PropTypes.string.isRequired,
    atrrTarget: PropTypes.string.isRequired
};

WebediaLogo.defaultProps = {
    atrrHref: '/',
    atrrTarget: '_self',
    atrrbAlt:"Logo do Webedia"
};


export default WebediaLogo;
