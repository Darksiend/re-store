import React from 'react';
import './book-list-item.css'


const BookListItem = ({book, onAddedToCart}) => {

    const {price, tittle, author, coverImage} = book;


    return (
        <div className="book-list-item">
            <div className="book-cover">

                <img src={coverImage} alt="book cover"/>

            </div>
            <div className="book-details">
                <span className="book-tittle" href="#">{tittle}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart">Add to cart
                </button>
            </div>

        </div>);
}
export default BookListItem;