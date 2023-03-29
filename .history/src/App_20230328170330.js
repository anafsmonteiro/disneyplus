import './App.css'
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Sessao from './componentes/Sessao';
import Studios from './componentes/Studios';
import novidades from './componentes/Sessao/novidades.json'
import tendencias from './componentes/Sessao/tendencias.json'
import rever from './componentes/Sessao/rever.json'
import {Routes,Route} from 'react-router-dom'
import Menu from './componentes/Menu';



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
      <Routes>
      <Route path="/" element={<App />} />
      <Route path='/menu' element={<Menu/>}>
      </Routes>
      <Footer />

      </Route>
    </div>
  );
}

export default App;
