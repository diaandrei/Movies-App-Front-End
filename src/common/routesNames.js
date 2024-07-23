import { Home, SignUp, WatchList, MovieDetail, CreateMovie } from "../pages";

export const path = {
  home: `/`,
  watchList: "/watch-list",
  signUp: "/sign-up",
  movieDetail: "/movie/:id",
  createMovie: "/create-movie",
};
export const routes = {
  home: "/home",
  signUp: "/watch-list",
  signUp: "/sign-up",
  movieDetail: "/movie/:id",
  createMovie: "/create-movie",
};

export const publicPageRoutes = {
  [routes.home]: {
    name: routes.home,
    path: path.home,
    component: Home,
  },
  [routes.watchList]: {
    name: routes.watchList,
    path: path.watchList,
    component: WatchList,
  },
  [routes.signUp]: {
    name: routes.signUp,
    path: path.signUp,
    component: SignUp,
  },
  [routes.movieDetail]: {
    name: routes.movieDetail,
    path: path.movieDetail,
    component: MovieDetail,
  },
  [routes.createMovie]: {
    name: routes.createMovie,
    path: path.createMovie,
    component: CreateMovie,
  },
};

export const publicPaths = [path.home, path.watchList];
