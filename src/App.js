// import './CSS/App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import {Theme} from  './utils/theme'
import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';
import CafeDetail  from './pages/CafeDetail';
import Admin from './pages/Admin';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cafedetails' element={<CafeDetail/>}/>
            <Route path='/Admin' element={<Admin/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
