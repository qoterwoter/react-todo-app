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
            <div className="mb-4">
                <h2>Добавить задачу</h2>
                <form onSubmit={this.handleSubmit} className='row w-50'>
                    <label className="col-3" htmlFor='input'>Текст задачи:</label>
                    <input 
                        id='input'
                        type='text' 
                        value={this.props.todoTitle} 
                        onChange={this.handleChange}
                        className='form-control col'
                    />
                    <input 
                        type='submit' 
                        value="Отправить" 
                        className="btn btn-primary col-3"
                    />
                </form>
            </div>

        )
    }
}