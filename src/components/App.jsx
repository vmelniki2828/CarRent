import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Catalog from './Catalog/Catalog';
import Favorites from './Favorites/Favorites';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
