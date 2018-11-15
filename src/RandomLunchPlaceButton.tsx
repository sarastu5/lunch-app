import * as React from 'react';
import './style.css';

interface Props {
    onClick: Function
}

export default class RandomLunchPlaceButton extends React.Component<Props> {

    render() {
        return (
            <div>
                <button className="rafflebutton" onClick={e => this.props.onClick()}>Arvo lounaspaikka!</button>
            </div>
        )
    }
}