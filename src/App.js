import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ColorFactory from './ColorFactory';
import ColorForm from './ColorForm';
import Color from './Color';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorFactory />} > 
            <Route path=":color" element={<Color />} /> 
            <Route path="new" element={<ColorForm />} /> 
          </Route>
          
          <Route path='*' element={<Navigate to='/colors'/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
