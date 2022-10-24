import React, {useState} from 'react';
import './Admin.css'
import axios from "axios";
function Admin(props) {
    const [anons, setAnons]=useState('');
    const [text, setText]=useState('');
    const [urlforimage, setUrlForImage]=useState('');
    const anonsHandler=(e)=> {
        setAnons(e.target.value)
        console.log(anons)
    }
    const textHandler=(e)=>{
        setText(e.target.value)
        console.log(text)
    }
    const urlHandler=(e)=>{
        setUrlForImage(e.target.value)
        console.log(urlforimage)
    }
    const createArticle=async ()=>{
        try {
            await axios.post('https://blog-mern-solo.herokuapp.com/api/blog/add', {
                anons, text, urlforimage
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => console.log(res))
        } catch (e){ console.log(e)}
        }
    return (
        <div className={'form-admin'}>
            <form className={'form'} onSubmit={event => event.preventDefault()}>
                <div className="anons">
                    <input onChange={anonsHandler} value={anons} type="text" name={'anons'} className={'anons-admin form-control'} id='anons'/>
                    <label htmlFor="anons">Anons for article</label>
                </div>
                <div className="text">
                    <textarea onChange={textHandler} value={text} name={'text'} className={'text-admin form-control'} id='text'/>
                    <label htmlFor="anons">Text for article</label>
                </div>
                <div className="text">
                    <input onChange={urlHandler} value={urlforimage} type="text" name={'anons'} className={'anons-admin form-control'} id='anons'/>
                    <label htmlFor="anons">Image for article</label>
                </div>
                <div className="button-admin">
                    <button onClick={createArticle} className={'button btn btn-submit'}>Add article</button>
                </div>
            </form>
        </div>
    );
}

export default Admin;