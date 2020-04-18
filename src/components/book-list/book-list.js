import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import {connect} from 'react-redux';
import {booksLoaded} from "../../actions";
import {withBookstoreService} from '../hoc';
import {compose} from '../../utils';

class BookList extends Component {

    componentDidMount() {
        //1. recive data
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        console.log(data);


        //2.dispach action to store
        this.props.booksLoaded(data);
    }


    render() {
        const {books} = this.props
        return (
            <ul className="book-list">
                {books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book}/></li>
                    )
                })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books}) => {
    return {books};
};

const mapDispatchToProps = {
    booksLoaded
};


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);




