import './App.css'
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Sessao from './componentes/Sessao';
import Studios from './componentes/Studios';
import novidades from './componentes/Sessao/novidades.json'
import tendencias from './componentes/Sessao/tendencias.json'


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
        galeria
      />
       <Sessao
        title='Volte a assistir'
      />
      <Footer />
    </div>
  );
}

export default App;
