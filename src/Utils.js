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
    const dateObj = new Date(year, month - 1, day);
    return dateObj.toLocaleDateString("en-US", { timeZone: "America/New_York", year: 'numeric', month: 'long', day: 'numeric' })
}

export const fetchRandomTask = () => {
    const tasksBeforeToday = Object.keys(history).filter(key => key <= getCurrentDate());
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

export const getVerse = (verse) => {
    const books = { 'Genesis': 'GEN', 'Exodus': 'EXO', 'Leviticus': 'LEV', 'Numbers': 'NUM', 'Deuteronomy': 'DEU', 'Joshua': 'JOS', 'Judges': 'JDG', 'Ruth': 'RUT', '1 Samuel': '1SA', '2 Samuel': '2SA', '1 Kings': '1KI', '2 Kings': '2KI', '1 Chronicles': '1CH', '2 Chronicles': '2CH', 'Ezra': 'EZR', 'Nehemiah': 'NEH', 'Esther': 'EST', 'Job': 'JOB', 'Psalms': 'PSA', 'Proverbs': 'PRO', 'Ecclesiastes': 'ECC', 'Song of Solomon': 'SNG', 'Isaiah': 'ISA', 'Jeremiah': 'JER', 'Lamentations': 'LAM', 'Ezekiel': 'EZK', 'Daniel': 'DAN', 'Hosea': 'HOS', 'Joel': 'JOL', 'Amos': 'AMO', 'Obadiah': 'OBA', 'Jonah': 'JON', 'Micah': 'MIC', 'Nahum': 'NAM', 'Habakkuk': 'HAB', 'Zephaniah': 'ZEP', 'Haggai': 'HAG', 'Zechariah': 'ZEC', 'Malachi': 'MAL', 'Matthew': 'MAT', 'Mark': 'MRK', 'Luke': 'LUK', 'John': 'JHN', 'Acts': 'ACT', 'Romans': 'ROM', '1 Corinthians': '1CO', '2 Corinthians': '2CO', 'Galatians': 'GAL', 'Ephesians': 'EPH', 'Philippians': 'PHP', 'Colossians': 'COL', '1 Thessalonians': '1TH', '2 Thessalonians': '2TH', '1 Timothy': '1TI', '2 Timothy': '2TI', 'Titus': 'TIT', 'Philemon': 'PHM', 'Hebrews': 'HEB', 'James': 'JAS', '1 Peter': '1PE', '2 Peter': '2PE', '1 John': '1JN', '2 John': '2JN', '3 John': '3JN', 'Jude': 'JUD', 'Revelation': 'REV' };
    const translations = {
        1: "KJV",
        59: "ESV",
        97: "MSG",
        111: "NIV",
        114: "NKJV",
        116: "NLT"
    }

    const translation = localStorage.getItem("translation") || "114";

    var [book, chapter, verseNum] = verse.split(/(\d+):/);
    book = book.trim();

    const verseLink = `https://my.bible.com/bible/${translation}/${books[book]}.${chapter}.${verseNum}`
    const verseText = `${verse} (${translations[translation]})`

    return [verseText, verseLink]
}

export const getRandomQuestion = () => {
    const questions = [
        "slay"
    ]

    return questions[Math.floor(Math.random() * questions.length)];
}

export const getStreak = () => {
    const dates = JSON.parse(localStorage.getItem("dates")) || {};
    const keys = Object.keys(dates).sort().reverse();

    var firstDay = getDate(keys[0])
    var currentDay = getDate( getCurrentDate() );
    if ( !firstDay || firstDay.toString() !== currentDay.toString() || !dates[keys[0]].complete) return 0;

    let streak = 1;
    let index = 1;

    while (index < keys.length) {
        var curr = getDate(keys[index])
        var prev = getDate(keys[index - 1])

        if (adj(curr, prev) && dates[keys[index]].complete) { streak++; }
        else { break }

        index += 1
    }

    return streak;
}

const adj = (date1, date2) => {
    const timeDiff = (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000);
    return Math.round(Math.abs(timeDiff)) === 1;
};

const getDate = (date) => new Date(date + ' EST');