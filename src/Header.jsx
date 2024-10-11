import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'

export default function Header()
{
   
     return(
        <div className="header">
            <FontAwesomeIcon icon={faEarthEurope} className="icon1"/>
            <h1 className="heading">My Travel Journal</h1>
        </div>
        
     )
}