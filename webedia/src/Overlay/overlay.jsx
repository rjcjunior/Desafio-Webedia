import React from 'react';
import './overlay.css'

const Overlay  = ({ overlay }) => (
    <div className={"overlay" + (overlay ? 'True' : 'False') }>
    </div>

);




export default Overlay;

