import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
      age: '',
      dob: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { username, password, email, name, age, dob } = this.state;

    const data = {
      username: username,
      password: password,
      email: email,
      name: name,
      age: age,
      dob: dob
    };

    axios.post('http://localhost:8000/user/save', data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            username: '',
            password: '',
            email: '',
            name:'',
            age:'',
            dob:''
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='container'>
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal' style={{color:'#0A244B', fontSize:'40px', fontWeight:'600'}}>Add User</h1>
        <form className='needs-validation' noValidate>
          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>User Name</label>
            <input
              type='text'
              className='form-control'
              name='username'
              placeholder='Enter User Name'
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Password</label>
            <input
              type='text'
              className='form-control'
              name='password'
              placeholder='Enter Password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Email</label>
            <input
              type='text'
              className='form-control'
              name='email'
              placeholder='Enter Email'
              value={this.state.email}
              onChange={this.handleInputChange}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              placeholder='Enter Name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>Age</label>
            <input
              type='text'
              className='form-control'
              name='age'
              placeholder='Enter Age'
              value={this.state.age}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group' style={{ marginBottom: '15px' }}>
            <label style={{ marginBottom: '5px' }}>DOB</label>
            <input
              type='text'
              className='form-control'
              name='dob'
              placeholder='Enter DOB'
              value={this.state.dob}
              onChange={this.handleInputChange}
            />
          </div>

          <Link to='/user'>
          <button
            className='btn btn-primary'
            type='submit'
            style={{ marginTop: '15px' }}
            onClick={this.onSubmit}
          >
            <i className='far fa-check-square'></i>
            &nbsp; Save
          </button>
          </Link>

        </form>
      </div>
      </div>
    );
  }
}
