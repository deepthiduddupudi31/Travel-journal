
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Parameters(props)
{
     return(
        <div className="pass">
        <img src={props.image}/>
        <div className="side">
        <div className="location">
         <FontAwesomeIcon icon={faLocationDot} className="icon" />
         <p className="country">{props.country}</p>
         <br></br>
         <a href="#">View on maps</a>
        </div>
        <h1 className="name">{props.name}</h1>
        <p>{props.Date}</p>
        <p className="description">{props.description}</p>
        </div>
        </div>
        
     )
}