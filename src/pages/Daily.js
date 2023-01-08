import React from 'react';
// import the style sheet
import '../style.css';
import SearchBar from '../components/SeachBar';

const Daily = () => {
//   const [today, setToday] = useState(new Date());
//   const [practice, setPractice] = useState({});

//   useEffect(() => {
//     // Fetch the spiritual practice for today
//     async function fetchPractice() {
//       const response = await fetch(`/api/daily-practice/${today.getDay()}`);
//       const data = await response.json();
//       setPractice(data);
//     }

//     fetchPractice();
//   }, [today]);
    let practice = {
        title: "Meditate",
        description: "Sit quietly and focus on your breath for 10 minutes."
    }

  return (
    <div className="daily">
      <h1>{(new Date()).toDateString()}</h1>
      <h2>{practice.title}</h2>
      <p>{practice.description}</p>
      <button onClick={() => console.log('I did it!')}>I did it!</button>
      <SearchBar />
    </div>

  );
};

export default Daily;