
import Parameters from "./Parameters.jsx";
import index from "./index"
export default function Pass()
{
   
    const newArray=index.map((ind)=>{
       return <Parameters image={ind.image}
        country={ind.country}
        name={ind.name}
        Date={ind.Date}
        description={ind.description}/>
    })

    return(
       <>
        {newArray}
       </>
        
    )
}