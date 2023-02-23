import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/layout';
import { CartProvider } from './context/CartContext';
import {
  HomePage,
  LiveAuctionPage,
  MarketItemDetails,
  MarketPage,
  MarketCartLayout,
  MarketLayout,
  DropsPage,
} from './views';
import AuctionPage from './views/Auction/AuctionPage/AuctionPage';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='marketplace' element={<MarketLayout />}>
            <Route index element={<MarketPage />} />
            <Route path='cart' element={<MarketCartLayout />} />
          </Route>
          <Route path='marketplace/:id' element={<MarketItemDetails />} />
          <Route path='auctions' element={<AuctionPage />} />
          <Route path='drops' element={<DropsPage />} />
        </Route>
        <Route path='auctions/live/:id' element={<LiveAuctionPage />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
