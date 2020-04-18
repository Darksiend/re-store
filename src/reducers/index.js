const initialState = {
    books: [
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

    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }

    return state;
};


export default reducer;