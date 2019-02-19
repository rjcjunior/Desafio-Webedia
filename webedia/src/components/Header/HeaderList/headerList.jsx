import React, { Component } from 'react';
import './headerList.css';

const  itensList = [
                    {country: "", text:"Notícias em destaque"},
                    {country: "br", text:"Notícias do Brasil"},
                    {country: "us", text:"Notícias do EUA"},
                    {country: "ar", text:"Notícias da Argentina"},
                    {country: "fr", text:"Notícias da França"}
                ]

class HeaderList extends Component {

    OnCountryChange(e, country) {
        if (country === '' ||country === null || country === undefined){
            country = "br";
        }
        e.preventDefault();
        this.props.OnParametersChange2(country);
    }

    render(){
        return(
            <div className={"headerList " +  (this.props.mobileOpen ? 'responsiveMenu': '')} >
                <ul>
                    {itensList.map(({ country, text }) => (                        
                        <li  key={country} id={country!=='' ? "item-"+country : 'item-des'} className="headerItem">
                            <span data-hover={text} onClick={e => this.OnCountryChange(e, country)}>{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default HeaderList;
