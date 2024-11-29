let PLAYERLIST = []

function main() {
    pageify();
    addPlayerButton();
    submitScoresButton();
}


function pageify() {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
        page.classList.add('container-fluid');
    })

    document.querySelector('#overview').style.display = 'block';
}


function addPlayerButton() {
    document.querySelector('#submitAddPlayer').addEventListener('click', () => {
        const nameField = document.querySelector('#addPlayerName');
        const colorField = document.querySelector('#addPlayerColor');
        const name = nameField.value;
        const color = colorField.value;
        nameField.value = "";
        colorField.value = "0";

        PLAYERLIST.push(name);

        document.querySelector('#scoreReport').innerHTML += `
            <div class="card text-center m-3" style="width: 20%;">
                <div class="card-header">
                  ${name}
                </div>
                <div class="card-body">
                    <div class="progress" role="progressbar">
                        <div id="${name}-ScoreBar" class="progress-bar progress-bar-striped bg-${color}" style="width: 1%"></div>
                    </div>
                </div>
                <div class="card-footer text-body-secondary">
                  <span id="${name}-ScoreText">0</span>
                </div>
              </div>
        `

        document.querySelector('#enterScoresModalBody').innerHTML += `
            <div class="input-group mb-3">
              <span class="bg-${color}-subtle input-group-text">${name}</span>
              <span class="input-group-text">Blitz Pile</span>
              <input type="number" class="form-control" id="${name}-ScoreBlitz">
              <span class="input-group-text">Cards Out</span>
              <input type="number" class="form-control" id="${name}-ScoreDutch">
            </div>
        `
    })
}


function submitScoresButton() {
    document.querySelector('#submitScores').addEventListener('click', () => {
        let winners = []
        PLAYERLIST.forEach(player => {
            const blitzField = document.querySelector(`#${player}-ScoreBlitz`);
            const dutchField = document.querySelector(`#${player}-ScoreDutch`);
            const currentField = document.querySelector(`#${player}-ScoreText`);

            const blitz = Number(blitzField.value)
            const dutch = Number(dutchField.value)
            let score = Number(currentField.innerHTML)

            blitzField.value = "";
            dutchField.value = "";

            score += dutch - (2 * blitz);

            currentField.innerHTML = score;
            document.querySelector(`#${player}-ScoreBar`).style.width = `${(score / 75) * 100}%`

            if (score >= 75) {
                winners.push([player, score])
            }
        })

        if (winners.length === 1) {
            document.querySelector('#winner').innerHTML = `Winner: ${winners[0][0]}`
        } else if (winners.length > 1) {
            let largest = ["", 0]
            winners.forEach(winner => {
                if (winner[1] > largest[1]) {
                    largest = winner;
                } else if (winner[1] === largest[1]) {
                    largest[0] = `${largest[0]} and ${winner[0]}`
                }
            })
            document.querySelector('#winner').innerHTML = `Winner: ${largest[0]}`
        }
    })
}


main();