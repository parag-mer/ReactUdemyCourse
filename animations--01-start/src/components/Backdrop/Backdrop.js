import React from 'react';

import './Backdrop.css';

export default function backdrop(props)
{
    const cssApply = props.show ? 'Backdrop' : 'BackdropClose';
    
    return(
        <div className={cssApply}></div>
    );
}
