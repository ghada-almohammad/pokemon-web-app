import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import { PokemonProvider } from './context/PokemonContext';
import { PokemonGroupedPage } from './pages/PokemonGroupedPage';
import "./homePage.css";

 
const App = () => (
 <PokemonProvider>
  <Router>
    <Routes>
      <Route exact path="/pokemon"  element={<HomePage />} />
      <Route path="/" element={<Navigate to="/pokemon" replace />} />
      <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      <Route path="/pokemon/groupedByHeight"  element={<PokemonGroupedPage />} />

      <Route path="*"   element={<h1>Page Not Found</h1>} />
    </Routes>
  </Router>
  </PokemonProvider>

);

export default App;
