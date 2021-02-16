import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/toast.scss'

const Toast = ({ toastData }) => {
  const toastInitialState = { title: undefined, message: undefined, dismissTime: 0 }
  const [toast, setToast] = useState(toastData)

  useEffect(() => {
    setToast(toastData || toastInitialState)
  }, [toastData])

  useEffect(() => {
    if (!toast.title || !toast.description) return
    setTimeout(() => {
      setToast(toastInitialState)
    }, toast.dismissTime || 4000)
  }, [toast.title, toast.description, toast.dismissTime])

  return toast.title && toast.description ? (
    <>
      <div className={`notification-container`}>
        <div
          className={`notification toast`}
        >
            <span className="notification-title">{toast.title}</span>
            <span className="notification-message">
              {toast.description}
            </span>
        </div>
      </div>
    </>
  ) : null
}

Toast.propTypes = {
  toastData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    dismissTime: PropTypes.number
  })
}

Toast.defaultProps = {
  toastData: {
    title: undefined,
    description: undefined,
    dismissTime: 4000
  }
}

export default Toast
