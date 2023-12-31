import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18next'
import { Box, CircularProgress } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={(
      <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <CircularProgress/>
      </Box>)}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
