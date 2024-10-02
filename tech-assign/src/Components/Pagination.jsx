import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const Pagination = ({ pageNo, prevPage, nextPage }) => {
    return (
        <div className='pagination'>
            <nav aria-label="Page navigation example">
                <ul class="pagination ">
                    <li class="page-item ">
                        <a class="page-link" href="#"> <ArrowBackIos onClick={prevPage} /></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#"> {pageNo}</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">  <ArrowForwardIos onClick={nextPage} /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination