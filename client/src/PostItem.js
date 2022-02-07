import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function PostItem({post}) {
    const navigate = useNavigate()
    function deletepost(postid){
        axios.post('/api/post/deletepost', {postid:postid}).then(res=>{
            alert(res.data)
            navigate('/')
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className='col-md-8 shadow p-3 mb-5 bg-body rounded'>
           <h1 className='p-1'>{post.title}</h1>
           <img className='img-fluid p-1' src={post.imageurl} alt='image' />
           <p className='p-1'>{post.description}</p>

           <Link to={`/edit/${post.postid}`}>
           <li className='btn btn-primary'>Edit</li>
           </Link>
           <button className="btn btn-danger m-1" onClick={()=>{deletepost(post.postid)}}>Delete</button>
        </div>
    )
}

export default PostItem;