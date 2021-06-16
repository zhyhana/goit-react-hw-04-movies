import styles from './Navigation.module.css';
import routes from 'routes';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className={`${styles.list} list`}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={routes.movies}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
