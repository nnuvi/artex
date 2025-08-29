import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './features/landing/pages/LandingPage'; 
import './app.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add other routes like /login, /dashboard etc. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
