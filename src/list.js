import React from 'react';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: this.props.numbers,
        }
    }

    render() {
        // Списки
        const listItems = this.state.numbers.map(num=><li key={num.toString()}>{num} item</li>)

        return (
            <ul>{listItems}</ul>
        )
    }
}