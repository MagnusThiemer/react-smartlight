import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ContextProvider } from './context/context';


function App() {
  const location = useLocation();
  return (
    <ContextProvider>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home/>}/>
          <Route path='/settings/:room' element={<Settings />}/>
        </Routes>
      </AnimatePresence>
    </ContextProvider>
  );
}

export default App;
