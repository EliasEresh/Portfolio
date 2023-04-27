import './App.css';
import data from './logements.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  console.log(data);
  return (
    <Router>
      <div>
        <h1>Liste</h1>
        {data.map((logement) => (
          <div key={logement.id}>
            <h2>{logement.title}</h2>
            <p>{logement.description}</p>
          </div>
        ))}
      </div>
    </Router>
  );
}

export default App;
