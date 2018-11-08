import * as React from 'react';
import {Component} from 'react';
import LunchPlace from './lunchPlace';
import './style.css';

interface Props {
}

export default class LunchList extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.choosePlace = this.choosePlace.bind(this);
    }

    private lunchList = [
        {
            address: "Forum",
            menu: ["CHOO CHEE CURRY", "PHAD THAI GAI", "GANG KIEW WAN NEUA", "PLASALMON TOD KOP PADTAKRAI", "KHAO RAT GAENG"],
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
        var randomLunchPlace = this.lunchList[Math.floor(Math.random()*this.lunchList.length)];
        console.log(randomLunchPlace);
    }

    public render() {

        return (
            <div className="container">
                <h1 className="title">Missä syödään?</h1>
                <button type="button" className="addLunch" onClick={this.choosePlace}>Arvo paikka!</button>
                {this.lunchList.map((lunchPlace) =>
                    <LunchPlace name={lunchPlace.name} address={lunchPlace.address} menu={lunchPlace.menu} key={lunchPlace.name} />
                )}
            </div>
        )
    }
}