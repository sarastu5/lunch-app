import * as React from 'react';
import './style.css';

const Header = (props: any) => (
    <div className="header">
        <h1>{props.title}</h1>
    </div>
)

export default Header;