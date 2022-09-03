// import './CSS/App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import {Theme} from  './utils/theme'
import { NavBar } from './components/Navbar';
import { Home } from './pages/Home';


function App() {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
