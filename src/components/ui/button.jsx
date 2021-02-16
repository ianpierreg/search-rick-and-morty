import '../../stylesheets/button.scss'

export default function Button({ className, onClick, text, type }) {

  return (
      <button type={type} onClick={onClick} className={className}>{text}</button>
  )
}

