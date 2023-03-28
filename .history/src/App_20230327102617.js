import './App.css'
import Header from './Header';
import img from './img/mandalorian.jpeg'

function App() {
  return (
    <div className="App">
   <Header />
   <section className='banner'>
    <img src={img} alt/>
   </section>
    </div>
  );
}

export default App;
