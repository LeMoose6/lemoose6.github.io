// Navigation
window.onpopstate = function(event) {
    change_pages(event.state.page);
}

function change_pages(page) {
    // Clear the screen
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Add page to history
    history.pushState({page: page}, "", `${page}`);

    // Show page
    document.querySelector(`#${page}`).style.display = 'block';

    // If the page is the library, redirect the user to the library website
    if (page === 'library') {
        alert("You are going to be redirected to the library");
        open("https://librarycat.org/lib/lemoose6")
    }

}

function nav_buttons() {
    // Select all the links, then give them a response to a click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            change_pages(link.dataset.page);
        });
    });
}

// Homepage
function latest_news() {
    // This doesn't work yet
    fetch('https://website-redesign-api.lemoose6.repl.co/news/recent-non-featured')
    .then(response => response.json())
    .then(data => {
        const most_recent = data.update;
        document.querySelector('#latest-title').innerHTML = most_recent.title;
        document.querySelector('#latest-date').innerHTML += most_recent.date;
        document.querySelector('#latest-content').innerHTML = most_recent.content;
    });

    fetch('https://website-redesign-api.lemoose6.repl.co/news/recent-featured')
    .then(response => response.json())
    .then(data => {
        const most_recent_featured = data.update;
        document.querySelector('#featured-title').innerHTML = most_recent_featured.title;
        document.querySelector('#featured-date').innerHTML += most_recent_featured.date;
        document.querySelector('#featured-content').innerHTML = most_recent_featured.content;
    });
}

change_pages("home")
nav_buttons()
latest_news()
