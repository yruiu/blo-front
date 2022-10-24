import React from 'react';
import '../App.css'
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className={'header'}>
            <Link to={'/'}><img className={'logo'} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png?20190122211436"}/></Link>
        </div>
    );
}

export default Header;