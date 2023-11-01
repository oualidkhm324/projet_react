import { About } from "../components/about"
import { Informations_Personnelles } from "../components/Informations_Personnelles"
import {Formulaire} from "../components/Formulaire"
export const Home = () => {
    return(
    <div className="oualid mt-100">
        <img className='w-5/6 mx-auto' src='images/welcome_page.png' alt='welcome'/>
        <Formulaire />
        
    </div>        
    )
}
