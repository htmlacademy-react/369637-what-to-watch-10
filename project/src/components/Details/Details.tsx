import React from 'react';
import type { FilmItemType } from '../app/app.types';
import { useOutletContext } from 'react-router-dom';

function Details(): JSX.Element {
  const { year, genre, director, cast, runtime } =
    useOutletContext<FilmItemType>();

  return (
    <div className='film-card__text film-card__row'>
      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Director</strong>
          <span className='film-card__details-value'>{director}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Starring</strong>
          <span className='film-card__details-value'>
            {cast?.split(',').map((val) => (
              <>
                {val},<br />
              </>
            ))}
          </span>
        </p>
      </div>
      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Run Time</strong>
          <span className='film-card__details-value'>{runtime}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Genre</strong>
          <span className='film-card__details-value'>{genre}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Released</strong>
          <span className='film-card__details-value'>{year}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
