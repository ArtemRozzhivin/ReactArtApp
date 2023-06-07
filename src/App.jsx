import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Main from './layouts/Main';
import Artists from './pages/Artists';
import ArtistCard from './componets/ArtistCard';
import { useEffect, useState } from 'react';
import Welcome from './pages/Welcome';
import Register from './componets/Register';
import Login from './componets/Login';
import { AuthProvider } from './Contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Main';
import Arts from './componets/Arts';
import Favorits from './componets/Favorits';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#407068',
      error: '#17c75c',
    },
  },
});

function App() {
  const [artists, setArtists] = useState([]);
  const [likedArtists, setLikedArtists] = useState([]);
  const [likedPaintings, setLikedPaintings] = useState([]);

  const setPaint = (value) => {
    const item = likedPaintings.find((obj) => obj.id === value.id);
    if (item) {
      setLikedPaintings((prevState) => prevState.filter((obj) => obj.id !== value.id));
    } else {
      setLikedPaintings((prevState) => [...prevState, value]);
    }
  };

  const setLiked = (value) => {
    const item = likedArtists.find((obj) => obj.id === value.id);
    if (item) {
      setLikedArtists((prevState) => prevState.filter((obj) => obj.id !== value.id));
    } else {
      setLikedArtists((prevState) => [...prevState, value]);
    }
  };

  const fetchPersons = async () => {
    const { data } = await axios.get(`https://647f3edcc246f166da9069c5.mockapi.io/Artists`);
    setArtists(data[0].data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <>
      <div>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <ToastContainer position='bottom-right' />
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Main />}>
                <Route path='/info' element={<Home />} />
                <Route
                  path='/artists'
                  element={
                    <Artists setLiked={setLiked} likedArtists={likedArtists} artists={artists} />
                  }
                />
                <Route path='/artistDetails/:id' element={<ArtistCard />} />
                <Route
                  path='/artistDetails/:id/pictures'
                  element={<Arts likedPaintings={likedPaintings} setPaint={setPaint} />}
                />
                <Route
                  path='/favorits'
                  element={
                    <Favorits
                      likedArtists={likedArtists}
                      setLiked={setLiked}
                      likedPaintings={likedPaintings}
                      setPaint={setPaint}
                    />
                  }
                />
              </Route>
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
