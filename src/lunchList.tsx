import * as React from 'react';
import { Component } from 'react';
import LunchPlace from './LunchPlace';
import './style.css';
import RandomLunchPlaceButton from './RandomLunchPlaceButton';

interface Props {
}

interface State {
    lunchToday: any;
}

export default class LunchList extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.choosePlace = this.choosePlace.bind(this);
        this.state = {lunchToday: null};
    }

    private lunchList = [
        {
            name: "Bangkok9",
            menu: "https://www.bangkok9restaurant.com/lounaslista",
        },

        {
            name: "Tamarin",
            menu: "http://tamarin.fi/ravintolat/forum/",
        },

        {
            name: "Kiila",
            menu: "https://www.ravintolakiila.fi/lounas",
        },

        {
            name: "Social Burger",
            menu: "https://www.ravintolakiila.fi/lounas",
        },

        {
            name: "Fafa's",
            menu: "https://fafas.fi/fi/menu/",
        },

        {
            name: "Marmomoripiha",
            menu: "https://www.dylan.fi/marmoripiha/",
        },

        {
            name: "Kebab",
            menu: "",
        },

        {
            name: "Levant",
            menu: "https://www.levant.fi/ravintolat/",
        },

        {
            name: "Önam",
            menu: "https://www.onam.fi/",
        },
    ];

    private choosePlace() {
        console.log("choosePlace");
        var randomLunchPlace = this.lunchList[Math.floor(Math.random() * this.lunchList.length)];
        this.setState({lunchToday: randomLunchPlace})
    }

    render() {
        const dontShowPlaces: boolean =  this.state.lunchToday !== null;
        
        return (
            <div className="container">
                <RandomLunchPlaceButton onClick={this.choosePlace}/>
            {dontShowPlaces &&
                <LunchPlace name={this.state.lunchToday.name} menu={this.state.lunchToday.menu} />
            }
            </div>
        )
    }
}