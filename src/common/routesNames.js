import {
  Home,
  SignUp,
  WatchList,
  MovieDetail,
  CreateMovie,
  MoviesList,
  SignIn,
} from "../pages";

export const path = {
  home: `/`,
  watchList: "/watch-list",
  signUp: "/sign-up",
  signIn: "/sign-in",
  movieDetail: "/title/:id",
  createMovie: "/create-title",
};
export const routes = {
  home: `/`,
  watchList: "/watch-list",
  signUp: "/sign-up",
  signIn: "/sign-in",
  movieDetail: "/title/:id",
  createMovie: "/create-title",
};

export const titles = {
  home: `Home`,
  watchList: "Watchlist",
  signUp: "Sign Up",
  signIn: "Sign In",
  movieDetail: "Title Detail",
  createMovie: "Create Title",
};

export const privatePageRoutes = {
  [routes.home]: {
    name: routes.home,
    path: path.home,
    title: titles.home,
    component: Home,
  },
  [routes.watchList]: {
    name: routes.watchList,
    path: path.watchList,
    title: titles.watchList,
    component: WatchList,
  },
  [routes.movieDetail]: {
    name: routes.movieDetail,
    path: path.movieDetail,
    title: titles.movieDetail,
    component: MovieDetail,
  },
  [routes.createMovie]: {
    name: routes.createMovie,
    path: path.createMovie,
    title: titles.createMovie,
    component: CreateMovie,
  }
};

export const publicPageRoutes = {
  [routes.home]: {
    name: routes.home,
    path: path.home,
    title: titles.home,
    component: Home,
  },
  [routes.signUp]: {
    name: routes.signUp,
    path: path.signUp,
    title: titles.signUp,
    component: SignUp,
  },
  [routes.signIn]: {
    name: routes.signIn,
    path: path.signIn,
    title: titles.signIn,
    component: SignIn,
  },
  [routes.movieDetail]: {
    name: routes.movieDetail,
    path: path.movieDetail,
    title: titles.movieDetail,
    component: MovieDetail,
  },
};

export const publicPaths = [path.home, path.watchList];
