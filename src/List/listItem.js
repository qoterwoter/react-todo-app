import React from 'react';
import { Typography, ListItem, ListItemIcon, ListItemText, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export class ItemOfList extends React.Component {
    constructor(props) {
        super(props)
        this.handleRename = this.handleRename.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleTurnEdit = this.handleTurnEdit.bind(this)
    }
    handleRename(index,newTodo) {
        this.props.handleRename(index,newTodo)
    }
    handleChange(index) {
        this.props.handleChange(index)
    }
    handleTurnEdit(index) {
        this.props.handleTurnEdit(index)
    }
    render() {
        const todo = this.props.todo
        return <ListItem
            key={todo.index}
            spacing={2}>
            <ListItemText>
                {
                todo.isEditable  ?
                <Typography variant='p'>{todo.title}</Typography> : 
                <TextField 
                    label="Введите текст задачи"
                    size='small'
                    value={todo.title}
                    onChange={(event)=>{this.handleRename(todo.index,event.target.value)}}/>
                }
            </ListItemText>
            <ListItemIcon><IconButton onClick={()=>{this.handleChange(todo.index)}}>{ todo.status==='todo' ? 
                <DeleteIcon
                    variant='filled' 
                    color='error'/> :
                <RestartAltIcon
                    variant='contained' 
                    color='success'/>
            }</IconButton></ListItemIcon>
            { todo.status==='todo' && <ListItemIcon><IconButton 
                onClick={()=>{this.handleTurnEdit(todo.index)}}>
                { todo.isEditable ? 
                    <EditIcon color='primary'/> : 
                    <SaveIcon color='success'/>
                }
            </IconButton></ListItemIcon>}
        </ListItem>
        }
}