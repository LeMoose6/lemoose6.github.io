function change_pages(page) {
    document.querySelector('#homepage').style.display = 'none';
    if (page === "home") {
        document.querySelector('#homepage').style.display = 'block';
    } else if (page === "judymudd") {
        alert("judy mudd page not available")
    } else if (page === "news") {
        alert("news page not available")
    } else if (page === "library") {
        open("https://librarycat.org/lib/lemoose6")
    }
}

function nav_buttons() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            change_pages(link.dataset.page);
        });
    });
}

function latest_news() {
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

nav_buttons()
latest_news()
