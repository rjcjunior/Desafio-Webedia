import React, { Component } from 'react';
import './headerSearch.css';

class HeaderSearch extends Component {

    constructor(){ //Construtor
        super();
        this.state = {
            search: '' 
        };
    }

    handleSearchChange(e) {
        this.setState({ value: e.target.search });
    }
    render(){
        return(
        <form className="formSearch">
            <input
            className="headerSearch"
            placeholder="Pesquisar"
            type="search"
            value={this.state.search}           
            onChange={this.handleSearchChange}
            autofocus/>
        </form>
        );
    }

}

export default HeaderSearch;
