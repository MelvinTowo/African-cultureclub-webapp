import {Navbar} from './Components'
import './App.scss';
import {Home, ContactFAC, Team, Events, Connect} from './pages'
import { Footer } from './Container';
import{Route, Routes} from 'react-router-dom'

function App() {
  return (
   <>
    <div>
      <Navbar />
    </div>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ContactFAC" element={<ContactFAC />} />
        <Route path ="/Connect" element={<Connect />} />
        <Route path ="/Team" element={<Team />} />
        <Route path = "/Events" element={<Events />} />
      </Routes>
    </div>
    <div>
      <Footer />
    </div>
   </>
  );
}

export default App;
