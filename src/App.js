import React from 'react';
import axios from 'axios';
import DisplayCard from './DisplayCard';
import './App.css';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { displayInfo: [] }
    }

    async loadApi() {
        const resp = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_jets`);
        this.setState({ displayInfo: resp.data.teams });
        console.log(this.state.displayInfo);
    }

    componentDidMount() {
        this.loadApi();
    }

    render() {
        return (
            <div className="App-header">
                <DisplayCard teamCards={this.state.displayInfo} />
            </div>
        );
    }
}

export default App;