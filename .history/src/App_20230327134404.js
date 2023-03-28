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
      <Sessao
        title='Novidades no Disney+'
      />
      <Sessao
        title='Tendências'
      />
      <footer></footer>
    </div>
  );
}

export default App;
