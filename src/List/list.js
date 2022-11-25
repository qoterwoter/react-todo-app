import React from 'react';
import { Grid, Typography, List } from '@mui/material';

import { ItemOfList } from './listItem';
export class TodoList extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this)
        this.handleRename = this.handleRename.bind(this)
        this.handleTurnEdit = this.handleTurnEdit.bind(this)
    }
    handleChange(id) {
        this.props.handleChange(id);
    }
    handleRename(id,todo) {
        this.props.handleRename(id,todo);
    }
    handleTurnEdit(id) {
        this.props.handleTurnEdit(id)
    }
    render() {
        const todos = this.props.todos
        const listItems = todos.map((todo,id)=>{
            return <ItemOfList
                handleTurnEdit={this.handleTurnEdit}
                handleRename={this.handleRename}
                handleChange={this.handleChange}
                todo={todo}
            />
        }) 
        const title = todos[0].status === 'todo' ? "Список задач" : "Удаленные задачи"
        return (
            <Grid container spacing={2} sx={{background:'#f2f2f2'}} borderRadius={'15px'}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <List>{listItems}</List>
                </Grid>
            </Grid>
        )
    }
}