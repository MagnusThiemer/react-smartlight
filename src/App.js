import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Home/>}/>
        <Route path='/settings/:room' element={<Settings />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
