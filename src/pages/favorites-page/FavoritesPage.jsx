import DocumentTitle from '../../components/document-title/DocumentTitle';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {


  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.container}>
      <div className={css.title}>FavoritesPage</div>
        <span className={css.span}>This page is being created to display your preferences. We are doing everything we can to get it up and running as soon as possible!</span>
        <span className={css.span1}>Thank you for your understanding!</span>
      </div>
    </>
  );
};

export default FavoritesPage;
