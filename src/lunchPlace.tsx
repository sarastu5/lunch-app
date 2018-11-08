import * as React from 'react';
import { Component } from 'react';
import './style.css';

interface Props {
    address: string;
    menu: Array<string>;
    name: string;
}

export default class LunchPlace extends Component<Props> {
    public render() {
        const { address, menu, name, } = this.props;
        return (
            <div id="lunchList">
                <h3 className="lunchPlaceTitle">{name}</h3>
                <p className="lunchPlaceAddress">{address}</p>
                <div className="lunchPlaceMenu">
                    {menu.map((menuItem) =>
                        <p key={menuItem}>{menuItem}</p>
                    )}
                </div>
            </div>
        )
    }
}