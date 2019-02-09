import React, { Component } from 'react';
import './header.css';
import WebediaLogo from '../WebediaLogo/webedialogo';

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
            </header>
        );
    }
}

export default Header;
