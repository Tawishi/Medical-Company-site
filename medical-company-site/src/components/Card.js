import './style.css'

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.name} className="card--image" />
            <div className="card--content">
                <strong>{props.name}</strong>
                <p><span className='bold'>{props.price}</span></p>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default Card;