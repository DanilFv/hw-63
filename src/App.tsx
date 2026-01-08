import './App.css';
import {Box, Container, Typography} from '@mui/material';
import NavBar from './components/NavBar/NavBar.tsx';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import NewPost from './containers/NewPost/NewPost.tsx';
import EditPost from './containers/EditPost/EditPost.tsx';
import FullPost from './containers/FullPost/FullPost.tsx';

const App = () => {


  return (
    <>
        <NavBar />

        <Box>
            <Container maxWidth="lg" sx={{ mt: '20px'}}>
                <Routes>
                    <Route path="/" element={(<Home />)} />
                    <Route path="/posts" element={(<Home />)} />

                    <Route path="/new-post" element={(<NewPost />)} />
                    <Route path="/posts/:id" element={(<FullPost />)} />
                    <Route path="/posts/:id/edit" element={(<EditPost />)} />



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
