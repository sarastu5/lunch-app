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
            <div id="lunchList">
                <h3 className="lunchPlaceTitle">{name}</h3>
                <p className="lunchPlaceMenu">{menu}</p>
            </div>
        )
    }
}