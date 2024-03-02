const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const INFO = document.querySelector('#information');

function create_view() {
    INFO.innerHTML = '';
    MONTHS.forEach(month => {
    INFO.innerHTML += `<tr><td>${month}</td><td><input type="number" id="${month}-on"></td><td><input type="number" id="${month}-off"></td><td>score: <span id="${month}-score"></span></td></tr><br>`;
    })
}

function monthly(month_id) {
    let month = MONTHS[month_id];
    let month_scores = [];
    const ON = document.querySelector(`#${month}-on`)
    const OFF = document.querySelector(`#${month}-off`)
    for (let i=0; i<=month_id; i++) {
        let this_month = MONTHS[i];
        month_scores[i] = document.querySelector(`#${this_month}-on`).value;
    }
    
    let score = 0;
    if (ON.value !== null && ON.value >= 1) {
        score += Number((ON.value * 3) + 7);

        for (let i=month_id - 1; i>=0; i--) {
            if (month_scores[i] >= 1) {
                score += 5
            } else {
                break
            }
        }
    }

    score += Number(OFF.value);

    document.querySelector(`#${month}-score`).innerHTML = score;
    return score;
}

function calculate_scores() {
    let score = 0;
    for (let i=0; i<12; i++) {
        score += monthly(i);
    }

    document.querySelector('#total').innerHTML = score;
}

create_view();

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', () => {
        calculate_scores();
    })
})
