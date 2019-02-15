import React, { Component } from 'react';
import './card.css';

class Card extends Component {

    render(){
        return(
            <section className="newsSection">
                {this.props.news.map(({ author, description, publishedAt, title, url, urlToImage }) => (
                    <a className="newsCard" href=''>
                        <img className="newsImage" src={urlToImage} alt="Imagem da noticia">
                        </img>
                        <div className="newsBody">
                            <span className="newsDate">{publishedAt}</span>
                            <h5 className="newsTitle">{title}</h5>
                            <p className="newsText">{description}</p>
                            <span className="newsAuthor">Por: {author}</span>
                        </div>
                    </a>
                ))}
            </section>                
            );
    }

}

export default Card;
