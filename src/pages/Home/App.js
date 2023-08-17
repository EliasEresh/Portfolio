import '../../style/App.css';
import data from '../../components/logements.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function App() {
  console.log(data);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
