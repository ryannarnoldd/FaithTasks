import React from 'react';
// import the style sheet
import '../style.scss';
import { getDateString } from '../Utils';


const TaskBox = ({ date, task: { title, description, verse }}) => {

  const formatLink = (verse) => {
    const books = {'Genesis': 'GEN','Exodus': 'EXO','Leviticus': 'LEV','Numbers': 'NUM','Deuteronomy': 'DEU','Joshua': 'JOS','Judges': 'JDG','Ruth': 'RUT','1 Samuel': '1SA','2 Samuel': '2SA','1 Kings': '1KI','2 Kings': '2KI','1 Chronicles': '1CH','2 Chronicles': '2CH','Ezra': 'EZR','Nehemiah': 'NEH','Esther': 'EST','Job': 'JOB','Psalms': 'PSA','Proverbs': 'PRO','Ecclesiastes': 'ECC','Song of Solomon': 'SNG','Isaiah': 'ISA','Jeremiah': 'JER','Lamentations': 'LAM','Ezekiel': 'EZK','Daniel': 'DAN','Hosea': 'HOS','Joel': 'JOL','Amos': 'AMO','Obadiah': 'OBA','Jonah': 'JON','Micah': 'MIC','Nahum': 'NAM','Habakkuk': 'HAB','Zephaniah': 'ZEP','Haggai': 'HAG','Zechariah': 'ZEC','Malachi': 'MAL','Matthew': 'MAT','Mark': 'MRK','Luke': 'LUK','John': 'JHN','Acts': 'ACT','Romans': 'ROM','1 Corinthians': '1CO','2 Corinthians': '2CO','Galatians': 'GAL','Ephesians': 'EPH','Philippians': 'PHP','Colossians': 'COL','1 Thessalonians': '1TH','2 Thessalonians': '2TH','1 Timothy': '1TI','2 Timothy': '2TI','Titus': 'TIT','Philemon': 'PHM','Hebrews': 'HEB','James': 'JAS','1 Peter': '1PE','2 Peter': '2PE','1 John': '1JN','2 John': '2JN','3 John': '3JN','Jude': 'JUD','Revelation': 'REV'}

    var [ book, chapter, verseNum] = verse.split(/(\d+):/);
    book = book.trim();
    
    return `https://my.bible.com/bible/116/${books[book]}.${chapter}.${verseNum}`;
  }

  function copyToClipboard() {
    // copy link to clipboard.
    navigator.clipboard.writeText(window.location.href)
    document.getElementById("copied").style.display = "inline";
    setTimeout(() => {
        document.getElementById("copied").style.display = "none";
    }, 1000);
  }
  
  return (
    <div className="task">
        {title && description && verse ? (
        <>
            <h1>{getDateString(date)}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><a id="verse" href={formatLink(verse)} target="_blank" rel="noreferrer">
              <strong>{verse}</strong>
            </a></p>
            
            <button onClick={ copyToClipboard }>Share!</button>
            <span id="copied" style={{display: 'none'}}>Copied!</span>
        </>
        ) : ( <h2>There are no tasks to do today.</h2> )}
    </div>
  );
};

export default TaskBox;