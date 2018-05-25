import React from 'react'; //es6
//var React = require('react'); //es5
import Contact from './Contact';

class App extends React.Component {
    render(){
        return (
                <Contact/>
        );
    }
}

export default App; //es6
//module.export = App; //es5
