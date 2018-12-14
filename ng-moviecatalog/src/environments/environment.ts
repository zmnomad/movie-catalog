// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://localhost:4200/api',
  routes: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    getDirectors: '/director/directors',
    getDirectorById: '/director/',
    addDirector: '/director/addDirector',
    updateDirector: '/director/updateDirector',
    deleteDirector: '/director/deleteDirector/',
    getMovies: '/movie/movies',
    getMovieById: '/movie/',
    addMovie: '/movie/addMovie',
    updateMovie: '/movie/updateMovie',
    deleteMovie: '/movie/deleteMovie/',
    getReviewsOfMovie: '/review/',
    addReview: '/review/addReview',
    deleteReview: `/review/deleteReview/`
  }
};
