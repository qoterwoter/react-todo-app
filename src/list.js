import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <ul>{
                this.props.todos.map(todo=>
                    <li key={this.props.todos.indexOf(todo)}>{todo}</li>
                    )    
            }</ul>
        )
    }
}