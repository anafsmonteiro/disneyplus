import icons from './footer.json'
import './footer.css'
import Menu from '../Menu'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Footer() {
    return (
                <Route path='/menu' element={<Menu/>}>
                    <footer className='rodape'>
                        {
                            icons.map(icon => (
                                <img src={icon.imagem} alt='icones' className='icones' />
                            ))
                        }
                        <Link to='/menu'>
                            <img src='./assets/perfil.jpg' alt='perfil' className='perfil' />
                        </Link>

                    </footer>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Footer