import React, { Component } from 'react';
import './header.css';
import WebediaLogo from '../WebediaLogo/webedialogo';
import HeaderList from './HeaderList/headerList';
import HeaderSearch from './HeaderSearch/headerSearch';


class Header extends Component {

    constructor(){ //Construtor
        super();
        this.state = {
            menu: false, 
            searchBar: false 
        };
    }
    render(){
        return(
            <header>
                <WebediaLogo />
                <HeaderSearch/>
                <HeaderList />
            </header>
        );
    }
}

export default Header;
