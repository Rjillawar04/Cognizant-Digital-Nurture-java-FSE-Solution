import officeImage from "./Images/office.jpg";

function App() {

  const office = {
    Name: "Sky Tower Office",
    Rent: 55000,
    Address: "Pune, Maharashtra"
  };

  const officeList = [
    {
      Name: "Sky Tower",
      Rent: 55000,
      Address: "Pune"
    },
    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Hyderabad"
    },
    {
      Name: "Business Hub",
      Rent: 65000,
      Address: "Bangalore"
    }
  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="400"
        height="250"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> ₹{office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h3>{item.Name}</h3>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              Rent: ₹{item.Rent}
            </p>

            <p>Address: {item.Address}</p>

            <hr />

          </div>

        ))
      }

    </div>

  );

}

export default App;