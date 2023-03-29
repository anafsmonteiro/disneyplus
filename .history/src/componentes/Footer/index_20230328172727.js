import home from './assets/home.svg'
import search from './assets/search.svg'
import download from './assets/dowload.svg'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className='rodape'>
            <Link to='/'>
            <img src=<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">#A4A6A7<a4a6a7ga4a6a7 a4a6a7ia4a6a7da4a6a7="#A4A6A7&quot;#A4A6A7S#A4A6A7V#A4A6A7G#A4A6A7R#A4A6A7e#A4A6A7p#A4A6A7o#A4A6A7_#A4A6A7b#A4A6A7g#A4A6A7C#A4A6A7a#A4A6A7r#A4A6A7r#A4A6A7i#A4A6A7e#A4A6A7r#A4A6A7&quot;#A4A6A7" a4a6a7sa4a6a7ta4a6a7ra4a6a7oa4a6a7ka4a6a7ea4a6a7-a4a6a7wa4a6a7ia4a6a7da4a6a7ta4a6a7ha4a6a7="#A4A6A7&quot;#A4A6A70#A4A6A7&quot;#A4A6A7">#A4A6A7<a4a6a7 a4a6a7ga4a6a7="">#A4A6A7<a4a6a7ga4a6a7 a4a6a7ia4a6a7da4a6a7="#A4A6A7&quot;#A4A6A7S#A4A6A7V#A4A6A7G#A4A6A7R#A4A6A7e#A4A6A7p#A4A6A7o#A4A6A7_#A4A6A7t#A4A6A7r#A4A6A7a#A4A6A7c#A4A6A7e#A4A6A7r#A4A6A7C#A4A6A7a#A4A6A7r#A4A6A7r#A4A6A7i#A4A6A7e#A4A6A7r#A4A6A7&quot;#A4A6A7" a4a6a7sa4a6a7ta4a6a7ra4a6a7oa4a6a7ka4a6a7ea4a6a7-a4a6a7la4a6a7ia4a6a7na4a6a7ea4a6a7ca4a6a7aa4a6a7pa4a6a7="#A4A6A7&quot;#A4A6A7r#A4A6A7o#A4A6A7u#A4A6A7n#A4A6A7d#A4A6A7&quot;#A4A6A7" a4a6a7sa4a6a7ta4a6a7ra4a6a7oa4a6a7ka4a6a7ea4a6a7-a4a6a7la4a6a7ia4a6a7na4a6a7ea4a6a7ja4a6a7oa4a6a7ia4a6a7na4a6a7="#A4A6A7&quot;#A4A6A7r#A4A6A7o#A4A6A7u#A4A6A7n#A4A6A7d#A4A6A7&quot;#A4A6A7">#A4A6A7<a4a6a7 a4a6a7ga4a6a7="">#A4A6A7<a4a6a7ga4a6a7 a4a6a7ia4a6a7da4a6a7="#A4A6A7&quot;#A4A6A7S#A4A6A7V#A4A6A7G#A4A6A7R#A4A6A7e#A4A6A7p#A4A6A7o#A4A6A7_#A4A6A7i#A4A6A7c#A4A6A7o#A4A6A7n#A4A6A7C#A4A6A7a#A4A6A7r#A4A6A7r#A4A6A7i#A4A6A7e#A4A6A7r#A4A6A7&quot;#A4A6A7">#A4A6A7<a4a6a7pa4a6a7aa4a6a7ta4a6a7ha4a6a7 a4a6a7fa4a6a7ia4a6a7la4a6a7la4a6a7="#A4A6A7&quot;#A4A6A7&quot;#A4A6A7" a4a6a7da4a6a7="#A4A6A7&quot;#A4A6A7M#A4A6A75#A4A6A71#A4A6A72#A4A6A7" a4a6a71a4a6a72a4a6a78a4a6a7="" a4a6a74a4a6a74a4a6a77a4a6a7.a4a6a79a4a6a73a4a6a76a4a6a7va4a6a78a4a6a79a4a6a76a4a6a7ha4a6a72a4a6a75a4a6a75a4a6a7.a4a6a79a4a6a73a4a6a76a4a6a7va4a6a76a4a6a74a4a6a70a4a6a7ha4a6a76a4a6a74a4a6a70a4a6a7va4a6a72a4a6a75a4a6a76a4a6a7ha4a6a72a4a6a75a4a6a75a4a6a7.a4a6a79a4a6a73a4a6a76a4a6a7va4a6a74a4a6a74a4a6a77a4a6a7.a4a6a79a4a6a73a4a6a76a4a6a7za4a6a7"a4a6a7="">#A4A6A7<a4a6a7 a4a6a7pa4a6a7aa4a6a7ta4a6a7ha4a6a7="">#A4A6A7<a4a6a7 a4a6a7ga4a6a7="">#A4A6A7</a4a6a7></a4a6a7></a4a6a7pa4a6a7aa4a6a7ta4a6a7ha4a6a7></a4a6a7ga4a6a7></a4a6a7></a4a6a7ga4a6a7></a4a6a7></a4a6a7ga4a6a7></svg> alt='perfil' className='perfil'/>
            </Link>
            <img src={search} alt='perfil' className='perfil'/>
            <img src={download} alt='perfil' className='perfil'/>
            <Link to='/menu'>
            <img src='./assets/perfil.jpg' alt='perfil' className='perfil'/>
            </Link>

      </footer>
    )
}

export default Footer