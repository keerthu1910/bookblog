import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Classics from './components/Classics';
import Crimeandthriller from './components/Crimeandthriller';
import Nonfiction from './components/Nonfiction';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/classics' element={<Classics />}></Route>
          <Route path='/crimeandthriller' element={<Crimeandthriller />}></Route>
          <Route path='/nonfiction' element={<Nonfiction />}></Route>
      </Routes>
    </div>
  );
}

export default App;
