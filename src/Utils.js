// import tasks from './data/tasks.json';
import history from './data/history.json';


export const getCurrentDate = () => {
    // Give me the current date in the format of YYYY-MM-DD. (make sure  to pad the month and day with a 0 if it's less than 10)
    var date = new Date();
    var getYear = date.toLocaleString("default", { year: "numeric" });
    var getMonth = date.toLocaleString("default", { month: "2-digit" });
    var getDay = date.toLocaleString("default", { day: "2-digit" });

    return getYear + "-" + getMonth + "-" + getDay;
    
}

export const getDateString = (date) => {
    const [year, month, day] = date.split('-')
    const dateObj = new Date(year, month-1, day);
    return dateObj.toLocaleDateString("en-US", {timeZone: "America/New_York", year: 'numeric', month: 'long', day: 'numeric'})
}

export const fetchRandomTask = () => {
    const tasksBeforeToday = Object.keys(history).filter(key => key < getCurrentDate());
    const randomTask = tasksBeforeToday[Math.floor(Math.random() * tasksBeforeToday.length)];

    return {
        date: randomTask,
        task: history[randomTask]
    }

}

export const fetchDailyTask = () => {
    return {
        date: getCurrentDate(),
        task: history[getCurrentDate()] || { title: 'There are no tasks to do today.', description: '', verse: '' }
    }
}

export const fetchTask = (date) => {
    return {
        date: date,
        task: history[date] || { title: 'This task could not be found.', description: '', verse: '' }
    }
}

export const formatLink = (verse) => {
    const books = {'Genesis': 'GEN','Exodus': 'EXO','Leviticus': 'LEV','Numbers': 'NUM','Deuteronomy': 'DEU','Joshua': 'JOS','Judges': 'JDG','Ruth': 'RUT','1 Samuel': '1SA','2 Samuel': '2SA','1 Kings': '1KI','2 Kings': '2KI','1 Chronicles': '1CH','2 Chronicles': '2CH','Ezra': 'EZR','Nehemiah': 'NEH','Esther': 'EST','Job': 'JOB','Psalms': 'PSA','Proverbs': 'PRO','Ecclesiastes': 'ECC','Song of Solomon': 'SNG','Isaiah': 'ISA','Jeremiah': 'JER','Lamentations': 'LAM','Ezekiel': 'EZK','Daniel': 'DAN','Hosea': 'HOS','Joel': 'JOL','Amos': 'AMO','Obadiah': 'OBA','Jonah': 'JON','Micah': 'MIC','Nahum': 'NAM','Habakkuk': 'HAB','Zephaniah': 'ZEP','Haggai': 'HAG','Zechariah': 'ZEC','Malachi': 'MAL','Matthew': 'MAT','Mark': 'MRK','Luke': 'LUK','John': 'JHN','Acts': 'ACT','Romans': 'ROM','1 Corinthians': '1CO','2 Corinthians': '2CO','Galatians': 'GAL','Ephesians': 'EPH','Philippians': 'PHP','Colossians': 'COL','1 Thessalonians': '1TH','2 Thessalonians': '2TH','1 Timothy': '1TI','2 Timothy': '2TI','Titus': 'TIT','Philemon': 'PHM','Hebrews': 'HEB','James': 'JAS','1 Peter': '1PE','2 Peter': '2PE','1 John': '1JN','2 John': '2JN','3 John': '3JN','Jude': 'JUD','Revelation': 'REV'};

    // Write code to get from local storage an object named Translation.
      
    const translation = localStorage.getItem("translation") || "114";
    console.log("this is translation" + translation);

    var [ book, chapter, verseNum] = verse.split(/(\d+):/);
    book = book.trim();

    const link = `https://my.bible.com/bible/${translation}/${books[book]}.${chapter}.${verseNum}`
    
    return link
}

export const getRandomQuestion = () => {
    const questions = [
        "slay"
     ]

    return questions[Math.floor(Math.random() * questions.length)];
}