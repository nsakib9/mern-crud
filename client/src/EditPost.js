import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EditPost() {
    const params = useParams()
    useEffect(()=>{
        axios.post('/api/post/getpostdata', {postid: params.postid}).then(res=>{
            console.log(res.data[0])
        }).catch(err=>{
            console.log(err)
        })
    })
    return(
        <div>
            <h1>
                This is our Edit Post component
            </h1>
            <h1>The post id is = {params.postid}</h1>
        </div>
    )
}

export default EditPost;