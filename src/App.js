import React, { Component } from 'react';
import './App.css';
import Form from "./Form"
import Message from "./Message"
import User from "./User"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Switch>
                    <Route path="/user" component={User}/>
                    <Form />
                    <Message />
                </Switch>
                </div>
            </Router>
        )}
}
export default App;
