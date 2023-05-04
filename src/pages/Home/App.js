import '../../style/App.css';
import data from '../../components/logements.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Error from '../Error';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function App() {
  console.log(data);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /* data={data} */ />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
