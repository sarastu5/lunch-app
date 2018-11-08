import * as React from 'react';
import { Component } from 'react';
import LunchPlace from './LunchPlace';
import './style.css';

interface Props {
}

interface State {
    lunchToday: any;
}

export default class LunchList extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.choosePlace = this.choosePlace.bind(this);
        this.state = { lunchToday: this.lunchList[Math.floor(Math.random() * this.lunchList.length)] };
    }

    private lunchList = [
        {
            address: "Forum",
            menu: ["Pelle"],
            name: "Bangkok9",
        },

        {
            address: "Forum",
            menu: ["Kanabiittejä"],
            name: "Tamarin",
        },

        {
            address: "Lähellä",
            menu: ["Burgeria"],
            name: "Kiila",
        }
    ];

    private choosePlace() {
        var randomLunchPlace = this.lunchList[Math.floor(Math.random() * this.lunchList.length)];
        this.setState(() => ({
            lunchToday: randomLunchPlace
        }))
    }

    public render() {

        return (
            <div className="container">
                <button type="button" className="addLunch" onClick={this.choosePlace}>Arvo paikka!</button>
                <LunchPlace name={this.state.lunchToday.name} menu={this.state.lunchToday.menu} address={this.state.lunchToday.address} />
            </div>
        )
    }
}