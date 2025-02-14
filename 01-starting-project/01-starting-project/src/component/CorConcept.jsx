export default function CorConcept({image, title, description}){
    return(
       <li>
        <img src={image} />
        <h2>{title}</h2>
        <p>{description}</p>
       </li> 
    )
}