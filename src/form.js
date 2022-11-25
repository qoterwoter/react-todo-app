import React from "react"
import { Button,  Grid, TextField, Typography } from "@mui/material";
export class Form extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTitleChange(event.target.value)
    }

    handleSubmit(event) {
        this.props.handleSubmit(event.target.value)
    }

    render() {
        return(
            <Grid container spacing={2} marginBottom='8px'>
                <Grid item xs={12}><Typography variant='h4'>Добавить задачу</Typography></Grid>
                <Grid item xs={2}><TextField 
                    id='input'
                    value={this.props.todoTitle} 
                    onChange={this.handleChange}
                    label = 'Текст задачи'
                    variant="outlined"
                    size="small"
                /></Grid>
                <Grid item xs={1}><Button 
                    variant="contained"
                    color='success'
                    onClick={this.handleSubmit}
                >Отправить</Button></Grid>
            </Grid>

        )
    }
}