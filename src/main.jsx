import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { store } from './Redux/Store.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <div >
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>,
  </div>
);
