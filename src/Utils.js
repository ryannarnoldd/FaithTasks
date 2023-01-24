// import tasks from './data/tasks.json';
import history from './data/history.json';

export const getCurrentDate = () => new Date().toLocaleString("en-CA", {timeZone: "America/New_York"}).split(',')[0];

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
    const books = {'Genesis': 'GEN','Exodus': 'EXO','Leviticus': 'LEV','Numbers': 'NUM','Deuteronomy': 'DEU','Joshua': 'JOS','Judges': 'JDG','Ruth': 'RUT','1 Samuel': '1SA','2 Samuel': '2SA','1 Kings': '1KI','2 Kings': '2KI','1 Chronicles': '1CH','2 Chronicles': '2CH','Ezra': 'EZR','Nehemiah': 'NEH','Esther': 'EST','Job': 'JOB','Psalms': 'PSA','Proverbs': 'PRO','Ecclesiastes': 'ECC','Song of Solomon': 'SNG','Isaiah': 'ISA','Jeremiah': 'JER','Lamentations': 'LAM','Ezekiel': 'EZK','Daniel': 'DAN','Hosea': 'HOS','Joel': 'JOL','Amos': 'AMO','Obadiah': 'OBA','Jonah': 'JON','Micah': 'MIC','Nahum': 'NAM','Habakkuk': 'HAB','Zephaniah': 'ZEP','Haggai': 'HAG','Zechariah': 'ZEC','Malachi': 'MAL','Matthew': 'MAT','Mark': 'MRK','Luke': 'LUK','John': 'JHN','Acts': 'ACT','Romans': 'ROM','1 Corinthians': '1CO','2 Corinthians': '2CO','Galatians': 'GAL','Ephesians': 'EPH','Philippians': 'PHP','Colossians': 'COL','1 Thessalonians': '1TH','2 Thessalonians': '2TH','1 Timothy': '1TI','2 Timothy': '2TI','Titus': 'TIT','Philemon': 'PHM','Hebrews': 'HEB','James': 'JAS','1 Peter': '1PE','2 Peter': '2PE','1 John': '1JN','2 John': '2JN','3 John': '3JN','Jude': 'JUD','Revelation': 'REV'}

    var [ book, chapter, verseNum] = verse.split(/(\d+):/);
    book = book.trim();
    
    return `https://my.bible.com/bible/116/${books[book]}.${chapter}.${verseNum}`;
}

export const getRandomQuestion = () => {
    const questions = [
        "What was your main takeway from the task?",
        "What does this task teach us about God?",
        "What are some things you struggled with during this task?",
        "What are some things you will do differently next time you complete this task?",
        "How can you apply this task to your everyday life?",
        "What are some things you are grateful for after completing this task?",
        "What are some things you wish to improve upon after completing this task?",
        "What is something that stood out to you during this task?",
        "What are some things you will remember from this task?",
        "What are some things you learned from this task that you can apply to other areas of your life?"
      ]

    return questions[Math.floor(Math.random() * questions.length)];
}