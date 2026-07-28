import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    const average = props.Total / props.goal;

    return (
        <div className="container">
            <h1>Student Details</h1>

            <p><b>Name:</b> {props.Name}</p>

            <p><b>School:</b> {props.School}</p>

            <p><b>Total Marks:</b> {props.Total}</p>

            <p><b>Goal:</b> {props.goal}</p>

            <h2>Average Score: {average}</h2>
        </div>
    );
}

export default CalculateScore;