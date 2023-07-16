import NavBar from './assets/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import About from './pages/About';
import DataPage from './pages/DataPage';
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

const logoutWithRedirect = () =>
  logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
  });

  return (
    <div >
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          {isAuthenticated && (
          <Route path="/datapage" element={<DataPage />} />
          )}


        </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
