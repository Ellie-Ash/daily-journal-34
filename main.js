


// Then store a reference to an existing HTML element
const logContainer = document.querySelector(".pastEntries")

//iterates students, get student container, then append the result to the container with dot notated info



fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(entries => {
        entries.forEach(entry => {
                logContainer.innerHTML += `
                <div class="">
                <section class="pastHead">
                <aside class="">${entry.topic}</aside>
                <aside class=""> >> ${entry.date}</aside>
                </section>
                <section class="pastEntry">${entry.entry}</section>
                <section class="">Mood: ${entry.mood}</section>
                </div>
                <p class="stupidLine"> ----- </p>
                `  
        });
    })