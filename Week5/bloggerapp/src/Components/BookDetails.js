function BookDetails() {

    const books = [
        {
            id: 1,
            name: "React Basics",
            price: 500
        },
        {
            id: 2,
            name: "Java Programming",
            price: 650
        }
    ];

    return (

        <div>

            <h2>Book Details</h2>

            {
                books.map(book => (

                    <div key={book.id}>
                        <p><b>Book:</b> {book.name}</p>
                        <p><b>Price:</b> ₹{book.price}</p>
                        <hr />
                    </div>

                ))
            }

        </div>

    );

}

export default BookDetails;