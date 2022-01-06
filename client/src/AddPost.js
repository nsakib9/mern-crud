import React from 'react'

function AddPost() {
    return(
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div>
                    <input type="text" placeholder='title' className="form-control" />
                    <input type="text" placeholder='imageUrl' className="form-control" />
                    <textarea cols='30' rows="10" placeholder="Description" className="form-control" />
                    

                    <button className="btn btn-success">Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default AddPost;