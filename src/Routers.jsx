import React from 'react';
import {Switch, Route, Redirect } from "react-router-dom";
import AllPosts from "./Pages/Posts/AllPosts";
import './App.css'
import Single from "./Pages/Single/Single";
import ErrorPage from "./Pages/ErrorPage";
import Admin from "./Pages/Admin/Admin";
function Routers(props) {
    return (
            <Switch>
                <Route path={'/'} exact component={AllPosts}/>
                <Route path={'/single/:id'} exact component={Single}/>
                <Route path={'/404'} exact component={ErrorPage} />
                <Route path={'/admin404123'} exact component={Admin}/>
                {/*<Redirect to={'/404'}/>*/}
            </Switch>
    );
}

export default Routers;