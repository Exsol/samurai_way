import React from 'react';
import s from './Button.module.css'

type buttonPropsType = {
    name: string
    className?: string | undefined
    callback: () => void
}

const Button = ({name,className, ...props}: buttonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    console.log(className)
    const buttonClassName = `${className ? className : s.btnDefault}`
    return (
        <button className={buttonClassName} onClick={onClickHandler}>
            {name}
        </button>
    );
};

export default Button;