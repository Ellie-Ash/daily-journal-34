const journalEntries = [
    {
        date: "07-01-19",
        topic: "HTML/CSS",
        entry: "We styled things with CSS by accessing class/id from HTML",
        mood: "happy"
    },
    {
        date: "07-02-19",
        topic: "Javascript",
        entry: "We learned how to manipulate the DOM with query selectors",
        mood: "neutral"
    },
    {
        date: "07-03-19",
        topic: "Javascript",
        entry: "Today we learned how to use array methods",
        mood: "neutral"
    },
    {
        date: "07-04-19",
        topic: "Javascript",
        entry: "We learned the difference between arrays and objects and when/why we should use them",
        mood: "happy"
    },
    {
        date: "07-05-19",
        topic: "Other",
        entry: "Today we learned about GitHub and how to use it in a group project",
        mood: "frustrated"
    },
]


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