import { React, useState, useEffect } from 'react';
import { getDateString } from '../Utils';
import '../style.scss';

const Task = ({ date, task: { title, verse }}) => {
  const dateString = getDateString(date);

  // use values if data object with date exists in local storage.

  var localData = localStorage.getItem("data");
  localData = localData ? JSON.parse(localData) : {};
  const [complete, setComplete] = useState( localData[date] ? localData[date].complete : false);
  const [notes, setNotes] = useState( localData[date] ? localData[date].notes : "");

  const [data] = useState(getTotalData(complete, notes));

  function getTotalData(complete, notes) {
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

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(getTotalData(complete, notes)));
  }, [data, complete, notes]); // eslint-disable-line react-hooks/exhaustive-deps

  function formatLink (verse) {
    const books = {'Genesis': 'GEN','Exodus': 'EXO','Leviticus': 'LEV','Numbers': 'NUM','Deuteronomy': 'DEU','Joshua': 'JOS','Judges': 'JDG','Ruth': 'RUT','1 Samuel': '1SA','2 Samuel': '2SA','1 Kings': '1KI','2 Kings': '2KI','1 Chronicles': '1CH','2 Chronicles': '2CH','Ezra': 'EZR','Nehemiah': 'NEH','Esther': 'EST','Job': 'JOB','Psalms': 'PSA','Proverbs': 'PRO','Ecclesiastes': 'ECC','Song of Solomon': 'SNG','Isaiah': 'ISA','Jeremiah': 'JER','Lamentations': 'LAM','Ezekiel': 'EZK','Daniel': 'DAN','Hosea': 'HOS','Joel': 'JOL','Amos': 'AMO','Obadiah': 'OBA','Jonah': 'JON','Micah': 'MIC','Nahum': 'NAM','Habakkuk': 'HAB','Zephaniah': 'ZEP','Haggai': 'HAG','Zechariah': 'ZEC','Malachi': 'MAL','Matthew': 'MAT','Mark': 'MRK','Luke': 'LUK','John': 'JHN','Acts': 'ACT','Romans': 'ROM','1 Corinthians': '1CO','2 Corinthians': '2CO','Galatians': 'GAL','Ephesians': 'EPH','Philippians': 'PHP','Colossians': 'COL','1 Thessalonians': '1TH','2 Thessalonians': '2TH','1 Timothy': '1TI','2 Timothy': '2TI','Titus': 'TIT','Philemon': 'PHM','Hebrews': 'HEB','James': 'JAS','1 Peter': '1PE','2 Peter': '2PE','1 John': '1JN','2 John': '2JN','3 John': '3JN','Jude': 'JUD','Revelation': 'REV'}

    var [ book, chapter, verseNum] = verse.split(/(\d+):/);
    book = book.trim();
    
    return `https://my.bible.com/bible/116/${books[book]}.${chapter}.${verseNum}.NLT`;
  }

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
      <h2 style={{textAlign: 'center', height: '2em', display: 'flex', flexWrap: 'wrap'}}>
        <strong>{title}</strong>
      </h2>
      
      <br /> <br /> <br />
      
      <h2>
        <a id="verse" href={formatLink(verse)} target="_blank" rel="noreferrer">
          {verse}
        </a>
      </h2> 
      
      <textarea id="notes" placeholder="Notes" value={ notes } onChange={ e => setNotes(e.target.value) } rows="4" cols="25" style={{resize: 'none'}}></textarea>

      <div style={{display: 'inline'}}>
        <button id="share" onClick={ copyToClipboard }>Share!</button>
        <button id="complete" value="false" onClick={ updateComplete } style={{marginLeft: '0.5em'}}>{ complete ? "Complete" : "Incomplete" } </button>
      </div>
      
    </div>
  );
};

export default Task;