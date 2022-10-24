import React, {useCallback, useEffect, useState} from 'react';
import './AllPosts.css';
import {Link} from "react-router-dom";
import axios from "axios";

function AllPosts(props) {
   let [posts, setPosts]=useState([])
   const getPosts=useCallback(async ()=>{
        try{
        await axios.get('https://blog-mern-solo.herokuapp.com/api/blog/findall',{
            headers: {"Content-Type": "application/json"}
        }).then(res=>{
            console.log(res)

                setPosts(res.data)

        })
        console.log(posts)
        } catch (e){console.log(e)}

    }, [posts])
getPosts()
    return (
        <div>
            {posts.map((post)=>{
                return(
                    <Link to={`/single/${post._id}`}>
                    <div className={'card'}>
                        <img src={post.urlforimage} alt=""/>
                        <h3 className="Anons">{post.anons}</h3>
                    </div>
                    </Link>
                )
            })
            }
    </div>);
}

export default AllPosts;