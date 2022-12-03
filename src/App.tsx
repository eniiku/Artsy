import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Navbar</div>}>
        <Route index element={<div>HomePage</div>} />
<<<<<<< Updated upstream
=======
        <Route path='marketplace' element={<div>marketplace</div>} />
        <Route path='auctions' element={<div>auctions</div>} />
        <Route path='drops' element={<div>drops</div>} />
>>>>>>> Stashed changes
      </Route>
    </Routes>
  );
};

export default App;
