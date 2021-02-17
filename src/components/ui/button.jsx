import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/button.scss'

const Button = ({ className, onClick, text }) => (
  <button
    type="button"
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
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  onClick: () => {}
}

export default Button
