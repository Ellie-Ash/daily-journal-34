const journalEntry1 = {
    date: "07-11-2019",
    topic: "HTML/CSS",
    entry: "Today we reviewed some basics",
    mood: "happy" 
}

const journalEntry2 = {
    date: "07-12-2019",
    topic: "Javascript",
    entry: "We learned about objects and arrays",
    mood: "neutral" 
}


renderEntry = (journalEntry) => {

    const entryAsHTML = `
    <div class="pastHead">
    <h3>${journalEntry.topic}</h3>
    <h3>✳ ${journalEntry.date}</h3>
    </div>
    <p class="myPastEntry">${journalEntry.entry}</p>
    <p>Mood: ${journalEntry.mood}</p>
    <hr />
    `

    const el = document.querySelector(".pastEntries")
    el.innerHTML += entryAsHTML
}

renderEntry(journalEntry1)
renderEntry(journalEntry2)




