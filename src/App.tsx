import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<div>HomePage</div>} />
        <Route path='marketplace' element={<div>marketplace</div>} />
        <Route path='auctions' element={<div>auctions</div>} />
        <Route path='drops' element={<div>drops</div>} />
      </Route>
    </Routes>
  );
};

export default App;
