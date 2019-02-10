import React, { Component } from 'react';
import './header.css';
import WebediaLogo from '../WebediaLogo/webedialogo';
import HeaderList from '../HeaderList/headerList';

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
                <HeaderList />
            </header>
        );
    }
}

export default Header;
