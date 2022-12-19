import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/layout';
import {
  HomePage,
  LiveAuctionPage,
  MarketItemDetails,
  MarketPage,
} from './views';
import AuctionPage from './views/Auction/AuctionPage/AuctionPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path='marketplace' element={<MarketPage />} />
        <Route path='marketplace/:id' element={<MarketItemDetails />} />
        <Route path='auctions' element={<AuctionPage />} />
        <Route path='drops' element={<div>drops</div>} />
      </Route>
      <Route path='auctions/live/:id' element={<LiveAuctionPage />} />
    </Routes>
  );
};

export default App;
