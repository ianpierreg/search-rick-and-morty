import { useState } from 'react'
import PropTypes from 'prop-types'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import classNames from 'classnames/bind'
import Toast from './toast'
import '../../stylesheets/pagination.scss'

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const [offset, setOffset] = useState(5)
  const [toastData, setToastData] = useState()
  const title = 'Oh oh...'

  const setToastLeftArrow = () => setToastData({
    title,
    description: 'There is no page 0, you should know it!',
  })

  const setToastRightArrow = () => setToastData({
    title,
    description: 'There is no page 0, you should know it!',
  })

  const onLeftArrowClick = () => {
    if (currentPage <= 1) {
      setToastLeftArrow()
      return
    }

    setOffset(offset => {
      if (currentPage === offset - 4 || currentPage === offset - 5) return offset - 4
      return offset
    })

    setCurrentPage(currentPage => currentPage - 1)
  }

  const onRightArrowClick = () => {
    if (currentPage >= numberOfPages) {
      setToastRightArrow()
      return
    }

    setOffset(offset => {
      if (currentPage + 1 === offset || currentPage === offset) return offset + 4
      return offset
    })

    setCurrentPage(currentPage => currentPage + 1)
  }

  const renderPaginationNumbers = (_, index) => {
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
  }

  return numberOfPages && (
    <div className="pages">
      <Toast toastData={toastData} />
      <div className="left-arrow">
        <FiChevronLeft onClick={onLeftArrowClick} />
      </div>
      {numberOfPages && [...Array(numberOfPages)].map(renderPaginationNumbers)}
      <div className="right-arrow">
        <FiChevronRight onClick={onRightArrowClick} />
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