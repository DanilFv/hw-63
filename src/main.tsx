import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {BrowserRouter} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import {ToastContainer} from 'react-toastify';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);
dayjs.locale('ru');


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <CssBaseline />
          <ToastContainer />
          <App />
      </BrowserRouter>
  </StrictMode>,
)
