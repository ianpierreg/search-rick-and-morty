import { useState } from 'react'
import PropTypes from 'prop-types'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import classNames from 'classnames/bind'
import Toast from './toast'
import '../../stylesheets/pagination.scss'

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const [offset, setOffset] = useState(5)
  const [toastData, setToastData] = useState()
  return numberOfPages && (
    <div className="pages">
      <Toast toastData={toastData} />
      <div className="left-arrow">
        <FiChevronLeft
          onClick={(() => {
            if (currentPage <= 1) {
              setToastData({
                title: 'Oh oh...',
                description: 'There is no page 0, you should know it!',
                dismissTime: 4000
              })
              return
            }
            setOffset(offset => {
            if (currentPage === offset - 4 || currentPage === offset - 5) return offset - 4
            return offset
            })
            setCurrentPage(currentPage => currentPage - 1)
          })}
        />
      </div>
      {numberOfPages && [...Array(numberOfPages)].map((_, index) => {
        const pageNumber = index + 1
        if (pageNumber > offset || pageNumber < offset - 4) return null
        return (
          <div
            className={classNames({ page: true, current: pageNumber === currentPage })}
            key={pageNumber}
            onClick={(() => {
              setOffset(offset => {
                if (pageNumber === offset) return offset + 4
                if (pageNumber === offset - 4 && pageNumber >= 5) return offset - 4
                return offset
              })
              setCurrentPage(pageNumber)
            })}
          >
            {pageNumber}
          </div>
        )
      })}
      <div className="right-arrow">
        <FiChevronRight onClick={(() => {
          if (currentPage >= numberOfPages) {
            setToastData({
              title: 'Oh oh...',
              description: 'Maximum number of pages reached!',
              dismissTime: 4000
            })
            return
          }
          setOffset(offset => {
            if (currentPage + 1 === offset || currentPage === offset) return offset + 4
            return offset
          })
          setCurrentPage(currentPage => currentPage + 1)
        })} />
      </div>
    </div>
  )
}

Pagination.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
}

export default Pagination