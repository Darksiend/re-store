import React, {Fragment} from 'react';
import './book-list-item.css'


const BookListItem = ({book}) => {

    const {price, tittle, author, coverImage} = book;


    return (
        <div className="book-list-item">
            <div className="book-cover">

                <img src={coverImage} alt="book cover"/>

            </div>
            <div className="book-details">
                <a className="book-tittle" href="#">{tittle}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>

        </div>);
}
export default BookListItem;