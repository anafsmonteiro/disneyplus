import './App.css'
import Banner from './componentes/Banner';
import Header from './componentes/Header';
import studio from'./img/disney.png'

function App() {
  return (
    <div className="App">
   <Header />
   <Banner />
   <section className='studios'>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
    <img src={studio} alt='studio' className='studio'/>
   </section>
    </div>
  );
}

export default App;
