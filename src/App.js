
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState("home")
  return (
    <div>
      <Navbar setTab={setTab}></Navbar>
      {tab === "home" && <Home></Home>}
      {tab === "cart" && <Cart></Cart>}
    </div>
  );
}

export default App;
