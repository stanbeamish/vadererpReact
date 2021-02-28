import React from 'react';
import './Button.css';
import Center from '../Center/Center';

function Button(props) {
    const { variant, children, ...rest} = props;

    return (        
            <button className={`button ${variant}`} {...rest}>
                {children}
            </button>        
    )
}

export default Button;