function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "Learning React",
            author: "John"
        },
        {
            id: 2,
            title: "React Hooks",
            author: "David"
        }
    ];

    return (

        <div>

            <h2>Blog Details</h2>

            {
                blogs.map(blog => (

                    <div key={blog.id}>
                        <p><b>Title:</b> {blog.title}</p>
                        <p><b>Author:</b> {blog.author}</p>
                        <hr />
                    </div>

                ))
            }

        </div>

    );

}

export default BlogDetails;