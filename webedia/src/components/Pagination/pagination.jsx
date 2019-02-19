import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {

    constructor(props){ 
        super(props);
        let url = window.location.origin + "/?"
        if (this.props.country !== null && this.props.country !== undefined){
            url += "country=" + this.props.country;
        }
        if (this.props.search !== null && this.props.search !== undefined){
            url += "&search=" + this.props.search;
        }
        let numberOfPages = Math.ceil(this.props.totalNews/7); 
        if (numberOfPages>100){ //Conta gratuita só permite resultados até a pagina 100 
            numberOfPages = 100;
        }
        this.state = {
            numberOfPages: numberOfPages,
            url: url
        };
        this.getPagination();
    }

    getPagination(){ //Algoritmo para a paginação
        let pages = [];
        pages.push(1); //Primeira pagina
        let numberOfPages = parseInt(this.state.numberOfPages);
        let pageActual = this.props.page;
        if (this.props.page === null || this.props.page === undefined){
            pageActual = 1;
        }
        else{
            pageActual = parseInt(this.props.page);
        }
        if(numberOfPages !== 1){
            if (numberOfPages <= 5){ //Somente 5 paginas 
                for (let index = 2; index <= numberOfPages; index++) {
                    pages.push(index);
                }
            }
            else{ //Se tiver mais de 5 paginas
                if(pageActual !== numberOfPages){ //Se a pagina atual não for a ultima
                    if(pageActual === (numberOfPages - 1)){ //Se a atual for a penultima
                        for (let index = 0; index <= 2; index++) {
                            pages.push(pageActual -( 2 - index));
                        }                                
                    }
                    else{ //Se a atual nao for a penultima
                        if(pageActual === 1){  //Se a atual for a primeira
                            for (let index = 1; index <= 3; index++) {
                                pages.push(1 + index);
                            }                                    
                        }
                        else{ //Se a atual não for a primeira
                            if(pageActual === (2)){ //Se a atual for a segunda
                                pages.push(pageActual);
                                pages.push(pageActual + 1);
                                pages.push(pageActual + 2);
                            }
                            else{ //Se não for a segunda
                                pages.push(pageActual - 1);
                                pages.push(pageActual);
                                pages.push(pageActual + 1);
                            }
                        }
                    }
                    pages.push(numberOfPages) //Imprimir ultima pagina
                }
                else{ //Se a atual for a ultima pagina
                    for (let index = 0; index <= 3; index++) {
                        pages.push(pageActual - ( 3 - index));
                    }
                }
            }
        } 
        return pages;       
    }

    OnPageChange(e, page) {
        if (page === '' ||page === null || page === undefined){
            page = 1;
        }
        e.preventDefault();
        this.props.request(this.props.country, this.props.textSearch, page, 7);
    }

    render(){
        return(
            <div className="paginationDiv">        
            {this.getPagination().map((item,i) => (
                <span key={"pItem" + item} className={"paginationItem " +  (parseInt(this.props.page) === item || (this.props.page === null && (i+1) === 1) ? 'active': '')} onClick={e => this.OnPageChange(e, item)}  >{item}</span>              
            ))}
            </div>
        );
    }

}

export default Pagination;
