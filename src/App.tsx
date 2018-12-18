import * as React from 'react';
import Header from './Header';
import './style.css';
import FoodQuotes from './FoodQuotes';
import LunchPlace from './LunchPlace';
import RandomLunchPlaceButton from './RandomLunchPlaceButton';

interface Props {
}

interface State {
  lunchToday: any;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.choosePlace = this.choosePlace.bind(this);
    this.renderPlace = this.renderPlace.bind(this);
    this.state = { lunchToday: null };
  }

  public componentDidMount() {
    console.log("did mount");
    fetch("http://lunchplace-api.herokuapp.com/restaurants/")
  }

  private lunchList = [
    {
      name: "Bangkok9",
      menu: "https://www.bangkok9restaurant.com/lounaslista"
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

    {
      name: "Bjang",
      menu: "http://www.biang.fi/"
    },

    {
      name: "Döner Harju",
      menu: "http://donerharju.fi/city/"
    },

    {
      name: "Subway",
      menu: "http://www.subway.fi/fi/tuotteet"
    },

    {
      name: "Pupu",
      menu: "https://pupu.fi/menu/"
    },

    {
      name: "Classic Pizza",
      menu: "https://classicpizza.fi/menu/"
    },

    {
      name: "Pikku Nepal",
      menu: "http://pikkunepal.fi/lunch/"
    }
  ];

  private choosePlace() {
    var randomLunchPlace = this.lunchList[Math.floor(Math.random() * this.lunchList.length)];
    this.setState({ lunchToday: randomLunchPlace })
  }

  private renderPlace() {
    if (this.state.lunchToday !== null) {
      return (
        <div>
          <FoodQuotes />
          <LunchPlace name={this.state.lunchToday.name} menu={this.state.lunchToday.menu} />
        </div>
      )
    }
    return <div><p>Nada. :(</p></div>
  }

  render() {
    const title = "Lounasarvonta";

    return (
      <div className="container">
        <div className="header">
          <Header title={title} />
        </div>

        <RandomLunchPlaceButton onClick={this.choosePlace} />

        {this.renderPlace()}
      </div>
    )
  }
}

export default App;
