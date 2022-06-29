import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='card-header'>
          <h3> Register </h3>
          <div className='card-body'>

            <form className=''>
              <div className='form-group'>
                <label htmlFor='userName'> User name </label>
                <input type='text' className='form-control' placeholder='Anna' id='userName' />
              </div>

              <div className='form-group'>
                <label htmlFor='email'> Email </label>
                <input type='email' className='form-control' placeholder='anna@gmail.com' id='email' />
              </div>

              <div className='form-group'>
                <label htmlFor='password'> Password </label>
                <input type='password' className='form-control' placeholder='*****' id='password' />
              </div>

              <div className='form-group'>
                <label htmlFor='confirmPassword'> Confirm password </label>
                <input type='password' className='form-control' placeholder='*****' id='confirmPassword' />
              </div>

              <div className='form-group'>
                <div className='file-image'>
                  <div className='image'>
                  </div>
                  <div className='file'>
                    <label htmlFor='image'> Select image </label>
                    <input type='file' className='form-control' id='image' />
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
