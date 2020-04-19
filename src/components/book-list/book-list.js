import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import {connect} from 'react-redux';
import {booksLoaded} from "../../actions";
import {withBookstoreService} from '../hoc';
import {compose} from '../../utils';
import Spinner from '../spinner'

class BookList extends Component {

    componentDidMount() {
        //1. recive data
        const {bookstoreService, booksLoaded} = this.props;
        bookstoreService.getBooks().then((data) => booksLoaded(data));


    }


    render() {
        const {books, loading} = this.props;

        if (loading) {
            return <Spinner/>
        }

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

const mapStateToProps = ({books, loading}) => {
    return {books, loading};
};

const mapDispatchToProps = {
    booksLoaded
};


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);




