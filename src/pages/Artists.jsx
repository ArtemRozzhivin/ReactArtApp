import React, { useEffect, useState } from 'react';
import { searchFromList } from '../utils/searchFromList';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import Input from '../ui/Input';

const Artists = ({ artists, likedArtists, setLiked }) => {
  const [search, setSearch] = useState('');
  const [searchedArtists, setSearchedArtists] = useState(artists !== '' ? artists : []);

  useEffect(() => {
    setSearchedArtists(searchFromList(artists, search));
  }, [artists, search]);

  const onChangeValue = (value) => {
    setSearch(value);
  };

  const onClearValue = () => {
    setSearch('');
  };

  return (
    <div className='px-0 p-5 flex flex-col gap-5'>
      <h2 className='text-5xl text-center text-app my-5'>List of artists of the 20th century</h2>
      <div className='relative mx-2'>
        <Input
          value={search}
          onChange={(e) => onChangeValue(e.target.value)}
          placeholder='Search a artists...'
        />
        {search && (
          <div className='absolute top-[11px] right-4'>
            <Button onClick={onClearValue}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </Button>
          </div>
        )}
      </div>

      <div>
        {artists.length === 0 ? (
          <div className='text-7xl text-app text-center my-10'>Loading...</div>
        ) : (
          <ul className='grid xs:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-2 lg:gap-2'>
            {searchedArtists.map((artist) => (
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
        )}
      </div>
    </div>
  );
};

export default Artists;
