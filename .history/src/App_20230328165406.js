import './App.css'
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Sessao from './componentes/Sessao';
import Studios from './componentes/Studios';
import novidades from './componentes/Sessao/novidades.json'
import tendencias from './componentes/Sessao/tendencias.json'
import rever from './componentes/Sessao/rever.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
      <BrowserRouter>
    <div className="App">
        <Routes>
          <Route>

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
            <Footer />
          </div>

        />
      />
    />
  );
}

export default App;
