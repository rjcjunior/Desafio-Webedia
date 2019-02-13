import React, { Component } from 'react';
import './apiRequest.css';

class ApiRequest extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          news: []
        };
        this.request = this.request.bind(this);
    }

    async request(country,textSearch, page){
        let url = "https://newsapi.org/v2/";
        let apiKey = "&apiKey=df80cb7555a64838b111e56a9e3afb27";
        let pageSize = "&pageSize=7"
        if (country != null) {
            url += "top-headlines?country=" + country;
        }
        else if(textSearch==null){ 
            url += "top-headlines?country=br";
        }
        else{
            url += "everything?q=" + textSearch;
        }
        url += pageSize; 
        if (page!=null){
            url += "&page=" + page;
        }
        url += apiKey;
        const response = await fetch(url);
        const json = await response.json();
        await this.setState({
            loading: false,
            news: json.articles
        });
    }

    componentDidMount() { //Inicializar request
        this.request(this.props.country, this.props.textSearch, this.props.page);
    }
    
    render() {
        return (
          <div>
           </div>
        );
    }

}



export default ApiRequest;

/*


Busca no BR com paginação e limitação de resultados

https://newsapi.org/v2/top-headlines?
country=br&
pageSize=7&
page=3&
apiKey=df80cb7555a64838b111e56a9e3afb27


*/