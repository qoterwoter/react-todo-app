import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {List} from './list.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            date: new Date(),
            theme: true,
            nubmers: [1,2,3,4,5]
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    changeTheme() {
        this.setState(state=>({
            theme: !state.theme
        }))
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        // Условный рендеринг
        const theme = this.state.theme
        let themeElement;
        if(theme) {
            themeElement = <p>Темная тема</p>
        } else {
            themeElement = <p>Светлая тема</p>
        }

        return (
            <div>
                <h1>Hello, world</h1>
                <p>Time is {this.state.date.toLocaleTimeString()}</p>
                <button onClick={this.changeTheme}>Change Theme</button>
                {themeElement}
                <List numbers={this.state.nubmers}/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<App/>)