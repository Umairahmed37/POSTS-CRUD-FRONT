import React,{useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { authenticate,getuser } from '../Posts/AuthData'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate=useNavigate()

  const [state, setState] = useState({
    name: '',
    password: ''
  })

  useEffect(() => {
    getuser() && navigate('/')
    // eslint-disable-next-line
  }, [])

  const { name, password } = state;

  const onchangehandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_MY_VAR}/login`, { name, password })
      .then(response => {

        authenticate(response,()=>{
          navigate('/')
        })
       })
      .catch(err => {
         alert(err.response.data.error)
       })
  }

  return (
    <div className='container mt-5 w-25'>

      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Your Username</Form.Label>
          <Form.Control autoFocus autoComplete='off' onChange={onchangehandler} name='name' value={name} type="text" placeholder="Enter name" />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control autoComplete='on' onChange={onchangehandler} name='password' value={password} type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            Please Enter minimum of 8 password letters
          </Form.Text>
        </Form.Group>

        <Button className='mx-2' variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default Login
