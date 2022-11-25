import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.sass';
import { TodoList } from './List/list'
import { Form } from './form'
import { Box, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            // Переписать дальше в компоненты
            todos: [{
                index: uuidv4(),
                title:"Задача",
                status:"todo",
                isEditable: true
            }, {
                index: uuidv4(),
                title: "Другая задача",
                status:"todo",
                isEditable: true
            }, {
                index: uuidv4(),
                title: "Ещё одна задача",
                status:"todo",
                isEditable: true
            }],
            todoTitle: '',
        }
        this.onTitleChange = this.onTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRestore = this.handleRestore.bind(this)
        this.handleRename = this.handleRename.bind(this)
        this.handleTurnEdit = this.handleTurnEdit.bind(this)
    }
    onTitleChange(title) {
        this.setState({todoTitle:title})
    }
    handleSubmit() {
        if(this.state.todoTitle.trim()) {
            this.setState({
                todos:[...this.state.todos, {index:uuidv4(),title:this.state.todoTitle, status:'todo',isEditable:true,}],
                todoTitle:'',
            })
        }
        console.log(this.state.todos)
    }
    handleDelete(id) {
        this.setState({todos:this.state.todos.map(todo=>{
            return id === todo.index ? {...todo,status:'deleted'} : todo
        })})
    }
    handleRestore(id) {
        this.setState({todos:this.state.todos.map(todo=>{
            return id === todo.index ? {...todo,status:'todo'} : todo
        })})
    }
    handleRename(id,todoTitle) {
        this.setState({todos:this.state.todos.map(todo=>{
            return id === todo.index ? {...todo,title:todoTitle} : todo
        })})
    }
    handleTurnEdit(index) {
        this.setState({todos:this.state.todos.map(todo=>{
            return index === todo.index ? {...todo,isEditable:!todo.isEditable} : todo
        })})
    }
    render() {
        const todos = this.state.todos.filter(todo=>todo.status==='todo')
        const deleted = this.state.todos.filter(todo=>todo.status==='deleted')
        return (
            <Box padding='0 32px' >
                <Grid container spacing={4} columns={12} justifyContent='space-between'> 
                <Grid item xs={12}><Form 
                    todoTitle={this.state.todoTitle}
                    onTitleChange={this.onTitleChange}
                    handleSubmit={this.handleSubmit}
                /></Grid>
                {todos.length > 0 ? 
                <Grid item xs={6}><TodoList
                    todos={todos}
                    handleChange={this.handleDelete}
                    handleRename={this.handleRename}
                    handleTurnEdit={this.handleTurnEdit}
                /></Grid> : null}
                {deleted.length > 0 ?
                <Grid item xs={6}><TodoList
                    todos={deleted}
                    handleChange={this.handleRestore}
                /></Grid>
                : null}
            </Grid>
            </Box>
        )
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<App/>)