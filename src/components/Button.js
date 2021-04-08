import React from 'react';

import classes from '../App.css';

const Button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType], "button"].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default Button;