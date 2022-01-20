import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <img className="image" alt='projectimg' src={props.image}/>
            <h2>{props.title}</h2>
            <div className='desc'>{props.description}</div>
            <a href={props.deployed} target='_blank' rel="noreferrer">Deployed Link</a>
            <a href={props.repo} target='_blank' rel="noreferrer">Repository</a>
        </div>
    )
}

export default Card;