import React, { Component } from 'react';
import './footer.css';
import WebediaLogo from '../WebediaLogo/webedialogo';
import logoWebedia from '../../assets/imgs/logoWebedia.png';

class Footer extends Component {

    render(){
        return(
            <footer>
                <WebediaLogo 
                    atrrHref = "http://www.webedia.com.br/"
                    atrrTarget = "_blank"
                    attrLogo = {logoWebedia}
                />
            </footer>
        );
    }
}

export default Footer;
