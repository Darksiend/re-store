import React from 'react';
import BookList from '../book-list'

const HomePage = () => {
    const books = [
        {
            id: 1,
            tittle: 'Production-Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            tittle: 'Relase Ii!',
            author: 'Michael T Nygart'
        }

    ];
    return (<BookList books={books}/>);
};
export default HomePage;