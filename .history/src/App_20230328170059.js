import './App.css'
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Sessao from './componentes/Sessao';
import Studios from './componentes/Studios';
import novidades from './componentes/Sessao/novidades.json'
import tendencias from './componentes/Sessao/tendencias.json'
import rever from './componentes/Sessao/rever.json'
import {Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Studios />
      <Sessao
        title='Novidades no Disney+'
        galeria={novidades}
      />
      <Sessao
        title='Tendências'
        galeria={tendencias}
      />
       <Sessao
        title='Volte a assistir'
        galeria={rever}
      />
      <Route path='/menu' element={<Menu/>}>
      <Footer />

      </Route>
    </div>
  );
}

export default App;
