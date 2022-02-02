import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/settings/:room' element={<Settings />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
