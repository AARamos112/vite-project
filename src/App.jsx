import NavBar from './assets/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import About from './pages/About';
import DataPage from './pages/DataPage';


function App() {

  return (
    <div >
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/datapage" element={<DataPage />} />
        </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
