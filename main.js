const journalEntry = {
    date: "07-11-2019",
    topic: "HTML/CSS",
    entry: "Today we reviewed some basics",
    mood: "happy" 
}

const x = {
    date: "07-12-2019",
    topic: "Javascript",
    entry: "We learned about objects and arrays",
    mood: "neutral" 
}



const allEntries = []

updateDOM = () => {
    const entry = `<div>
    <h4>${journalEntry.date}</h4>
    <h4>${journalEntry.topic}</h4>
    <p>${journalEntry.entry}</p>
    <p>Mood: ${journalEntry.mood}</p>
    </div>`
    const el = document.querySelector(".entries")
    el.innerHTML += entry
}
updateDOM()




