import React from 'react';

export class List extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.props.handleChange(id);
    }
    render() {
        const todos = this.props.todos
        let classes = 'btn '
        if(this.props.isList) {
            classes+='btn-danger col-1'
        } else {
            classes+='btn-success col-2'
        }
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>{
                todos.map(todo=>
                    <li 
                        key={todos.indexOf(todo)}
                        className='row mb-2'
                    >
                        <p className='col-3'>
                            <span>{todos.indexOf(todo)+1}. </span>
                            {todo}</p>
                        <button 
                            onClick={()=>{this.handleChange(todos.indexOf(todo))}}
                            className={classes}
                        >
                            {this.props.isList ? 'Удалить' : 'Восстановить'}
                        </button>
                        </li>
                    )    
                }</ul>
            </div>
        )
    }
}