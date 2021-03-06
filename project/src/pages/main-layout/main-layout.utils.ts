import type { FilmItemType } from '../../components/app/app.types';
import { shuffleFilms } from '../../project.utils';
import { LIMIT } from './main-layout.constants';
import { PROMO_ID } from '../../mocks/films';

export const getSimilarFilms = (
  films: FilmItemType[],
  currentFilm?: FilmItemType
): FilmItemType[] => {
  if (!currentFilm) {
    return shuffleFilms(films).slice(0, LIMIT);
  }
  return shuffleFilms(films)
    .filter(({ id }) => id !== currentFilm.id && id !== PROMO_ID)
    .filter(({ genre }) => genre === currentFilm.genre)
    .slice(0, LIMIT);
};
