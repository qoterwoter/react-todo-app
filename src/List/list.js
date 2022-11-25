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
    handleChange(index) {
        this.props.handleChange(index);
    }
    handleRename(index,todo) {
        this.props.handleRename(index,todo);
    }
    handleTurnEdit(index) {
        this.props.handleTurnEdit(index)
    }
    render() {
        const todos = this.props.todos
        const listItems = todos.map((todo,index)=>{
            return <ItemOfList
                handleTurnEdit={this.handleTurnEdit}
                handleRename={this.handleRename}
                handleChange={this.handleChange}
                index={index}
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