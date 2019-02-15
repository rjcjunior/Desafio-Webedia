import React from 'react';
import PropTypes from 'prop-types';
import './searchIcon.css';
import searchIcon from '../../../../assets/imgs/searchIcon.png';


const SearchIcon  = ({ atrrbAlt, clickSearch, searchOpen }) => (
    <div className={"buttonSearch" + (searchOpen ? ' searchOpen': '')}>
        <img className="searchIcon" alt={atrrbAlt} src={searchIcon} onClick={clickSearch} >
        </img>
    </div>

);

SearchIcon.propTypes = {
    atrrbAlt: PropTypes.string.isRequired,
};

SearchIcon.defaultProps = {
    atrrbAlt:"Aperte para pesquisar",
};



export default SearchIcon;

