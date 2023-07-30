import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
        { id:1, value: 0},
        { id:2, value: 0},
        { id:3, value: 0},
        { id:4, value: 0}
    ]
  } ;


  handleIncrement = counter => {
   
    // new const counters have the same object of counters above ^
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    this.setState({ counters });
  };
  
  handleDelete = counterId => {
  
    // set to counters a filter to take everything but not the counterID clicekd!
        const counters = this.state.counters.filter(c => c.id !== counterId);
    // reset the counters and put in place the new const counters, because we used the same name
        this.setState({ counters }); 
  }; 
  
  handleReset = () =>{

    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters }); 
  };

  render() { 
    return (
    <React.Fragment>
      <NavBar 
        totalCounters={this.state.counters.filter(c => c.value > 0).length} 
      />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
    </React.Fragment>
    );
  }
}
 
export default App;