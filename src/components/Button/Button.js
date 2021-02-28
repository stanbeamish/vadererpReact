import React from 'react';
import './Button.css';

export default function Button(props) {
    const { variant, children, ...rest} = props;

    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}
