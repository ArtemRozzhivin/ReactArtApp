import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import background from '../assets/images.jpg';

const Welcome = () => {
  return (
    <section className='flex flex-col justify-center text-center items-center m-auto w-screen text-white h-screen'>
      <img
        className='absolute brightness-75 object-cover object-center top-0 left-0 h-screen w-screen'
        src={background}
        alt='img'
      />
      <div className='z-10'>
        <h2 className='text-2xl font-medium items-center'>Art App</h2>
        <h1 className='md:text-4xl text-3xl font-semibold items-center py-5'>
          Learn more about 20th century art and artists
        </h1>

        <Link to='/login' className='text-xl'>
          <Button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
            Log on
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
