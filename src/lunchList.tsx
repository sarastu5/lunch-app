// import * as React from 'react';
// import { Component } from 'react';
// import LunchPlace from './LunchPlace';
// import './style.css';
// import RandomLunchPlaceButton from './RandomLunchPlaceButton';

// interface Props {
//     lunchList: [],
//     choosePlace: Function
// }

// interface State {
//     lunchToday: any;
// }

// export default class LunchList extends Component<Props, State> {

//     constructor(props: Props) {
//         super(props);

//         const {lunchList} = this.props;
//         const choosePlace = this.props;
//     }

//     private renderPlace() {
//         if (this.state.lunchToday !== null) {
//             return (
//                 <div>
//                     <LunchPlace name={this.state.lunchToday.name} menu={this.state.lunchToday.menu} />
//                 </div>
//             )
//         }
//         return <div></div>
//     }

//     render() {
//         // const dontShowPlaces: boolean = this.state.lunchToday !== null;

//         return (
//             <div>
//                 <RandomLunchPlaceButton onClick={this.props.choosePlace} />
//                 {this.renderPlace()}
//             </div>
//         )
//     }
// }