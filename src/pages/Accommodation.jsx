import React from 'react';
import '..//style/index.css';
import Slider from '..//components/slideshow/slideshow'
import Collapse from '../Collapse/collapse.jsx';
import data from '..//components/logements.json';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import emptyStar from '..//assets/emptystar.png';
import fullStar from '..//assets/fullstar.png';

export default function Accommodation({ accommodation }) {

    const [imageSlider, setImageSlider] = useState([]);

	const idAccommodation = useParams('id').id;
	const dataCurrentAccommodation = data.filter(data => data.id === idAccommodation);
	
	useEffect(() => {
		const dataCurrentAccommodation = data.filter(data => data.id === idAccommodation);
		setImageSlider(dataCurrentAccommodation[0].pictures);
	}, [idAccommodation]);

	const name = dataCurrentAccommodation[0].host.name.split(' '); 
	const rating = dataCurrentAccommodation[0].rating;
	const description  = dataCurrentAccommodation[0].description;
	const equipments = dataCurrentAccommodation[0].equipments;

  return (
    <div>
      <Slider imageSlider={imageSlider}/>
      <main className="accommodation">
				<div className="accommodation-content">
					<div className="accommodation-content-infos">
						<h1 className='accommodation-content-title'>{dataCurrentAccommodation[0].title}</h1>
						<p className='accommodation-content-location'>{dataCurrentAccommodation[0].location}</p>
						<div>
							{dataCurrentAccommodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accommodation-content-host">
						<div className='accommodation-content-host-display'>
							<div className='accommodation-content-host-name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img className='accommodation-content-image' src={dataCurrentAccommodation[0].host.picture} alt="hote" />
						</div>
							
						<div className="accommodation-content-host-stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? fullStar : emptyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accommodation-collapse">
					<div className="accommodation-collapse-block">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accommodation-collapse-block">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
    </div>
  );
}
