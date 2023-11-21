import { React, useState, useEffect } from 'react';
import { getDateString, getVerse, getRandomQuestion } from '../Utils.js';
import '../style.scss';

function getTotalData(date, complete, notes) {
  var localData = localStorage.getItem("dates");
  localData = localData ? JSON.parse(localData) : {};

  var newData = { [date]: {
    "complete": complete,
    "notes": notes
  }};
  
  return {
    ...localData,
    ...newData
  };
}

const Task = ({ date, task: { title, verse, question }}) => {
  const dateString = getDateString(date);

  const localData = localStorage.getItem("dates") ? JSON.parse(localStorage.getItem("dates")) : {};
  const [complete, setComplete] = useState(localData[date]?.complete || false);
  const [notes, setNotes] = useState(localData[date]?.notes || "");
  const [verseText, verseLink] = getVerse(verse);


  useEffect(() => {
    localStorage.setItem("dates", JSON.stringify(getTotalData(date, complete, notes)));
  }, [date, complete, notes]);

  function copyToClipboard() {
    navigator.clipboard.writeText(dateString + "\n" + title + "\n\nCheck it out here! " + window.location.href);
    console.log( document.getElementById("share").style.background_color );

    document.getElementById("share").innerHTML = "Copied";
    setTimeout(function() { document.getElementById("share").innerHTML = "Share!"; }, 1000);
  }
  function updateComplete() {
    setComplete(!complete);
    document.getElementById("complete").innerHTML = complete ? "Incomplete" : "Complete";
  }
  
  return (
    <div className="task">
      <h1>{dateString}</h1>

      <br /> <br /> 

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p>{ title }</p>
      </div>
      
      <br /> <br />
      
      <h2><a id="verse" href={verseLink} target="_blank" rel="noreferrer">{verseText}</a></h2> 
      
      <button id="share" onClick={ copyToClipboard }>Share!</button>
      <button id="complete" value="false" onClick={ updateComplete } style={{marginTop: '0.5em', backgroundColor: (complete ? 'green' : '#aa0000')}}>{complete ? "Complete" : "Incomplete"}</button>

      <textarea id="notes" placeholder={ question || getRandomQuestion() } value={ notes } onChange={(e) => setNotes(e.target.value)}></textarea>
      
    </div>
  );
};

export default Task;