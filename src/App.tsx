import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

/**
 * Main App component.
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  )
}

export default App
