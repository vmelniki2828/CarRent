import Catalog from 'components/Catalog/Catalog';
import Favorites from 'components/Favorites/Favorites';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import { useLocation } from 'react-router-dom';

const SharedLayout = () => {
    const location = useLocation()

  return (
    <div>
      <Header />
      {location.pathname === '/' && <Home />}
      {location.pathname === '/catalog' && <Catalog />}
      {location.pathname === '/favorites' && <Favorites />}
      <Footer />
    </div>
  );
};

export default SharedLayout;
