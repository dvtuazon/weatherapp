import { Routes, Route } from 'react-router-dom';
import Main from './components/MainComponent.js';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Main />} />
    </Routes>
  );
}

export default App;
