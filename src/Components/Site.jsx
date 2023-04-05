import Inicio from './Inicio'
import Menu from './Menu'
import './Site.css'

function Site(){
    return(
        <div id='site'>
            <Menu/>
            <div id='theContent'>
                <Inicio/>
            </div>
        </div>
    )
}

export default Site