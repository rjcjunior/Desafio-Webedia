import React, { Component } from 'react';
import './headerSearch.css';

class HeaderSearch extends Component {

    constructor(props){ //Construtor
        super(props);
        this.state = {
            search: '',
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleSearchChange(e) {
        this.setState({ search: e.target.value });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.OnParametersChange(this.state.search);
    }

    render(){
        return(
            <form className={"formSearch " +  (this.props.openSearch ? 'searchOpened': '')} 
             onSubmit={this.handleFormSubmit} >

                <input
                className="headerSearch"
                placeholder="Pesquisa"
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
