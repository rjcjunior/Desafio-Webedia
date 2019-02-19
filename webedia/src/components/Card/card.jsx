import React, { Component } from 'react';
import './card.css';

function splitText(text, index){
    if (index>=2 && index<=4){
        return text.length > 50 ? text.substr(0, 50)+'...':text.substr(0, 50);
    }
    else{
        return text.length > 100 ? text.substr(0, 100)+'...':text.substr(0, 100);
    }
}

class Card extends Component {

    render(){
        return(
            <section className="newsSection">
                {this.props.news.map(({ author, description, publishedAt, title, url, urlToImage}, index) => (
                    <a key={title} className={"newsCard" + (index>=2 && index<=4 ? ' cardMiddle': '')} href={url} target="_blank" rel="noopener noreferrer">
                        <div className="newsImageDiv">
                            {urlToImage != null ?
                                <img className="newsImage" src={urlToImage} alt="Imagem da noticia">
                                </img>
                            : ''}
                        </div>
                        <div className="newsBody">
                            <span className="newsDate">{publishedAt.split("T", 1).toString().split("-").reverse().toString().replace(/,/g, "/")}</span>
                            {title != null ?
                                <h5 className="newsTitle">{ splitText(title, index)}</h5>
                            : ''}
                            {description != null ?
                                <p className="newsText">{splitText(description, index)}</p>
                            : ''}
                            {author != null ?
                                <span className="newsAuthor">Por: {splitText(author, index)}</span>
                            : ''}
                        </div>
                    </a>
                ))}
            </section>                
            );
    }

}

export default Card;
