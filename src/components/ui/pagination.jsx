import classNames from 'classnames/bind'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import '../../stylesheets/pagination.scss'

export default function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  return (
    <div className="pages">
      <div className="left-arrow">
        <FiChevronLeft onClick={(() => setCurrentPage(pageNumber => pageNumber - 1))} />
      </div>
      {numberOfPages && [...Array(numberOfPages)].map((_, index) => {
        const pageNumber = index + 1
        return (
          <div
            className={classNames({ page: true, current: pageNumber === currentPage })}
            key={pageNumber}
            onClick={(() => setCurrentPage(pageNumber))}
          >
            {pageNumber}
          </div>
        )
      })}
      <div className="right-arrow">
        <FiChevronRight onClick={(() => setCurrentPage(pageNumber => pageNumber + 1))} />
      </div>
    </div>
  )
}
