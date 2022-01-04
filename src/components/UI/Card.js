import './Card.css';

function Card(props){
    console.log("props.className");
    const cardClass = 'card ' + props.className;
    return(
        <div className={cardClass}>{props.children}</div>
    )
}
 export default Card;