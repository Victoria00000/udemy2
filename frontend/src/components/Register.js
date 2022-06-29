import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {

  const [state, setState] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  });

  const inputHandler = evt => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  };

  const fileHandler = evt => {
    (evt.target.files.length !== 0) ??
      setState({
        ...state,
        [evt.target.name]: evt.target.files[0]
      });
  };

  const submitRegister = evt => {
    evt.preventDefault();
    console.log(state);
  };

  return (
    <div className='register'>
      <div className='card'>
        <div className='card-header'>
          <h3> Register </h3>
          <div className='card-body'>

            <form className='' onSubmit={submitRegister}>
              <div className='form-group'>
                <label htmlFor='userName'> User name </label>
                <input type='text' className='form-control' placeholder='Anna' id='userName'
                  onChange={inputHandler} name='userName' value={state.userName} />
              </div>

              <div className='form-group'>
                <label htmlFor='email'> Email </label>
                <input type='email' className='form-control' placeholder='anna@gmail.com' id='email'
                  onChange={inputHandler} name='email' value={state.email} />
              </div>

              <div className='form-group'>
                <label htmlFor='password'> Password </label>
                <input type='password' className='form-control' placeholder='*****' id='password'
                  onChange={inputHandler} name='password' value={state.password} />
              </div>

              <div className='form-group'>
                <label htmlFor='confirmPassword'> Confirm password </label>
                <input type='password' className='form-control' placeholder='*****' id='confirmPassword'
                  onChange={inputHandler} name='confirmPassword' value={state.confirmPassword} />
              </div>

              <div className='form-group'>
                <div className='file-image'>
                  <div className='image'>
                  </div>
                  <div className='file'>
                    <label htmlFor='image'> Select image </label>
                    <input type='file' className='form-control' id='image'
                      onChange={fileHandler} name='image' />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <input className='btn' type='submit' value='register' />
              </div>

              <div className='form-group'>
                <span> <Link to='/chat-app/login'> Do you have an account? </Link></span>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};
