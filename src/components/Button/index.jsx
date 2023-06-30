import PropTypes from "prop-types"
import '../Button/styles.css';

const Button = ({ btnContent, btnId, btnType }) => {
    return (
        <button
        id={ btnId }
        type={ btnType }
        >
            <span className="btn-content">{ btnContent }</span>
        </button>
    )
};

Button.propTypes = {
  btnContent: PropTypes.string,
  btnId: PropTypes.string,
  btnType: PropTypes.string,
}

export default Button;