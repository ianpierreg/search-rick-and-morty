import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import classNames from 'classnames/bind'
import Toast from './toast'
import '../../stylesheets/pagination.scss'

// eslint-disable-next-line max-lines-per-function
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

    setOffset(oldOffest => {
      if (currentPage === oldOffest - 4 || currentPage === oldOffest - 5) return oldOffest - 4
      return oldOffest
    })

    setCurrentPage(oldCurrentPage => oldCurrentPage - 1)
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

    setCurrentPage(oldCurrentPage => oldCurrentPage + 1)
  }

  const onPageNumberClick = pageNumber => {
    setOffset(oldOffest => {
      if (pageNumber === oldOffest) return oldOffest + 4
      if (pageNumber === oldOffest - 4 && pageNumber >= 5) return oldOffest - 4
      return oldOffest
    })
    setCurrentPage(pageNumber)
  }

  const renderPaginationNumbers = (_, index) => {
    const pageNumber = index + 1
    if (pageNumber > offset || pageNumber < offset - 4) return null
    return (
      <button
        type="button"
        className={classNames({ page: true, current: pageNumber === currentPage })}
        key={pageNumber}
        onClick={() => onPageNumberClick(pageNumber)}
      >
        {pageNumber}
      </button>
    )
  }

  return numberOfPages && (
    <div className="pages">
      <Toast toastData={toastData} />
      <button className="arrows" onClick={onLeftArrowClick}>
        <FiChevronLeft />
      </button>
      {numberOfPages && [...Array(numberOfPages)].map(renderPaginationNumbers)}
      <button className="arrows" onClick={onRightArrowClick}>
        <FiChevronRight />
      </button>
    </div>
  )
}

Pagination.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
}

export default Pagination
