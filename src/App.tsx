import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/layout';
import {
  HomePage,
  LiveAuctionPage,
  MarketItemDetails,
  MarketPage,
  MarketCart,
  MarketLayout,
  DropsPage,
} from './views';
import AuctionPage from './views/Auction/AuctionPage/AuctionPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path='marketplace' element={<MarketLayout />}>
          <Route index element={<MarketPage />} />
          <Route path='cart' element={<MarketCart />} />
        </Route>
        <Route path='marketplace/:id' element={<MarketItemDetails />} />
        <Route path='auctions' element={<AuctionPage />} />
        <Route path='drops' element={<DropsPage />} />
      </Route>
      <Route path='auctions/live/:id' element={<LiveAuctionPage />} />
    </Routes>
  );
};

export default App;
