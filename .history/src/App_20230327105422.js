import './App.css'
import Banner from './componentes/Banner';
import Header from './componentes/Header';

function App() {
  return (
    <div className="App">
   <Header />
   <Banner />
   <section className='studios'>
    <img src='./img/disney.svg' alt/>
   </section>
    </div>
  );
}

export default App;
