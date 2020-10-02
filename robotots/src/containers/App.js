import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    }).then(users => {
        this.setState({ robots: users })
    })
    
    
}

onSearchChange = (event) => {
this.setState({ searchfield: event.target.value })
// console.log(event.target.value);
}

    render() {
        const filteredRobots = this.state.robots.filter( r =>{
            console.log(this.state.robots);
            return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })
            // console.log(filteredRobots);
        return(
            <div className='tc'>
            <h1 className='fw1'>Robo Tots</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
        </div>
        );
        
    }
}


export default App;