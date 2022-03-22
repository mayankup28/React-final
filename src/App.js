import './App.css';
import Avenger from './Avenger';
import Avtar from './Avtar';
import Titanic from './Titanic';
import Star from './Star';
import Jurassic from './Jurassic'
import Movie from './Movie';

function App() {
  return (
    <>
      <Movie/>
    <div className='Main'>
      <Avtar/>
      <Titanic/>
      <Star/>
      <Avenger/>
      <Jurassic/>
    </div>
    </>
  );
}

export default App;
