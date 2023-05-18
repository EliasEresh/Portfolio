import '../../style/index.css';
import data from '../../components/logements.json';
import Card from '../cards/cards';

export default function Gallery() {
  return (
    <main className="gallery-main">
      {data.map((accommodation) => (
        <Card
          key={accommodation.id}
          id={accommodation.id}
          title={accommodation.title}
          cover={accommodation.cover}
        />
      ))}
    </main>
  );
}
