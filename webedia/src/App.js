import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';

class App extends Component {
    render(){
        return(
            <div className="App">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;
