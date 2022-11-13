import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {List} from './list'
import {Form} from './form'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            todos: ['Задача','Ещё одна задача','И ещё одна задача'],
            todoTitle: ''
        }
        this.onTitleChange = this.onTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onTitleChange(title) {
        this.setState({todoTitle:title})
    }
    handleSubmit() {
        if(this.state.todoTitle.trim()) {
            this.setState({todos:[...this.state.todos, this.state.todoTitle],todoTitle:''})
        }
    }

    render() {
        return (
            <div>
                <List todos={this.state.todos}/>
                <Form 
                    todoTitle={this.state.todoTitle}
                    onTitleChange={this.onTitleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<App/>)