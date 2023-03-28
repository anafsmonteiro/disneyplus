import './App.css'
import Banner from './componentes/Banner';
import Header from './componentes/Header';
import Sessao from './componentes/Sessao';
import Studios from './componentes/Studios';

function App() {
  return (
    <div className="App">
   <Header />
   <Banner />
   <Studios />
   {
    {
    } <Sessao 
     title='Novidades no Disney+' key={1}
     />
      
     <Sessao 
     title='Tendências'key={2}
     />

   }
    </div>
  );
}

export default App;
