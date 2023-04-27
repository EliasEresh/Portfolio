import './App.css';
import data from './logements.json';

function App() {
  console.log(data);
  return (
    <div>
      <h1>Liste</h1>
      {data.map((logement) => (
        <div key={logement.id}>
          <h2>{logement.title}</h2>
          <p>{logement.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
