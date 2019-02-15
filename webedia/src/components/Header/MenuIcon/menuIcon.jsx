import React from 'react';
import PropTypes from 'prop-types';
import './menuIcon.css';
import menuIcon from '../../../assets/imgs/menuIcon.png';


const MenuIcon  = ({ atrrbAlt, clickMenu, searchOpen }) => (
    <div className={"buttonMenu" + (searchOpen ? ' searchOpen': '')}>
        <img className="menuIcon" alt={atrrbAlt} src={menuIcon} onClick={clickMenu}>
        </img>
    </div>

);

MenuIcon.propTypes = {
    atrrbAlt: PropTypes.string.isRequired,
};

MenuIcon.defaultProps = {
    atrrbAlt:"Aperte para abrir o menu",
};



export default MenuIcon;

