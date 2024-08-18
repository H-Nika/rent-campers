import { NavLink } from 'react-router-dom';
import DocumentTitle from '../../components/document-title/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <div className={css.container}>
          <div className={css.textContent}>
            <p className={css.span}>Freedom to Explore the World</p>
            <p className={css.title}>
              On our website, you can choose the camper of your dreams.
              The perfect vehicle for traveling with the whole family.
              Your opportunity to visit the most diverse corners of the world and relax amidst your favorite landscapes.
            </p>
          </div>
        <div className={css.containerImg}>
            <img
            src="/images/1.jpg"
            alt="Family camper"
            className={css.img}
            width={300}
            height={180}
          />
          <img
            src="/images/2.jpg"
            alt="Family camper"
            className={css.img}
            width={300}
            height={180}
          />
          <img
            src="/images/3.jpg"
            alt="Family camper"
            className={css.img}
            width={300}
            height={180}
            />
            </div>
          <div className={css.submitCont}>
            <NavLink className={css.submit} to="/catalog">
              Choose your dream
              </NavLink>
            </div>
        </div>
      </div>
      </>
  );
};

export default HomePage;
