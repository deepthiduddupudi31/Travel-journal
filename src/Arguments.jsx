export default function Arguments(props)
{
     return(
        <div className="pass">
        {/* <img src={props.img}/> */}
        <div className="side">
        <div className="location">
         <FontAwesomeIcon icon={faLocationDot}/>
         <p className="country">{props.country}</p>
         <a href="#">View on maps</a>
        </div>
        <h1>{props.name}</h1>
        <p>{props.Date}</p>
        <p className="description">{props.description}</p>
        </div>
        </div>
     )
}