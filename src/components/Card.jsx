import propTypes from 'prop-types';
function Card(props) {
    return (
        <div className='col-md-4 me-3 w-25 border'>  
            <h2>{props.name}</h2>
            <img src={props.img} alt="mug" width={200}/>
            <p>Waranty: {props.waranty}</p>
            <p>Price: {props.price}</p>
        </div>
      )
   }

Card.propTypes={
    key:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    img:propTypes.string.isRequired,
    waranty:propTypes.string.isRequired,
    price:propTypes.string.isRequired,
}
export default Card;