import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { toast } from 'react-toastify';
import { Divider, MenuItem, OutlinedInput, Select } from '@mui/material';
import routes from '../../routes/routes';
import { useAuth } from '../../Contexts/AuthContext';
import logo from '../../assets/logo.png';

const Navbar = ({ userName, onClickVisibleBurger }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [select, setSelect] = React.useState('');

  const { user, logout } = useAuth();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setError(toast.success('Goodbye!'));
    } catch (error) {
      setError(toast.error('An error has occurred!'));
    }
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      {pathname !== '/login' && pathname !== '/register' && pathname !== '/' ? (
        <div className='sticky top-0 left-0 z-10 flex justify-between items-center w-full p-5 bg-light shadow-xl rounded-b-sm'>
          <div onClick={() => onClickVisibleBurger(true)} className='mx-1 lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#407068'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </div>

          <div className='flex items-center'>
            <img className='w-20' src={logo} alt='img' />
            <h1 className='text-2xl text-app'>Art App</h1>
          </div>

          <ul className='hidden lg:flex items-center gap-3'>
            {routes.map((item) => (
              <li key={item.name}>
                <Link to={item.route}>
                  <Divider variant='vertical' />
                  <Button variant='text'>{item.name}</Button>
                </Link>
              </li>
            ))}
            {userName === 'admin' ? (
              <Link to='/admin'>
                <Button variant='text'>Адмін</Button>
              </Link>
            ) : (
              ''
            )}
          </ul>

          <div className='hidden lg:block'>
            <div className='flex items-center gap-2'>
              <Select value={20} label='user' input={<OutlinedInput />} onChange={handleChange}>
                <MenuItem
                  value={20}
                  children={
                    <div>
                      {user === null ? (
                        'Loading...'
                      ) : (
                        <div className='flex gap-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='#407068'
                            class='w-6 h-6'>
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                          </svg>
                          {user.displayName || user.email}
                        </div>
                      )}
                    </div>
                  }
                />
                <MenuItem
                  value={10}
                  onClick={handleLogout}
                  children={
                    <div className='flex gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='#407068'
                        class='w-6 h-6'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      LogOut
                    </div>
                  }
                />
              </Select>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Navbar;
