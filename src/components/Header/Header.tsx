import React, {Component} from 'react';
import s from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={s.header}>
                <img src='https://allsoft.ru/upload/programs_pictograms/48c/48cbe5dc41447681edc18fed95458177.png'/>
            </header>
        );
    }
}

export default Header;