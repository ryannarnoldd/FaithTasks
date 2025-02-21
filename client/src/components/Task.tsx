import { useState } from 'react';
// import { getDateString, getVerse } from '../Utils.js';
import '../style.scss';

// function getTotalData(date, complete, notes) {
//   var localData = localStorage.getItem("dates");
//   localData = localData ? JSON.parse(localData) : {};

//   var newData = { [date]: {
//     "complete": complete,
//     "notes": notes
//   }};
  
//   return {
//     ...localData,
//     ...newData
//   };
// }

interface Task {
  _id: string;
  title: string;
  question: string;
  verse: string;
}

interface TaskProps {
  task: Task;
}

// { date, task: { title, verse, question }}
const Task: React.FC<TaskProps> = ({ task }) => {
  const date = "01-03-2025"
  const { title, question, verse } = task;
  // const dateString = getDateString(date);

  const localData = localStorage.getItem("dates") ? JSON.parse(localStorage.getItem("dates") as string) : {};
  const [complete, setComplete] = useState(localData[date]?.complete || false);
  const [notes, setNotes] = useState(localData[date]?.notes || "");
  // const [verseText, verseLink] = getVerse(verse);


  // useEffect(() => {
  //   localStorage.setItem("dates", JSON.stringify(getTotalData(date, complete, notes)));
  // }, [date, complete, notes]);

  function copyToClipboard() {
    navigator.clipboard.writeText(`${"01-03-2025"}\n${"AAAAAA"}\n\nCheck it out here! ${window.location.origin}/${date}`);

    const shareElement = document.getElementById("share");
    if (shareElement) {
      shareElement.innerHTML = "Copied!";
    }
    setTimeout(function() { 
      const shareElement = document.getElementById("share");
      if (shareElement) {
        shareElement.innerHTML = "Share &#x1F4CB";
      }
    }, 1250);
  }

  function updateComplete() {
    setComplete(!complete);
    const completeElement = document.getElementById("complete");
    if (completeElement) {
      completeElement.innerHTML = complete ? "Incomplete" : "Complete";
    }
  }
  
  return (
    <div className="task">
      <h1>TASK!</h1>
      <h1>{"01-03-2025"}</h1>

      <br /> <br /> 

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p>{ title }</p>
      </div>
      
      <br /> <br />
      
      <h2><a id="verse" href={"www.google.com"} target="_blank" rel="noreferrer">{verse}</a></h2> 
      
      <button id="share" onClick={ copyToClipboard }>Share &#x1F4CB;</button>
      <button id="complete" value="false" onClick={ updateComplete } style={{marginTop: '0.5em', backgroundColor: (complete ? 'green' : '#aa0000')}}>{complete ? "Complete" : "Incomplete"}</button>

      <textarea id="notes" placeholder={ question } value={ notes } onChange={(e) => setNotes(e.target.value)}></textarea>
      {/* onChange={(e) => setNotes(e.target.value)} */}
    </div>
  );
};

export default Task;

