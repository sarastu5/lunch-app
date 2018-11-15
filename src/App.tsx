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
    const title = "Lounasta jee jee";

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
