import '../src/styles.scss'
import { Navigation } from './components/Navigation';
import { FilmInfo } from './components/FilmInfo';
import { NewFilms } from './components/NewFilms';
import { AllFilms } from './components/Allfilms';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <FilmInfo/>
      <NewFilms/>
      <AllFilms/>
    </div>
  );
}

export default App;
