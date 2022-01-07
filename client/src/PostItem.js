import React from 'react'

function PostItem({post}) {
    return(
        <div className='col-md-8 shadow p-3 mb-5 bg-body rounded'>
           <h1 className='p-1'>{post.title}</h1>
           <img className='img-fluid p-1' src={post.imageurl} />
           <p className='p-1'>{post.description}</p>
        </div>
    )
}

export default PostItem;