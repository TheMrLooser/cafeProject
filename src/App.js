// import './CSS/App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import {Theme} from  './utils/theme'
import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import CafeDetail  from './pages/CafeDetail';



function App() {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cafedetails' element={<CafeDetail/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
