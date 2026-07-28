import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Rushikesh"
        School="Shri Gurudev Goroba High School"
        Total={450}
        goal={5}
      />
    </div>
  );
}

export default App;