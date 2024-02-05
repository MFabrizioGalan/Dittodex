import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js"
import { ThemeProvider } from '@mui/material';
import { theme } from './mui-theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
