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
        const index = this.props.index
        const isEdit = this.props.isEdit
        const isList = this.props.isList
        return <ListItem
            key={index}
            spacing={2}>
            <ListItemText>
                {
                isEdit[index] || !isList ?
                <Typography variant='p'>{todo}</Typography> : 
                <TextField 
                    label="Введите текст задачи"
                    size='small'
                    value={todo}
                    onChange={(event)=>{this.handleRename(index,event.target.value)}}/>
                }
            </ListItemText>
            <ListItemIcon><IconButton onClick={()=>{this.handleChange(index)}}>{isList ? 
                <DeleteIcon
                    variant='filled' 
                    color='error'/> :
                <RestartAltIcon
                    variant='contained' 
                    color='success'/>
            }</IconButton></ListItemIcon>
            { isList && <ListItemIcon><IconButton 
                onClick={()=>{this.handleTurnEdit(index)}}>
                { isEdit[index] ? 
                    <EditIcon color='primary'/> : 
                    <SaveIcon color='success'/>
                }
            </IconButton></ListItemIcon>}
        </ListItem>
        }
}