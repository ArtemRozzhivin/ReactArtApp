import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { Divider } from '@mui/material';

const Favorits = ({ likedArtists, setLiked, likedPaintings, setPaint }) => {
  return (
    <div className='flex flex-col gap-12'>
      <div>
        {likedArtists.length === 0 ? (
          <div className='text-xl flex justify-center items-center my-10 text-app'>
            You did not add artists
          </div>
        ) : (
          <>
            <h2 className='text-5xl text-center text-app my-5'>Your favorites artists</h2>
            <ul className='grid xs:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-2'>
              {likedArtists.map((artist) => (
                <div className='flex flex-col items-center p-0 md:p-3 rounded-md' key={artist.id}>
                  <Link
                    key={artist.id}
                    className='group w-full'
                    to={`/artistDetails/${artist.id}`}
                    state={artist}>
                    <img
                      className='w-full h-[250px] object-center object-cover rounded-md bg-white border-4 group-hover:brightness-50 group-hover:border-app border-white transition-all'
                      src={artist.image}
                      alt='img'
                    />
                  </Link>
                  <div className='w-full mt-2 flex items-center justify-between'>
                    <div className='text'>{artist.artistName}</div>
                    <Button onClick={() => setLiked(artist)} variant='text'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill={likedArtists.includes(artist) ? 'currentColor' : 'none'}
                        className='w-6 h-6'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </ul>
          </>
        )}
      </div>
      <Divider />
      <div>
        {likedPaintings.length === 0 ? (
          <div className='text-xl flex justify-center items-center my-10 text-app'>
            You did not add paintings
          </div>
        ) : (
          <>
            <h2 className='text-5xl text-center text-app my-5'>Your favorites paintings</h2>

            <ul className='grid xs:grid-cols-2 md:grid-cols-4  gap-2 lg:gap-2'>
              {likedPaintings.map((paint) => (
                <div className='flex flex-col items-center p-0 md:p-3 rounded-md' key={paint.id}>
                  <h4>{paint.artistName}</h4>
                  <a
                    key={paint.id}
                    className='group w-full'
                    href={paint.image}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      className='w-full h-[250px] object-center object-cover rounded-md bg-white border-4 group-hover:brightness-50 group-hover:border-app border-white transition-all'
                      src={paint.image}
                      alt='img'
                    />
                  </a>
                  <div className='w-full mt-2 flex items-center justify-between'>
                    <div className='text'>{paint.title}</div>
                    <Button onClick={() => setPaint(paint)} variant='text'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill={likedPaintings.includes(paint) ? 'currentColor' : 'none'}
                        className='w-6 h-6'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorits;
