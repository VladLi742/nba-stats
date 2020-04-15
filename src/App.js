import React, { Component} from "react";
import { hot } from "react-hot-loader";

import MyComponent from './MyComponent';

class App extends Component{
    render(){
        return(
            <MyComponent/>
        );
    }
}

export default hot(module)(App);