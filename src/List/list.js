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
        const isEdit = this.props.isEdit ? this.props.isEdit : false
        const listItems = todos.map(todo=>{
            const index = todos.indexOf(todo)
            return <ItemOfList
                handleTurnEdit={this.handleTurnEdit}
                handleRename={this.handleRename}
                handleChange={this.handleChange}
                isEdit={isEdit}
                index={index}
                todo={todo}
                isList={this.props.isList}
            />}) 
        
        return (
            <Grid container spacing={2} sx={{background:'#f2f2f2','border-radius':'10px'}}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{this.props.title}</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <List>{listItems}</List>
                </Grid>
            </Grid>
        )
    }
}