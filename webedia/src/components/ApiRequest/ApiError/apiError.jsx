import React from 'react';
import PropTypes from 'prop-types';
import './apiError.css';
import errorImg from '../../../assets/imgs/errorImg.png';


const ApiError  = ({ msgError, msgBtnError, msgTitleError }) => (
    <div className="errorDiv">
        <div className="errorImgDiv">
            <img className="errorImg" alt="Imagem de erro" src={errorImg} />
        </div>
        <div className="errorTextsDiv">
            <h3 className="errorTitle">{msgTitleError}</h3>
            <p className="errorText">{msgError}</p>
            <a className="errorButton" href="/">{msgBtnError} </a>
        </div>
    </div>
);

ApiError.propTypes = {
    msgTitleError: PropTypes.string.isRequired,
    msgError: PropTypes.string.isRequired,
    msgBtnError: PropTypes.string.isRequired
};

ApiError.defaultProps = {
    msgTitleError: 'Oops!',
    msgError: 'Houve um problema para carregar as noticias.',
    msgBtnError: 'Tente novamente!'
};


export default ApiError; 
