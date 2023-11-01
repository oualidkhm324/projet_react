import { FaLinkedinIn, FaPhone,FaHome  } from 'react-icons/fa'
import { FiMail} from 'react-icons/fi'
export const Contact = () => {
    return(
        <section>
            <h2 className="text-xl font-extrabold"> Contact: </h2>
                <ul className="mt-1">
                    <li className='flex items-center '><FiMail className='mr-3'/><a className="hover:text-[#213ED0]"href="mailto:androidwalid7@gmail.com">Yassine.oualid02@gmail.com</a></li>
                    <li className='flex items-center '><FaPhone className='mr-3'/>0648474534</li>
                    <li className='flex items-center '><FaLinkedinIn className='mr-3'/><a className="hover:text-[#213ED0]" href="https://www.linkedin.com/in/oualid-khmaich-a17795207/" target="_blank">/Yassine Oualid</a></li>
                    <li className='flex items-center '><FaHome className='mr-3' /><a className="hover:text-[#213ED0]" href="http://www.um5.ac.ma/um5/stand-emi" target="_blank"> Ecole Mohammedia d'Ingénieurs, Agdal Rabat</a></li>
                </ul>
        </section>
        
        )
    }

