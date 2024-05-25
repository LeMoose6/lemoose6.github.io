// Start App
let LID_ACCESS = true;
let DOG_LOC = null;
function main() { 
    document.querySelector('#homepage').style.display = 'block';
    configure_buttons();
    configure_pages();
    level_1_setup();
    level_4_setup();
}

// Make the buttons work
function configure_buttons() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            change_page(button.dataset.target);

            // Level 3
            if (button.classList.contains('lvl-3')) {
                DOG_LOC = button.dataset.location;
            }

            // Level 5
            if (button.classList.contains('lvl-5') && button.dataset.cup === 'sippy' && LID_ACCESS) {
                change_page('level-6');
            }

            // Level 6
            if (button.dataset.target === 'level-6' && (DOG_LOC === 'living' || DOG_LOC === 'laundry')) {
                change_page('level-6-loss-eaten');
            }

            // Win
            if (button.dataset.target === 'win') {
                document.querySelector('#movie').play();
            }
        })
    })
}


// Format Pages
function configure_pages() {
    let pages = document.querySelectorAll('.page')
    pages.forEach(page => {
        page.classList.add('container');
        page.classList.add('my-3');
    })
}


// Change the pages
function change_page(target) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === target) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none'
        }
    })
}


// Level 1
function level_1_setup() {
    document.querySelector('#lvl-1-submit').addEventListener('click', () => {
        let response = document.querySelector('#lvl-1-input').value.toLowerCase();
        if (response === 'forks' || response === 'fork') {
            change_page('level-2');
        } else if (response === 'knife' || response === 'knives') {
            change_page('level-1-loss');
        } else if (response === 'lid' || response === 'lids') {
            LID_ACCESS = false;
            change_page('level-2')
        } else {
            alert(`the muffin stealer doesn't want ${response}, try again`);
        }
    });
}


// Level 4
function level_4_setup() {
    document.querySelector('#lvl-4-submit').addEventListener('click', () => {
        let response = document.querySelector('#lvl-4-input').value;
        if (response === 'password123') {
            change_page('level-5');
        } else {
            alert(`${response} is not her password, try again`)
        }
    })
}

main();