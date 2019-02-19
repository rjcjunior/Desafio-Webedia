import React from 'react';
import PropTypes from 'prop-types';
import './loadingApi.css';

const LoadingApi  = ({ atrrbAlt, attrLogo}) => (
    <div className="loading">
        <img className="loadingImg" alt={atrrbAlt} src={attrLogo}></img>
    </div>
);

LoadingApi.propTypes = {
    atrrbAlt: PropTypes.string.isRequired,
};

LoadingApi.defaultProps = {
    atrrbAlt:"Logo do Webedia",
};



export default LoadingApi; 
