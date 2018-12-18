import * as React from 'react';
import { Component } from 'react';
import './style.css';

interface Props {
    menu: string;
    name: string;
}

export default class LunchPlace extends Component<Props> {
    render() {
        const { menu, name, } = this.props;
        return (
            <div className="lunchList">
                <h3 className="h3">{name}</h3>
                <div className="resp-container">
                    <iframe src={menu} className="iframe"></iframe>
                </div>
            </div>
        )
    }
}