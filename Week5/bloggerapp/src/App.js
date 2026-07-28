import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div>

      <h1>Blogger App</h1>

      {showBooks ? <BookDetails /> : <p>Book Details Hidden</p>}

      {showBlogs && <BlogDetails />}

      {showCourses ? <CourseDetails /> : null}

    </div>

  );

}

export default App;