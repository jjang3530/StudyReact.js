import React from 'react'; //es6
//var React = require('react'); //es5

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render(){

        return (
            <div>
                <h1>Hello React Skeleton!!!</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => { this.setState({value: this.state.value + 1}) }}>CLICK ME</button>
            </div>
        );
    }
}

export default App; //es6
//module.export = App; //es5
