import { Link } from 'react-router-dom';
import '../../style/index.css';

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/accommodation/${id}`} className="gallery-card">
      <img src={cover} alt={title} className='gallery-img'/>
      <h3 className='card-title'>{title}</h3>
    </Link>
  );
}
