export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                tittle: 'Production-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                tittle: 'Relase Ii!',
                author: 'Michael T Nygart',
                price: 28,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
            }

        ];
    }

}