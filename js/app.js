//player initialization
const player = document.getElementById('player');

//enemy initialization
const enemy = document.getElementById('enemy');

//score initialization
let score = 0;

const scoreText = document.getElementById('score');

//jump
function jump(){
    //add jump animation to player
    player.classList.add('jump-animation');

    document.getElementById('player').classList.add('jump-animation');

    //remove jump animation after jump
    setTimeout(() => {
        player.classList.remove('jump-animation');
    }, 750);
}

const nombo = 50;
const nombo1 = 100;

//keypress event listener
document.addEventListener('keypress', function(e){

    //if player doesnt have jump animation class added
    if(!player.classList.contains('jump-animation')){
        //execute jump
        jump();
    }
});

//update every milisecond
setInterval(function(){
    score++;
    scoreText.innerText = score;

    let enemyPos = parseInt(window.getComputedStyle(enemy).getPropertyValue('right'));
    let playerPos = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));


    if(enemyPos > 500 && enemyPos < 700 && playerPos <= 10){
        console.log("hit!");
    }
});

//dynamic
//int
//string