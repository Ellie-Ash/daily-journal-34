
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

fetch("http://localhost:3000/entries")
    .then(entries => entries.json())
    .then(parsedEntries => {
        console.table(parsedEntries)
    })




