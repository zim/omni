import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import TodoList from './components/TodoList';
import Grid from './components/Grid';

export const Routes = () => {
    return (
        <div>
            
            <Switch>
                
                <Route exact path="/">
                    <Redirect to="/TodoList" />
                </Route>
                <Route exact path="/todolist" component={TodoList} />
                <Route exact path="/about" component={About} />
                <Route exact path="/grid" component={Grid} />
            </Switch>
        </div>
    );
};