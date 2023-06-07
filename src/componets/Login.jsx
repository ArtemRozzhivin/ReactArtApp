import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../ui/Button';
import Input from '../ui/Input';
import background from '../assets/images.jpg';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      toast.success('Welcome! ');
      navigate('/info');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError(toast.error('This email does not exist! '));
      } else if (error.code === 'auth/wrong-password') {
        setError(toast.error('Invalid password! '));
      } else {
        setError(toast.error('An error has occurred!'));
      }
      console.log(error.code);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      setError(toast.success('Welcome! '));
      navigate('/info');
    } catch (error) {
      setError(toast.error('An error has occurred! '));
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return toast.warning('Enter an Email');
    try {
      await resetPassword(user.email);
      setError(
        toast.success('We have sent you an email to reset your password. Check your Spam folder! '),
      );
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError(toast.error('Unregistered mail! '));
      } else {
        setError(toast.error('An error has occurred!'));
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <img
        className='absolute -z-10 brightness-75 object-cover object-center top-0 left-0 h-screen w-screen'
        src={background}
        alt='img'
      />
      <div className='max-w-xs rounded-md m-auto h-screen w-screen flex justify-center items-center'>
        <div>
          <form
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 border border-app'>
            <h2 className='text-center text-app text-2xl mb-4'>Login</h2>

            <div className='mb-4 flex flex-col gap-2'>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='example@gmail.com'
                onChange={handleChange}
              />
            </div>

            <div className='mb-6 flex flex-col gap-2'>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='password...'
                onChange={handleChange}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
            </div>

            <div className='flex flex-col items-center gap-4'>
              <Button type='submit'>Login</Button>

              <Link
                to='#'
                className='inline-block align-baseline font-bold text-sm text-app my-0.5'
                onClick={handleResetPassword}>
                Forgot your password?
              </Link>

              <Button variant='outlined' onClick={handleGoogle}>
                <div className='flex items-center gap-2'>
                  <svg
                    height='17px'
                    width='17px'
                    viewBox='0 0 56.6934 56.6934'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#407068'>
                    <path d='M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z' />
                  </svg>
                  <div>Start with Google</div>
                </div>
              </Button>
            </div>

            <div className='flex flex-col mt-5 bg-white tems-center text-center'>
              <p className='text-app my-0.5'>Don't have an account yet?</p>

              <Link
                to='/register'
                className='inline-block align-baseline font-bold text-sm text-white my-2'>
                <Button variant='outlined' type='submit'>
                  Register now
                </Button>
              </Link>
              <Link className='my-4' to='/'>
                <Button variant='outlined' type='submit'>
                  Close App
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;