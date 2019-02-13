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
        this.clickSearchOpen = this.clickSearchOpen.bind(this);
        this.clickMenuClose = this.clickMenuClose.bind(this);
        this.OnParametersChange = this.OnParametersChange.bind(this);        
    }
    clickMenuOpen(e) {
        e.preventDefault();
        this.state.mobileOpen ? this.setState({ mobileOpen: false, overlay:false }) : this.setState({ mobileOpen: true, overlay:true });
        this.render();
    }
    clickSearchOpen(e) {
        e.preventDefault();
        this.state.searchBar ? this.setState({ searchBar: false}) : this.setState({ searchBar: true });
        this.render();
    }
    clickMenuClose(e) {
        e.preventDefault();
        this.state.mobileOpen ? this.setState({ mobileOpen: false, overlay:false }) : this.setState({ searchBar: false });
        this.render();
    }
    OnParametersChange(textSearch) {
        let params = new URLSearchParams(document.location.search.substring(1));
        let country = params.get("country");
        let page = params.get("page");
        this.props.request(country, textSearch, page);
    }
    render(){
        return(
            <header>
                <MenuIcon
                    clickMenu = {this.clickMenuOpen}
                    searchOpen = {this.state.searchBar}
                />
                <WebediaLogo
                    attrLogo = {logoWebedia}
                    searchOpen = {this.state.searchBar}
                />
                <CloseIcon
                    closeMenu = {this.state.mobileOpen}
                    closeSearch = {this.state.searchBar}
                    close = {this.clickMenuClose}
                />
                <HeaderSearch
                    openSearch = {this.state.searchBar}
                    textSearch = {this.state.textSearch}
                    OnParametersChange = {this.OnParametersChange}
                />
                <HeaderList 
                    mobileOpen = {this.state.mobileOpen}
                />
                <SearchIcon
                    clickSearch = {this.clickSearchOpen}
                    searchOpen = {this.state.searchBar}
                />
                <Overlay 
                    overlay = {this.state.overlay}
                />
            </header>
        );
    }
}

export default Header;
