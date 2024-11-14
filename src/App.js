import './App.css';
import Home from "./components/Home"
import Player from './components/Player';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import AddSongForm from './components/AddSongForm';

function App() {
  return (
    <>
    <Home />
    <Sidebar />
    <Search />
    <Player />
    <AddSongForm />
    </>
    
  );
}

export default App;
