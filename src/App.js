import React from 'react';
import './App.css'
import Header from "./components/Header";
import Routers from "./Routers";
import {BrowserRouter} from "react-router-dom";
function App(props) {
    return (
        <React.Fragment>
        <BrowserRouter>
        <div className='container'>
            <Header/>
            <Routers/>
        </div>
        </BrowserRouter>
        </React.Fragment>

    );
}

export default App;