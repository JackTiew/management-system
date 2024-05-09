const Pagination = (props) => {

    const { currentPage, totalPage, onPrevious, onNext } = props;

    return (
        <div className='page-container'>
            <button onClick={() => onPrevious && onPrevious()} disabled={currentPage === 1}>Previous</button>
            <div className='page-number'>
                {currentPage} / {totalPage}
            </div>
            <button onClick={() => onNext && onNext()} disabled={currentPage === totalPage}>Next</button>
        </div>
    )
}

export default Pagination;