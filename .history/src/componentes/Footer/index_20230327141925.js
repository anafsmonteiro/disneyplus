import icons from './footer.json'
import './footer.css'
function Footer(){
    return(
        <footer className='rodape'>
            {
                icons.map(icon =>(
                    <img src={icon.imagem} alt='icones' className='icones'/>
                ))
            }
            <img src='https://1.bp.blogspot.com/-vEaTmM2EUMg/XopwfvfV_oI/AAAAAAAAFhc/lv446wqVYN4Co4aSCMv0-3x7gQfa76DyQCEwYBhgLKs0DAMBZVoDSAsVKhV1Q98DujSj4x2wrwsV2kul0EN9TU3WOON0eufMrp9F-qcAy4f_GlniAgGLrR2UYNX395bCkeMp1VEUy28x6lQBpBBTnDq0WeaTxPGY08B9Jx_0yI2i1pJ3bDMrEyOwY_P0Z_W-WkojFZoN8a0Z8XJgci1kQbkZOi3sR17eLCPlbX_eMHXfI-aptlMjjESqX4yyO7EI7RERRyZGXW8h570YRE3ae1I-eJoH-P-Ac4_OJDUMFU1WhvDXWwdvGnlfQVMHX5JUHg7_kW3G0-Opuw-PB82wdUgntvnJWX6i7rQqSIkDPdNyyYAewziPNYvrJsR0J80b-KJgjn3wpJrJxCn3BJ6WN8T8ECnCSmoL6DQwjC_MvTOycAZAl3nps-daa0HWdOu-sTw_KWlJ06aceFXsxtcr-Lo8YS9CpIJl5s2qu6v2O9POVfcVP3XaW8Yq1rhe4KILVv1U6Nm2oyFcuPt44xu03ECkDenoUPLPGaugQYkM3RLE-OuC6wNr_yPIDwaYCUL-9m4ulEg9odGvXqgP75uNtNkpPzfAhJBJDGLsdjVACb1sKB2QRndiVak7gQ2t0JB30zmpBXvmUlo5VPuln_Uwwguap9AU/s1600/13444401_JeFQw.jpg' alt='perfil' className='perfil' />
      </footer>
    )
}

export default Footer