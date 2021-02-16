import loading from '../../images/loading.svg'
import '../../stylesheets/loading_cover.scss'

const LoadingCover = ({ showLoading }) => (
  <div className="loading-wrapper">
    <img src={loading} alt="loading image" className="loading-image" />
    <span className="loading-text">Loading</span>
  </div>
)

export default LoadingCover
