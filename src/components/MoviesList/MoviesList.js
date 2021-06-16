import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={`${styles.list} list`}>
      {movies.map(({ id, poster_path }) => (
        <li className={styles.item} key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
            ></img>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default withRouter(MoviesList);
