import React from 'react'
import loading from '../../images/loading.svg'
import '../../stylesheets/loading_cover.scss'

const LoadingCover = () => (
  <div className="loading-wrapper">
    <img src={loading} alt="loading" className="loading-image" />
    <span className="loading-text">Loading</span>
  </div>
)

export default LoadingCover
