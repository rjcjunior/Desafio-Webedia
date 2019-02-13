import React, { Component } from 'react';
import './header.css';
import WebediaLogo from '../WebediaLogo/webedialogo';
import HeaderList from './HeaderList/headerList';
import HeaderSearch from './HeaderSearch/headerSearch';
import SearchIcon from './HeaderSearch/searchIcon/searchIcon'
import MenuIcon from './MenuIcon/menuIcon'
import CloseIcon from './CloseIcon/closeIcon'
import logoWebedia from '../assets/imgs/logoWebedia.png';
import Overlay from '../Overlay/overlay'

class Header extends Component {

    constructor(){ //Construtor
        super();
        this.state = {
            overlay:false,
            mobileOpen: false,
            searchBar: false 
        };
        this.clickMenuOpen = this.clickMenuOpen.bind(this);
        this.clickMenuClose = this.clickMenuClose.bind(this);

    }
    clickMenuOpen(e) {
        e.preventDefault();
        this.state.menu ? this.setState({ mobileOpen: false, overlay:false }) : this.setState({ mobileOpen: true, overlay:true });
        this.render();
    }
    clickMenuClose(e) {
        e.preventDefault();
        this.state.mobileOpen ? this.setState({ mobileOpen: false, overlay:false }) : this.setState({ searchBar: false });
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
                <CloseIcon
                    closeMenu = {this.state.mobileOpen}
                    closeSearch = {this.state.searchBar}
                    close = {this.clickMenuClose}
                />
                <HeaderSearch/>
                <HeaderList 
                    mobileOpen = {this.state.mobileOpen}
                />
                <SearchIcon/>
                <Overlay 
                    overlay = {this.state.overlay}
                />
            </header>
        );
    }
}

export default Header;
