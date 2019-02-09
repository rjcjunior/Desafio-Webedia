import React, { Component } from 'react';
import './footer.css';
import WebediaLogo from '../WebediaLogo/webedialogo';

class Footer extends Component {

    render(){
        return(
            <footer>
                <WebediaLogo 
                    atrrHref = "http://www.webedia.com.br/"
                    atrrTarget = "_blank"
                />
            </footer>
        );
    }
}

export default Footer;
