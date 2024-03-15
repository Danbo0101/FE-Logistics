import "./Contact.scss";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import { useState, useEffect } from "react";


const Contact = (props) => {

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const [currentPage, setCurrentPage] = useState(1)

    // const [currentItems, setCurrentItems] = useState(null);
    // const [pageCount, setPageCount] = useState(0);

    // const [itemOffset, setItemOffset] = useState(0);

    // useEffect(() => {
    //     const endOffset = itemOffset + itemsPerPage;
    //     setCurrentItems(items.slice(itemOffset, endOffset));
    //     setPageCount(Math.ceil(items.length / itemsPerPage));
    // }, [itemOffset, itemsPerPage]);


    const handlePageClick = (event) => {
        setCurrentPage(currentPage + 1);

    };

    return (
        <div className="contact-container">
            {/* <div className="items">
                {currentItems && currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
            </div> */}
            <>


                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={4}
                    previousLabel="< Pre"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={currentPage - 1}
                />
            </>
        </div>
    )
}

export default Contact;


