import propTypes from "prop-types"


Input.propTypes={
    For:propTypes.string.isRequired,
    type:propTypes.string.isRequired,
    id:propTypes.string.isRequired,
    placeholder:propTypes.string.isRequired,
    label:propTypes.string.isRequired,
}
function Input(props) {
    return (
      <div className="mb-3">
        <label htmlFor={props.For} className="form-label">{props.label}</label>
        <input 
        type={props.type} 
        className="form-control" 
        id={props.id} 
        placeholder={props.placeholder}/>
      </div>
    )
}
export default Input;