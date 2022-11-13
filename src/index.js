import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.sass';
import {TodoList} from './list'
import {Form} from './form'
import { Container } from '@mui/system';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            todos: ['Задача','Ещё одна задача','И ещё одна задача'],
            deletedTodos:[],
            todoTitle: ''
        }
        this.onTitleChange = this.onTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRestore = this.handleRestore.bind(this)
        this.handleRename = this.handleRename.bind(this)
    }
    onTitleChange(title) {
        this.setState({todoTitle:title})
    }
    handleSubmit() {
        if(this.state.todoTitle.trim()) {
            this.setState({todos:[...this.state.todos, this.state.todoTitle],todoTitle:''})
        }
    }
    handleDelete(id) {
        const _todos = this.state.todos.filter((todo,index)=>id!==index);
        this.state.deletedTodos.push(this.state.todos[id])
        this.setState({todos:_todos})
    }
    handleRestore(id) {
        this.setState({
            todos:[...this.state.todos,this.state.deletedTodos[id]],
            deletedTodos:[...this.state.deletedTodos.filter((todo,index)=>index!==id)]
        })
    }
    handleRename(id) {
        console.log(id)
    }
    render() {
        const deleted = this.state.deletedTodos
        return (
            <Container>
                <Form 
                    todoTitle={this.state.todoTitle}
                    onTitleChange={this.onTitleChange}
                    handleSubmit={this.handleSubmit}
                />
                <TodoList
                    title={"Список задач"}
                    todos={this.state.todos}
                    handleChange={this.handleDelete}
                    handleRename={this.handleRename}
                    isList={true}
                    />
                {deleted.length > 0 ?
                    <TodoList
                        title={"Удаленные задачи"}
                        todos={deleted}
                        handleChange={this.handleRestore}
                        isList={false}
                    />
                    : null}
            </Container>
        )
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<App/>)