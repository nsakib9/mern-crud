import React, { useState } from 'react'

function AddPost() {
    const [title, settitle] = useState('')
    const [imageurl, setimageurl] = useState('')
    const [description, setdescription] = useState('')

    function addpost() {
        var post = {
            title: title,
            imageurl: imageurl,
            description: description
        }
        console.log(post);
    }

    return(
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div>
                    <input type="text" placeholder='title' className="form-control" value={title} onChange={(e)=> {settitle(e.target.value)}} />
                    <input type="text" placeholder='imageUrl' className="form-control" value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}} />
                    <textarea cols='30' rows="10" placeholder="Description" className="form-control" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
                    

                    <button onClick={addpost} className="btn btn-success">Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default AddPost;