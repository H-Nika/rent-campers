import Navigation from '../navigation/Navigation';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
