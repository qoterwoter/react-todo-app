import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.sass';
import {TodoList} from './List/list'
import {Form} from './form'
import { Grid } from '@mui/material';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            todos: ['Задача','Ещё одна задача','И ещё одна задача'],
            deletedTodos:[],
            todoTitle: '',
            isEdit:[]
        }
        this.onTitleChange = this.onTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRestore = this.handleRestore.bind(this)
        this.handleRename = this.handleRename.bind(this)
        this.handleTurnEdit = this.handleTurnEdit.bind(this)
    }
    componentDidMount() {
        this.setState({isEdit:this.state.todos.map(val=>true)})
    }
    onTitleChange(title) {
        this.setState({todoTitle:title})
    }
    handleSubmit() {
        if(this.state.todoTitle.trim()) {
            this.setState({
                todos:[...this.state.todos, this.state.todoTitle],
                todoTitle:'',
                isEdit:[...this.state.isEdit,true]})
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
    handleRename(id,newTodo) {
        this.setState({todos:this.state.todos.map((todo,index)=>{
            return id === index ? newTodo : todo
        })})
    }
    handleTurnEdit(index) {
        this.setState({isEdit:this.state.isEdit.map((todo,id)=>{
            return id === index ? !todo : todo
        })})
    }
    render() {
        const deleted = this.state.deletedTodos
        const todos = this.state.todos
        return (
            <Grid container spacing={4} columns={13} sx={{margin:'5px 10px'}}> 
                <Grid item xs={13}><Form 
                    todoTitle={this.state.todoTitle}
                    onTitleChange={this.onTitleChange}
                    handleSubmit={this.handleSubmit}
                /></Grid>
                {todos.length > 0 ? 
                <Grid item xs={6}><TodoList
                    title={"Список задач"}
                    todos={this.state.todos}
                    handleChange={this.handleDelete}
                    handleRename={this.handleRename}
                    handleTurnEdit={this.handleTurnEdit}
                    isEdit={this.state.isEdit}
                    isList={true}
                /></Grid> : null}
                {deleted.length > 0 ?
                <Grid item xs={6}><TodoList
                    title={"Удаленные задачи"}
                    todos={deleted}
                    handleChange={this.handleRestore}
                    isList={false}
                /></Grid>
                : null}
            </Grid>
        )
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<App/>)