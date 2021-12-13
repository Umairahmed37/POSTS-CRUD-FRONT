import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const navigate=useNavigate()

  const [state, setstate] = useState({
    title: '',
    content: '',
    user: ''
  })
  const { title, content, user } = state;

  const handlechange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
     axios.post(`${process.env.REACT_APP_MY_VAR}/post`, { title, content, user })
      .then(response => { 
         setstate({...state, title:'',content:'',user:''})
        alert(`post created ${response.data.title}`)
        navigate('/')

      })
      .catch(error => {
        alert(error.response.data.error)

      })

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

export default Create
