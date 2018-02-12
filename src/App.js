import React, { Component } from 'react';
import './App.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class App extends Component {
  state={arr:[],bool:false};
  render() {
    console.log(this.state.arr);
    console.log(this.state.bool);
    return (
      <div className="App">
        <button
          onClick={()=> this.setState({arr:[...this.state.arr,1]})}
        >increase</button>
        <button
          onClick={()=> {
            const arr = [...this.state.arr];
            arr.pop();
            this.setState({arr,})

          }}
        >decrease</button>
        <button
          onClick={()=>this.setState({bool:!this.state.bool})}
        >
          click
        </button>


        <TransitionGroup>
          {this.state.arr.map((item,index)=>(
            <CSSTransition
              classNames={'test'}
              key={item+index+''}
              timeout={500}
            >
              <div>{item+index}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <TransitionGroup>
          {
            this.state.bool ?
            <CSSTransition
              key={this.state.bool.toString()}
              classNames={'test'}
              timeout={500}
            >
              <div>{this.state.bool.toString()}</div>
            </CSSTransition> :
              <CSSTransition
                key={this.state.bool.toString()}
                classNames={'test'}
                timeout={500}
              >
                <div>{this.state.bool.toString()}</div>
              </CSSTransition>
          }
        </TransitionGroup>

      </div>
    );
  }
}

export default App;
