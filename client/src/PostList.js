import React, {useEffect, useState} from 'react'
import PostItem from './PostItem'
import axios from 'axios'

function PostList() {
    useEffect(() => {
        axios.get('/api/post/getposts').then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    return(
        <div>
            <h1>
                This is our list component
            </h1>
            <PostItem />
        </div>
    )
}

export default PostList