import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from '../Screens/Home'
import Description from '../Screens/Description'
import Admin from '../Screens/Admin'
import Romance from '../Screens/Romance'
import React, { Component } from 'react';
import Header from '../components/subComponents/Header'
import Footer from '../components/subComponents/Footer'
const RootRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                {/* <Redirect to='/home' from ='/'/> */}
                <Route exact path='/' component={Home} />
                <Route path='/admin' component={Admin} />
                <Route path='/:id/details' component={Description} />
                <Route path='/:id' component={Romance} />

            </Switch>
            <Footer />
        </Router>
    );
}

export default RootRouter;