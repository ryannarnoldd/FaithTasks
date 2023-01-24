import { React, useState, useEffect } from 'react';
import { getDateString, formatLink, getRandomQuestion } from '../Utils.js';
import '../style.scss';

function getTotalData(date, complete, notes) {
  var localData = localStorage.getItem("data");
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

const Task = ({ date, task: { title, verse }}) => {
  const dateString = getDateString(date);

  const localData = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : {};
  const [complete, setComplete] = useState(localData[date]?.complete || false);
  const [notes, setNotes] = useState(localData[date]?.notes || "");

  const [data] = useState(getTotalData(complete, notes));

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(getTotalData(date, complete, notes)));
  }, [data, date, complete, notes]);

  function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
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
      
      <h2><a id="verse" href={formatLink(verse)} target="_blank" rel="noreferrer">{verse}</a></h2> 
      
      <button id="share" onClick={ copyToClipboard }>Share!</button>
      <button id="complete" value="false" onClick={ updateComplete } style={{marginTop: '0.5em', backgroundColor: (complete ? 'green' : '#aa0000')}}>{complete ? "Complete" : "Incomplete"}</button>

      <textarea id="notes" placeholder={ getRandomQuestion() } value={ notes } onChange={ e => setNotes(e.target.value) }></textarea>
      
    </div>
  );
};

export default Task;