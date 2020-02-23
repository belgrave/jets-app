import React from 'react';
import axios from 'axios';
import DisplayFilmCard from './DisplayFilmCard';
import './App.css';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { displayInfo: [] }
    }

    async loadApi(resource = 'films') {
        const resp = await axios.get(`https://swapi.co/api/${resource}/`);
        this.setState({ displayInfo: resp.data.results })
    }

    componentDidMount() {
        this.loadApi();
    }

    render() {
        return (
            <div className="App-header">
                <DisplayFilmCard filmCards={this.state.displayInfo} />
            </div>
        );
    }
}

export default App;