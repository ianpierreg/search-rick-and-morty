import empty from '../../images/empty.png'
import '../../stylesheets/empty_state.scss'

 const EmptyState = () => (
  <div className="empty-state">
    <div className="empty-image">
      <img src={empty} alt="empty state" />
   </div>
    <div className="empty-title">Sorry! No Results Found :( </div>
    <div className="empty-subtitle">
      We've searched more than a billion galaxies
      but no sign of the character you are looking for.
    </div>
  </div>
)

export default EmptyState