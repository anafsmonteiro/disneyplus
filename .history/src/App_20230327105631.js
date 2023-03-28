import './App.css'
import Banner from './componentes/Banner';
import Header from './componentes/Header';
import studio from'./img/disney.svg'

function App() {
  return (
    <div className="App">
   <Header />
   <Banner />
   <section className='studios'>
    <img src='./img/disney.svg' alt='studio'/>
   </section>
    </div>
  );
}

export default App;
