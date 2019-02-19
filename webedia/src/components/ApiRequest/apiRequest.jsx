import React, { Component } from 'react';
import './apiRequest.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Card from '../Card/card';
import ApiError from './ApiError/apiError';
import LoadingApi from './LoadingApi/loadingApi'
import LoadingImg from '../../assets/imgs/logoWebedia.png'
import Pagination from '../Pagination/pagination'

class ApiRequest extends Component {
    
    constructor(props) {
        super(props);
        let params = new URLSearchParams(document.location.search.substring(1));
        this.state = {
          loading: true,
          country: params.get("country"),
          page: params.get("page"),
          textSearch: params.get("search"),
          news: [],
          totalNews:0
        };
        this.request = this.request.bind(this);
    }

    async request(country, textSearch, page, pageSize){
        let url = "https://newsapi.org/v2/";
        let apiKey = "&apiKey=219655f1a9e245a99a21594a0af15de8";
        if (!this.state.loading){
            this.setState({
                loading:true
            }); 
       }
        if (country === null && textSearch=== null){
            url += "top-headlines?country=br";
        }
        else{
            if(textSearch!=null){ 
                if (country != null) {
                    url += "top-headlines?q=" + textSearch + "&country=" + country;
                }    
                else{
                    url += "everything?q=" + textSearch;
                }
            }
            else if (country != null) {
                url += "top-headlines?country=" + country;
            }
        }
        if (pageSize!=null){
            url += "&pagesize=" + pageSize; 
        }
        if (page!=null){
            url += "&page=" + page;
        }
        url += apiKey;
        console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        await this.setState({
                loading:false,
                status: json.status,
                country: country,
                page: page,
                news: json.articles,
                textSearch: textSearch,
                totalNews: json.totalResults
        });
        var newURL = window.location.href.split("?")[0]; //Limpar URL depois de pegar os parametros para não haver confusão na requisições posteriores
        window.history.pushState('object', document.title, newURL);
    }

    componentDidMount() { //Inicializar request
        this.request(this.state.country, this.state.textSearch, this.state.page, 7);
    }
    
    render() {
        return (
            <div className="App">
                <Header
                    request = {this.request}
                />
                {this.state.loading ?(

                    <LoadingApi
                        attrLogo = {LoadingImg}
                    />)
                    :
                    <div>
                        {this.state.status ==='error' || (this.state.news === undefined || this.state.news === null || this.state.news.length === 0) ?
                            <ApiError/>
                        :
                            <div>
                                <Card 
                                    news = {this.state.news}
                                />
                                <Pagination
                                    request = {this.request}
                                    country = {this.state.country}
                                    page = {this.state.page}
                                    totalNews = {this.state.totalNews}
                                    textSearch = {this.state.textSearch}
                                />     
                            </div>
                        }
                    </div>
                }

                <Footer />
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