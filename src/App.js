import './App.css';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import Career from './Components/Career';
import Awards from './Components/Awards';
import Personal from './Components/Personal';
import Base from './Components/Base';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Education></Education>
      <Career></Career>
      <Personal></Personal>
      <Awards></Awards>
    <Base></Base>
    </>
  );
}

export default App;
