import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/layout';
import { HomePage, MarketPage } from './views';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path='marketplace' element={<MarketPage />} />
        <Route path='auctions' element={<div>auctions</div>} />
        <Route path='drops' element={<div>drops</div>} />
      </Route>
    </Routes>
  );
};

export default App;
