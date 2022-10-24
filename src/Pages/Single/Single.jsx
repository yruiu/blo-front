import React, {useState} from 'react';
import './Single.css'
import {useParams} from "react-router-dom";
import axios from "axios";

function Single(props) {
    const [result, setResult]=useState([]);
    const {id}=useParams()
    async function start(){
        try{
        await axios.post('https://blog-mern-solo.herokuapp.com/api/blog/findone',{
            id
        },{headers: {"Content-Type": "application/json"}})
            .then(res=>setResult(res.data))
            console.log(result)
            } catch (e){
            console.log(e)
        }
        }
    start()
    return (
        <div className={'single'}>
            <img src={result.urlforimage} alt="" className={'image-single'}/><br/>
            <div className="anons-single">
                <h2 className="anons-single-text">{result.anons}</h2>
            </div>
            <div className="text-single">
                <p className="text-single-text">{result.text}</p>
            </div>
        </div>
    );
}

export default Single;