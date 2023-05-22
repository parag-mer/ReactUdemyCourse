import React from 'react';

import './Modal.css';


export default function modal(props)
{
    const cssApply = props.show === 'entering' ? 'ModalOpen' : props.show === 'exiting' ? 'ModalClose' : null
    
    return(
        <div className={`Modal ${cssApply}`}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
    );
}
