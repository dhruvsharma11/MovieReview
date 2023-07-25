import * as React from 'react';
import Review from '../Review';
import Landing from '../Landing';
import Search from '../Search';
import MyPage from '../MyPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
