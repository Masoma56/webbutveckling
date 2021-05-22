import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Recipe } from '../view/Recipe'
import { Home } from '../view/Home'
import { SignIn } from '../view/SignIn'

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/recipe" component={Recipe} />
                <Route exact path="/signin" component={SignIn} />
                <Route component={Home} />
            </Switch>
        </Router >
    )
}