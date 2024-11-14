import './App.css';
import Home from "./components/Home"
import Player from './components/Player';
import Commentsection from './components/Commentsection';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Home />
    <Sidebar />
    <Search />
    <Player />
    <Commentsection />
    </>
    
  );
}

export default App;
