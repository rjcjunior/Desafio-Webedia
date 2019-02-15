import React from 'react';
import PropTypes from 'prop-types';
import './closeIcon.css';

const CloseIcon  = ({ atrrbAlt, close, closeMenu, closeSearch }) => (
    <div className={"closeButton " + (closeMenu ? 'closeMenu' : '') + (closeSearch ? 'closeSearch': '') }>
        <button className="closeIcon" alt={atrrbAlt} onClick={close}>
            X
        </button>
    </div>

);

CloseIcon.propTypes = {
    atrrbAlt: PropTypes.string.isRequired,
};

CloseIcon.defaultProps = {
    atrrbAlt:"Aperte para fechar o menu",
};



export default CloseIcon;

