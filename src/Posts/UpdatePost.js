
import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
 
const UpdatePost = () => {
  let { slug } = useParams()
  const navigate = useNavigate()

  const [state, setstate] = useState({
    title: '',
    content: '',
    user: ''
  })
  const { title, content, user } = state;



  useEffect(() => {
   
    axios
      .get(`${process.env.REACT_APP_MY_VAR}/post/${slug}`)
      .then(Response => {
        const { title, content, user } = Response.data
        setstate({ ...state, title, content, user })
      })
      .catch(err => {
        alert(err)
        console.log("error here at useeffect");
      })

    //eslint-disable-next-line
  }, [])



  const handlechange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
 

  const handleSubmit =  (e)  =>  {

    if(!window.confirm("are you sure about this?")){
      setstate({title: '', content: '', user: ''})
      navigate('/')
    }else{

      
      e.preventDefault()
      axios.put(`${process.env.REACT_APP_MY_VAR}/update/${slug}`, { title, content, user })
      .then(response => {
        setstate({ ...state, title: '', content: '', user: '' })
        navigate('/')
      })
      .catch(error => {
        alert(error.response.data.error)
        console.log("error here at submit");
        
      })
      
    }
  }

  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <h2>Create a Post</h2>
        <br />
        <div className="form-group">
          <label className="text-muted" >Title</label>
          <input type="text" name="title" value={title} onChange={handlechange} className="form-control" placeholder="Enter Your Title" required />
        </div>
        <div className="form-group">
          <label className="text-muted" >Content</label>
          <textarea type="text" onChange={handlechange} name="content" value={content} className="form-control" placeholder="Enter Your Content" required />
        </div>

        <div className="form-group">
          <label className="text-muted" >User</label>
          <input type="text" onChange={handlechange} name="user" value={user} className="form-control" placeholder="Enter Your Name" required />
        </div>
        <div>
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default UpdatePost
