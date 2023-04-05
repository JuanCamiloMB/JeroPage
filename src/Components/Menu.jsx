import { useState } from "react"
import Menu_img from '../assets/menu.svg'
import './Menu.css'
import Close_img from '../assets/close.svg'

function Menu(){
    const [desplegado, setDesplegado] = useState(false)
    function menuClick(){
        if(desplegado === false){
            setDesplegado(true)
            document.body.style.overflow = "hidden";
        }else{
            document.getElementById('menu_options').style.animation="backOutUp 0.5s";
            document.getElementById('close_btn').style.animation="backOutRight 0.5s";
            setTimeout(()=>{setDesplegado(false)}, 500)
            
            document.body.style.overflow = "visible";
        }
    }

    return(
        <>
            {desplegado ? (
                <nav id="menu_open">
                    <div id='close_btn' onClick={menuClick}>
                        <img id='close_img' src={Close_img}/>
                    </div>
                    <div id="menu_options">
                        <a href="#">Primera seccion</a>
                        <a href="#">Segunda seccion</a>
                        <a href="#">Tercera seccion</a>
                        <a href="#">Cuarta seccion</a>
                        <a href="#">Quinta seccion</a>
                        <a href="#">Sexta seccion</a>
                    </div>
                </nav>
            ):(
                <nav id="menu_close">
                    <img id='menu_img' src={Menu_img} onClick={menuClick}/>
                </nav>
            )}
        </>
    )
}

export default Menu