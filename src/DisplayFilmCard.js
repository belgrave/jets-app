import React from 'react';

const filmCard = (card) => {
    return (
        <div key={card.episode_id} className='FilmCard'>
            <h2>{card.title} </h2>
            <h4>{card.opening_crawl} </h4>
            <div>Director: {card.director} </div>
            <div>Producer: {card.producer} </div>
            <div>Release Date: {card.release_date} </div>
            <br />
        </div>
    );
}

const DisplayFilmCard = ({ filmCards }) => {
    return (
        <div className="FilmPanel">
            <h1>List of Star Wars Films</h1>
            {filmCards && filmCards.map((item) => {
                return (filmCard(item));
            })
            }
        </div>
    );
}

export default DisplayFilmCard;