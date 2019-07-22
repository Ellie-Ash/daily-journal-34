


// Then store a reference to an existing HTML element
const logContainer = document.querySelector(".pastEntries")

//iterates students, get student container, then append the result to the container with dot notated info

for (const entries of journalEntries) {
        logContainer.innerHTML += `
        <div class="">
        <section class="pastHead">
        <aside class="">${entries.topic}</aside>
        <aside class=""> >> ${entries.date}</aside>
        </section>
        <section class="pastEntry">${entries.entry}</section>
        <section class="">Mood: ${entries.mood}</section>
        </div>
        <p class="stupidLine"> ----- </p>
        `
}