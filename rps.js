let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

updateScoreElements();

function pickcomputermove(){
    let computerMove = '';

    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';

    }else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';

    }else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissor';
    }

    return computerMove;
}


function moveToText(move){
    move = move.toLowerCase();
    if(move === 'rock'){
        return `✊`;
    }else if(move === 'paper'){
        return `🤚`;
    }else if(move === 'scissor'){
        return `✌️`;
    }
}

function playGame(playerMove){
    const computerMove = pickcomputermove();
    let result = '';

    if(playerMove === 'Scissor')
    {
        if (computerMove === 'Rock'){
        result = 'You Lose';
        }else if(computerMove === 'Paper'){
            result = 'You Win'
        }else{
            result = 'Tie.'
        }
    }

    else if(playerMove === 'paper')
    {
        if (computerMove === 'Rock'){
            result = 'You Win';
        }else if(computerMove === 'Paper'){
            result = 'Tie'
        }else{
            result = 'You Lose'
        }
    }
    
    else if (playerMove === 'Rock')
    {
        if (computerMove === 'Rock'){
            result = 'Tie';
        }else if(computerMove === 'Paper'){
            result = 'You Lose'
        }else{
            result = 'You Win'
        }
    }

    console.log(moveToText(playerMove))


    if(result === 'You Win'){
        score.wins += 1;
    }else if(result === 'You Lose'){
        score.losses += 1;
    }else{
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElements();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = (`You  ${moveToText(playerMove)} ${moveToText(computerMove)} computer`);
}


function updateScoreElements() {
    document.querySelector('.js-score')
    .innerHTML = `score: wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

    
function resetScore(){

        score.losses = 0;
        score.wins = 0;
        score.ties = 0;

        localStorage.removeItem('score');
        updateScoreElements();
}
