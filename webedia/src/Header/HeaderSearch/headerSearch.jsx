import React, { Component } from 'react';
import './headerSearch.css';

class HeaderSearch extends Component {

    constructor(){ //Construtor
        super();
        this.state = {
            search: '',
            openSearch: false 
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(e) {
        this.setState({ search: e.target.search });
    }
    render(){
        return(
            <form className={"formSearch " +  (this.props.openSearch ? 'searchOpened': '')} >
                <input
                className="headerSearch"
                placeholder="Pesquisar"
                type="search"
                value={this.state.search}           
                onChange={this.handleSearchChange}
                autoFocus/>

                <input 
                className="submitSearch"
                type="submit" 
                value=""
                />
            </form>
        );
    }

}

export default HeaderSearch;
