import React from 'react';
import { Grid, Button,  Typography, List, ListItem, Avatar, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
export class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRename = this.handleRename.bind(this)
    }

    handleChange(id) {
        this.props.handleChange(id);
    }
    handleRename(event) {
        console.log(event.target.parentNode.querySelector('Typography'))
        // this.props.handleRename(id);
    }

    render() {
        const todos = this.props.todos
        const isList = this.props.isList
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{this.props.title}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <List>{
                    todos.map(todo=>
                        <ListItem
                            key={todos.indexOf(todo)}
                            spacing={2}>
                            <ListItemText>
                                <Typography variant='p'>{todo}</Typography>
                            </ListItemText>
                            <ListItemIcon><IconButton>{isList ? 
                                <DeleteIcon
                                    variant='filled' 
                                    color='error'
                                    onClick={()=>{this.handleChange(todos.indexOf(todo))}}/> :
                                <RestartAltIcon
                                    variant='contained' 
                                    color='primary'
                                    onClick={()=>{this.handleChange(todos.indexOf(todo))}}
                                />
                            }</IconButton></ListItemIcon>
                            {/* {isList ? 
                            <Button
                                variant='contained'
                                onClick={this.handleRename}
                                >Изменить</Button> : null} */}
                        </ListItem>
                        )    
                    }</List>
                </Grid>
            </Grid>
        )
    }
}