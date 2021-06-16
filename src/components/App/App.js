import { Component, Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';

import routes from 'routes';
import AppBar from 'components/AppBar';

const Homepage = lazy(() =>
  import('view/Homepage' /* webpackChunkName: "Homepage" */),
);
const MoviesPage = lazy(() =>
  import('view/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('view/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<b>Загружаем...</b>}>
          <Switch>
            <Route exact path={routes.home} component={Homepage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route
              path={routes.movieDetailsPage}
              component={MovieDetailsPage}
            />
            <Route component={Homepage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
