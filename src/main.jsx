import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BookContextProvider } from './context/BookContext.jsx';
import { DoctorContextProvider } from './context/DoctorContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BookContextProvider>
      <DoctorContextProvider>
        <App />
      </DoctorContextProvider>
    </BookContextProvider>
  </BrowserRouter>,
);
