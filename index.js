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

latest_news()