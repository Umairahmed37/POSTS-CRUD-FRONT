import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getuser } from './Posts/AuthData';
import { useNavigate } from 'react-router-dom';


function App() {

  const [Posts, setPosts] = useState([]);
  const navigate=useNavigate()
 
  const fetchdata = () => {
    axios
      .get(`${process.env.REACT_APP_MY_VAR}/myposts`)
      .then(response => {
        // console.log(response);
        setPosts(response.data);
      })
      .catch(err => {
        alert(err);

      })

  }

  useEffect(() => {
         
  }, [navigate])


  useEffect(() => {
     fetchdata();
  }, [])

  const deletepost = (slug) => {

    if (window.confirm(`Are you sure, delete ${slug} ?`)) {
      axios
        .delete(`${process.env.REACT_APP_MY_VAR}/delete/${slug}`)
        .then(response => {
          fetchdata();
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      console.log("Operation cancelled");
    }
  }

  return (
    <div className="container mt-4 myposts">
      <h1>MERN CRUD SYSTEM</h1>

      <div className='row'>
        {
          Posts.map((Posts, i) => (

            <div className="card my-3 col-md-3" key={Posts._id} >
              <div className="card-header navbar-item">
                <NavLink className='navbar-item dec-none' to={`/post/${Posts.slug}`}>
                  <b>{Posts.title.toUpperCase()}</b>
                </NavLink>
              </div>

              <div className="card-body">
                <h5 className="card-title ">  {Posts.content}</h5>
                <p className="card-text text-muted">{new Date(Posts.createdAt).toLocaleString()}</p>
                <p> By: <span> {Posts.user} </span> </p>

                <div className='col'>
                  <Link to={`/post/${Posts.slug}`} className="btn btn-sm btn-primary mx-2">Read More</Link>
                  {

                    getuser() && <Link to={`/post/update/${Posts.slug}`} className="btn btn-sm btn-outline-warning mx-2">UPDATE</Link>
                  }
                  {
                    getuser() &&
                    <button onClick={() => deletepost(Posts.slug)} className="btn btn-sm btn-danger mx-2">DELETE</button>
                  }



                </div>
              </div>
            </div>
          ))
        }
      </div>




    </div>
  );
}

export default App;
