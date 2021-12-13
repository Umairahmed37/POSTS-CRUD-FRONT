
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
 
const SinglePost = () => {

  let { slug } = useParams()
 
  const [post, setPost] = useState('')

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MY_VAR}/post/${slug}`)
      .then(Response => {
        setPost(Response.data)
      })
      .catch(err => {
        alert(err)
      })

    //eslint-disable-next-line
  }, [])


  return (
    <div className='container mt-4'>
      <h1>Post</h1>

      <div className="card mt-4">
        <div className="card-header">
          {post.title}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.user}</h5>
          <p className="card-text">{post.content}</p>
         </div>
      </div>

    </div>
  )
}

export default SinglePost
