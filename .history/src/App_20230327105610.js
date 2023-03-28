import './App.css'
import Banner from './componentes/Banner';
import Header from './componentes/Header';
import './'

function App() {
  return (
    <div className="App">
   <Header />
   <Banner />
   <section className='studios'>
    <img src='./img/disney.png' alt='studio'/>
   </section>
    </div>
  );
}

export default App;
