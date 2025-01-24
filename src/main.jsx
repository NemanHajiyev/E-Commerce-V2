import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


createRoot(document.getElementById('root')).render(
  <div >
    <CssBaseline />
    <Container maxWidth="lg">
      <App />
    </Container>
  </div>
);
