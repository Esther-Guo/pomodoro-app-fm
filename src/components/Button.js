// import './styles/Button.css';
import './styles/Button.scss';
import React from 'react';

const Button = ({ buttonClass, text, onClick } ) => {

    return (
    <button className={buttonClass} onClick={onClick}>{ text }</button>
    );
}

export default Button;