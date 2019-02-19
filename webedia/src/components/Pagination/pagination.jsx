import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {

    constructor(props){ 
        super(props);
        let url = window.location.origin + "/"
        if (this.props.country != null){
            url += "?country=" + this.props.country;
        }
        if (this.props.search != null){
            url += "&search=" + this.props.search;
        }
        this.state = {
            numberOfPages: Math.ceil(this.props.totalNews/7),
            url: url
        };
        this.getPagination();
    }

    getPagination(){ //Algoritmo para a paginação
        console.log(1); //Primeira pagina
        let numberOfPages = parseInt(this.state.numberOfPages);
        let pageActual = parseInt(this.props.page);
        if(numberOfPages != 1){
            if (numberOfPages <= 5){ //Somente 5 paginas 
                for (let index = 2; index <= numberOfPages; index++) {
                    console.log(index);
                }
            }
            else{ //Se tiver mais de 5 paginas
                if(pageActual != numberOfPages){ //Se a pagina atual não for a ultima
                    if(pageActual == (numberOfPages - 1)){ //Se a atual for a penultima
                        for (let index = 0; index <= 2; index++) {
                            console.log(pageActual -( 2 - index));
                        }                                
                    }
                    else{ //Se a atual nao for a penultima
                        if(pageActual == 1){  //Se a atual for a primeira
                            for (let index = 1; index <= 3; index++) {
                                console.log(1 + index);
                            }                                    
                        }
                        else{ //Se a atual não for a primeira
                            if(pageActual == (2)){ //Se a atual for a segunda
                                console.log(pageActual);
                                console.log(pageActual + 1);
                                console.log(pageActual + 2);
                            }
                            else{ //Se não for a segunda
                                console.log(pageActual - 1);
                                console.log(pageActual);
                                console.log(pageActual + 1);
                            }
                        }
                    }
                    console.log(numberOfPages) //Imprimir ultima pagina
                }
                else{ //Se a atual for a ultima pagina
                    for (let index = 0; index <= 3; index++) {
                        console.log(pageActual - ( 3 - index));
                    }
                }
            }
        }        
    }

    render(){
        return(
            <div className="paginationDiv">        
                <a className={"paginationItem " +  (this.props.page === 1 || this.props.page === null ? 'active': '')}  href = {this.state.url + "&page=" + 1 } >1</a>              

                {this.state.numberOfPages !== 1 ?
                    <a className={"paginationItem " +  (this.props.page === this.state.numberOfPages ? 'active': '')}  href = {this.state.url + "&page=" + this.state.numberOfPages } >{this.state.numberOfPages}</a>
                    :
                    ''              
                }
            </div>
        );
    }

}

export default Pagination;
