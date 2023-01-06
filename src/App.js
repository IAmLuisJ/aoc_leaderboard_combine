
import './App.css';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <article>
        <p>Advent of Code Leaderboard App</p>
      </article>
       <Leaderboard />
    </div>
  );
}

export default App;
