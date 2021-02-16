import '../../stylesheets/app.scss'

export default function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  return (
    <div className="pages">
      {numberOfPages && [...Array(numberOfPages)].map((_, index) => {
        const pageNumber = index + 1
        return (
          <div
            className={'page' + (pageNumber === currentPage && ' current')}
            key={pageNumber}
            onClick={(() => setCurrentPage(pageNumber))}
          >
            {pageNumber}
          </div>
        )
      })}
    </div>
  )
}
