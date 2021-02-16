import PropTypes from 'prop-types'
import '../../stylesheets/button.scss'

const Button = ({ className, onClick, text, type }) => (
  <button
    type={type}
    onClick={onClick}
    className={className}
    aria-label={`${text} button`}
  >
    {text}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  type: 'button',
  onClick: () => {}
}

export default Button