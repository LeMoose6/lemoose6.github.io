let playerDice = 50;
let oppDice = 50;
let lostDice = 0;
let turn = 1;

let rolls = [0, 0, 0, 0, 0, 0];

function main() {
    setup();
}


function diceRoll() {
    return Math.floor(Math.random() * 6 + 1)
}


function setup() {
    document.querySelector('#roll').addEventListener('click', () => {
        const roll = diceRoll();
        let player;
        if (turn === 1) {
            player = 'player';            
        } else {
            player = 'opponent';
        }

        document.querySelector(`#${player}LastRoll`).innerHTML = roll;

        logRoll(roll, turn);

    })
}


function logRoll(roll, player) {
    if (rolls[roll - 1] === 0) {
        rolls[roll - 1] = player;
        
        let newColor;
        if (player === 1) {
            newColor = 'green';
        } else {
            newColor = 'blue';
        }

        colorAdjust(roll, player);

        full(player);
    } 
    lostDice += 1;
    if (player === 1) {
        playerDice -= 1;
        turn = -1;
    } else {
        oppDice -= 1;
        turn = 1;
    }
    
    changeButtonColor(player);

    updateBars();

    declareWinner();
}


function full(player) {
    let playerCount = 0;
    let oppCount = 0;
    rolls.forEach(roll => {
        if (roll === 1) {
            playerCount += 1;
        } else if (roll === -1) {
            oppCount += 1;
        }
    })


    if (playerCount + oppCount === 6) {
        rolls = [0, 0, 0, 0, 0, 0];

        if (player === 1) {
            playerDice += 6;
        } else {
            oppDice += 6;
        }

        lostDice -= 6;

        for (let i=1; i <= 6; i++) {
            colorAdjust(i, 0);
        }
    }
}


function colorAdjust(roll, player) {
    let color = 'black';
    if (player === 1) {
        color = 'seagreen';
    } else if (player === -1) {
        color = 'royalblue';
    }

    if (roll === 1) {
        document.querySelector('#one').style.color = color;
    } else if (roll === 2) {
        document.querySelector('#two').style.color = color;
    } else if (roll === 3) {
        document.querySelector('#three').style.color = color;
    } else if (roll === 4) {
        document.querySelector('#four').style.color = color;
    } else if (roll === 5) {
        document.querySelector('#five').style.color = color;
    } else if (roll === 6) {
        document.querySelector('#six').style.color = color;
    }
}


function changeButtonColor(player) {
    if (player === 1) {
        document.querySelector('#roll').style.background = 'royalblue';
    } else {
        document.querySelector('#roll').style.background = 'seagreen';
    }
}


function updateBars() {
    document.querySelector('#playerBar').style.width = `${playerDice}%`;
    document.querySelector('#lostBar').style.width = `${lostDice}%`;
    document.querySelector('#opponentBar').style.width = `${oppDice}%`;

    document.querySelector('#playerReport').innerHTML = playerDice;
    document.querySelector('#opponentReport').innerHTML = oppDice;
}


function declareWinner() {
    if (playerDice <= 0) {
        alert("Opponent Wins!");
        location.reload();
    } else if (oppDice <= 0) {
        alert("Player Wins!");
        location.reload();
    }
}


main()

