import React from 'react'
import './pagination.scss'

const Pagination = ({postPerPage,totalArticle,paginate,currentPage}) => {
    const pageNumbers = [];

    for (let i = 1;  i <= Math.ceil(totalArticle / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='pagination'>
            <ul>
                {pageNumbers.map((item, ind) => (
                    <li key={ind} className={`${item === currentPage ? 'active': null}`}>
                        <span onClick={() => paginate(item)}>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
