import React from "react"

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
        event.preventDefault();
        this.props.handleSubmit(event.target.value)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Текст задачи:
                    <input type='text' value={this.props.todoTitle} onChange={this.handleChange}></input>
                </label>
                <input type='submit' value="Отправить" />
            </form>
        )
    }
}