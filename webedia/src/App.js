import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';
import ApiRequest from './ApiRequest/apiRequest'

class App extends Component {
    render(){
        return(
            <div className="App">
                <Header />
                <Footer />
                <ApiRequest/>
            </div>
        );
    }
}

export default App;
