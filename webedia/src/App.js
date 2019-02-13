import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';
import ApiRequest from './ApiRequest/apiRequest'

class App extends Component {
    constructor() {
        super();
        let params = new URLSearchParams(document.location.search.substring(1));
        this.state = {
            country: params.get("country"),
            page: params.get("page"),
            textSearch: params.get("search"),
        };
    }
    render(){
        return(
            <div className="App">
                <Header />
                <Footer />
                <ApiRequest
                    country = {this.state.country}
                    page = {this.state.page}
                    textSearch = {this.state.textSearch}
                />
            </div>
        );
    }
}

export default App;
