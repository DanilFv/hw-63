import './App.css';
import {Box, Container, Typography} from '@mui/material';
import NavBar from './components/NavBar/NavBar.tsx';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home.tsx';

const App = () => {


  return (
    <>
        <NavBar />

        <Box>
            <Container maxWidth="lg" sx={{ mt: '20px'}}>
                <Routes>
                    <Route path="/" element={(<Home />)} />
                    <Route path="/posts" element={(<Home />)} />

                    <Route path="/new-post" element={(<Home />)} />
                    <Route path="/posts/:id/edit" element={(<Home />)} />



                    <Route
                        path="*"
                        element={(<Typography component='p' variant='h4' sx={{textAlign: 'center'}}>Not found page!</Typography>)}
                    />
                </Routes>
            </Container>
        </Box>

    </>
  )
};

export default App
