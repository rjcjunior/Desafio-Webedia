import React from 'react';
import PropTypes from 'prop-types';
import './webedialogo.css';


const WebediaLogo  = ({ atrrbAlt, atrrHref, atrrTarget, attrLogo, searchOpen }) => (
    <a className={"linkLogo" + (searchOpen ? ' searchOpen': '')} href={atrrHref} target={atrrTarget}>
        <img className="logo" alt={atrrbAlt} src={attrLogo} >
        </img>
    </a>

);

WebediaLogo.propTypes = {
    atrrbAlt: PropTypes.string.isRequired,
    atrrHref: PropTypes.string.isRequired,
    atrrTarget: PropTypes.string.isRequired,
};

WebediaLogo.defaultProps = {
    atrrHref: '/',
    atrrTarget: '_self',
    atrrbAlt:"Logo do Webedia",
};


export default WebediaLogo;
