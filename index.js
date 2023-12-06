// Navigation
window.onpopstate = function (event) {
    change_pages(event.state.page);
}

function change_pages(page) {
    // Clear the screen
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Add page to history
    if (page === "home") {
        history.pushState({ page: "home" }, "", "/");
    } else {
        history.pushState({ page: page }, "", `${page}`);
    }

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
function featured_content_clickable() {
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => {
            open(item.dataset.link)
        });
    });
}

function latest_news() {
    // Get most recent non featured
    var i = 0
    while (true) {
        if (UPDATES[i].featured !== true) {
            document.querySelector('#latest-date').innerHTML += UPDATES[i].date;
            document.querySelector('#latest-content').innerHTML = UPDATES[i].content;
            break
        }
        i++
        
    }
    i = 0
    while (true) {
        if (UPDATES[i].featured === true) {
            document.querySelector('#featured-date').innerHTML += UPDATES[i].date;
            document.querySelector('#featured-content').innerHTML = UPDATES[i].content;
            break
        }
        i++
    }
}

// News Page
function add_news() {
    // Get the sections
    const featured = document.querySelector("#news-featured");
    const mudd = document.querySelector("#news-mudd");
    const all = document.querySelector("#news-all");

    // Loop through the "articles"
    for (var i=0;i < UPDATES.length; i++) {
        const update = UPDATES[i];

        // Put content into a card
        const html = `
            <div class="card" style="width: 18rem; margin: 0.75rem;">
                <div class="card-body">
                <h4>${update.title}</h4>
                <p class="card-text">${update.content}</p>
                </div>
                <div class="card-footer">${update.date}</div>
            </div>
        `

        // Place card where it belongs
        if (update.featured) {
            featured.innerHTML += html;
        }
        if (update.mudd) {
            mudd.innerHTML += html;
        }

        // Add card to the "all" section
        all.innerHTML += html;
    }
}

// Load the website
document.addEventListener('DOMContentLoaded', () =>{change_pages("home");
    // Run starting functions
    nav_buttons();
    featured_content_clickable();
    latest_news();
    add_news();

    // In Progress Warning
    alert("Welcome to the LeMoose Website! Our Judy Mudd and News pages are currently still under development. These features will be prepared before March 2024, thank you for your understanding!");
});
