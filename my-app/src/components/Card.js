import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img className="image" alt='projectimg' src={props.image}/>
            <h3>{props.title}</h3>
            <div>{props.description}</div>
            <a href={props.deployed} target='_blank' rel="noreferrer">Deployed Link</a>
            <a href={props.repo} target='_blank' rel="noreferrer">Repository</a>
        </div>
    )
}

export default Card;