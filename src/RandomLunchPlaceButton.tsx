import * as React from 'react';

interface Props {
    onClick: Function
}

export default class RandomLunchPlaceButton extends React.Component<Props> {

    render() {
        return (
            <button className="button" onClick={e => this.props.onClick()}>Arvo lounaspaikka!</button>
        )
    }
}