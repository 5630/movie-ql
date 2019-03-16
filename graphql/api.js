import rp from 'request-promise';
const BASE_URL = 'https://yts.am/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => await rp({
    url: LIST_MOVIES_URL,
    method: 'GET',
    qs: {
        limit,
        minimum_rating: rating
    },
    json: true,
    transform: body => body.data.movies
});

export const getMovie = async id => await rp({
    url: MOVIE_DETAILS_URL,
    method: 'GET',
    qs: {
        movie_id: id
    },
    json: true,
    transform: body => body.data.movie
});

export const getSuggestion = async id => await rp({
    url: MOVIE_SUGGESTIONS_URL,
    method: 'GET',
    qs: {
        movie_id: id
    },
    json: true,
    transform: body => body.data.movies
});