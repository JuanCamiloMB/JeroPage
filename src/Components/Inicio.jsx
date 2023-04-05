import Logo from '../assets/LogoJero.svg'
import './Inicio.css'

function Inicio(){
    return(
        <div id='inicio'>
            <div id='name'>Jeronimo Uribe Aranzazu</div>
            <div id='description'>Psicologo</div>
            <img src={Logo} id='logo'/>
        </div>
    )
}

export default Inicio