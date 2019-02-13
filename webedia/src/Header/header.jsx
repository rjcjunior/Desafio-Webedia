import React, { Component } from 'react';
import './header.css';
import WebediaLogo from '../WebediaLogo/webedialogo';
import HeaderList from './HeaderList/headerList';
import HeaderSearch from './HeaderSearch/headerSearch';
import SearchIcon from './HeaderSearch/searchIcon/searchIcon'
import MenuIcon from './MenuIcon/menuIcon'
import logoWebedia from '../assets/imgs/logoWebedia.png';


class Header extends Component {

    constructor(){ //Construtor
        super();
        this.state = {
            mobileOpen: false, 
            searchBar: false 
        };
        this.clickMenuOpen = this.clickMenuOpen.bind(this);
    }
    clickMenuOpen(e) {
        e.preventDefault();
        this.state.menu ? this.setState({ mobileOpen: false }) : this.setState({ mobileOpen: true });
        this.render();
    }
    render(){
        return(
            <header>
                <MenuIcon
                    clickMenu = {this.clickMenuOpen}
                />
                <WebediaLogo
                    attrLogo = {logoWebedia}
                />
                <HeaderSearch/>
                <HeaderList 
                    mobileOpen = {this.state.mobileOpen}
                />
                <SearchIcon/>
            </header>
        );
    }
}

export default Header;
