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
    if (page === "home") {
        history.pushState({page: "home"}, "", "/");    
    } else {
        history.pushState({page: page}, "", `${page}`);
    }

    // Show page
    document.querySelector(`#${page}`).style.display = 'block';

    if (page === 'wishlist') {
        alert("You are going to be redirected to the wishlist");
        open("https://mywishlist.online/w/bzi4an/nils-fotis");
    }
    // If the page is the library, redirect the user to the library website
    else if (page === 'library') {
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

function featured_content_clickable() {
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => {
            open(item.dataset.link)
        });
    });
}

change_pages("home");
nav_buttons();
featured_content_clickable();

// In Progress Warning
alert("This website is currently in the process of being redesigned. Therefore, many features will be either discontinued, available at a later date, or experience minor bugs. Thank you for your understanding.");