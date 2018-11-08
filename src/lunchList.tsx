import React, { Component } from 'react';
import './style.css';

export default class LunchList extends Component {
    render() {
        const lunchList = [
            {
                name: "Bangkok9",
                address: "Forum",
                menu: ["CHOO CHEE CURRY", "PHAD THAI GAI", "GANG KIEW WAN NEUA", "PLASALMON TOD KOP PADTAKRAI", "KHAO RAT GAENG"]
            },

            {
                name: "Tamarin",
                address: "Forum",
                menu: ["Kanabiittejä"]
            },

            { 
                name: "Kiila", 
                address: "Lähellä", 
                menu: ["Burgeria"] 
            }
        ];

        return (
            <div className="container">
                <h1 className="title">Missä syödään?</h1>
                <button type="button" className="addLunch">Arvo paikka!</button>
                {lunchList.map((lunchPlace) =>
                        <LunchPlace name={lunchPlace.name} address={lunchPlace.address} menu={lunchPlace.menu} />
                )}
            </div>
        )
    }
}