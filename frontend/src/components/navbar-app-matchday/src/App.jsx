import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ligas from './pages/Ligas';
import Partidos from './pages/Partidos';
import Equipos from './pages/Equipos';
import Calendario from './pages/Calendario';
import Registro from './pages/Registro';
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ligas" element={<Ligas />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;

