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

    render(){
        return(
            <div className={"headerList " +  (this.props.mobileOpen ? 'responsiveMenu': '')} >
                <ul>
                    {itensList.map(({ country, text }) => (
                        
                        <li  key={country} id={country!=='' ? "item-"+country : 'item-des'} className="headerItem">
                            <a href={country!=='' ? "?country=" + country : '/'}>{text}</a>
                        </li>
                     ))}
                </ul>
            </div>
        );
    }

}

export default HeaderList;
