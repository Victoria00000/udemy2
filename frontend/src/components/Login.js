import { Link } from 'react-router-dom';


export const Login = () => {
    return (
        <div className='register'>
        <div className='card'>
          <div className='card-header'>
            <h3> Login </h3>
            <div className='card-body'>
  
              <form className=''>
                <div className='form-group'>
                  <label htmlFor='email'> Email </label>
                  <input type='email' className='form-control' placeholder='anna@gmail.com' id='email' />
                </div>
  
                <div className='form-group'>
                  <label htmlFor='password'> Password </label>
                  <input type='password' className='form-control' placeholder='*****' id='password' />
                </div>
  
                <div className='form-group'>
                  <input className='btn' type='submit' value='login' />
                </div>
  
                <div className='form-group'>
                  <span> <Link to='/chat-app/register'> Don't you have an account? </Link></span>
                </div>
              </form>
  
            </div>
          </div>
        </div>
      </div>
    );
};
