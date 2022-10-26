const player = document.getElementById("player");
const enemigo4 = document.getElementById("enemigo4");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");
const buttonPlayStop = document.getElementById("buttonPlayStop");
let check= 0;
let x=0,y=0;

let scoreintervalId
let score= 0; 
document.addEventListener("keypress",function(espace) {
    player.classList.add("playerJump");
})  


player.addEventListener('animationend',() => {
    player.classList.remove("playerJump");
});

function stopanimation()
{
    cactus.style.animationPlayState = 'paused'
    player.style.animationPlayState = 'paused'
    background.style.animationPlayState ='paused'
    enemigo4.style.animationPlayState = 'paused'

}
function stopscore()
{
    clearInterval(scoreintervalId)
    clearInterval(scoreintervalId)

}
function resumencore()
{
    scoreintervalId = setInterval(()=>
    {
        score++
        document.getElementById("score").innerText = score

    },1000)


}
function pausegame()
{
    stopscore();
    stopanimation();
    stopscore();
    
    
     
     
}
function resumengame()
{
    resumencore();
     cactus.style.animationPlayState = 'running'
     player.style.animationPlayState = 'running'
     background.style.animationPlayState ='running'
     enemigo4.style.animationPlayState ='running'
    //  resumencore();
     
}


buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")) {
        resumengame();
    } 
    else {
        
        pausegame();
    }
    buttonPlayStop.classList.toggle("play");
})

//---- score ---------------------------------------------------------------------------------------- 

scoreintervalId = setInterval(()=>
{
    score++
    document.getElementById("score").innerText = score

},1000)
//---- colisiones  ---------------------------------------------------------------------------------------- 
//  limtplayer = $player.getBoundingClientRect();
//  limtcactus = cactaus.getBoundingClientRect();
// console.log(limtcactus,limtplayer)

//-------------------------------------------------------------------------------------------------------
function MoveBall(e,player)
{
    const $player=document.querySelector(player)
    // console.log(e.keyCode);
    // console.log(e.key);
    limplayer = $player.getBoundingClientRect();
    //console.log(limplayer)
    // const move = (direction) => { };
    switch (e.keyCode) {
        case 37:
            //move("letf")
                  x--;
            
            break;
            case 38:
            //move("up")
            
                 y--;

                        break;
            case 39:
              x++;
                
            
            break;
            case 40:
            //move("down")
                 y++;

             break;
        
            default:   
            break;
    }
    $player.style.transform= `translate(${x*2}px,${y*2}px)`
} 
//keydown
//keyup 
//keyprest
function Movepantalla(e,player)
{
    
        
     let $player=document.getElementById('player')
    // $back=document.getElementById('background')
        
        
    //const play=document.getElementById('player')
    limplayer=$player.getBoundingClientRect();
    // limback=$back.getBoundingClientRect();
    // console.log(limback.x);
    console.log("player",parseInt(limplayer.x) );
    if (parseInt(limplayer.x)%2==0)
    {
        console.log("esto se esta moviendo");
        document.getElementById('html').scrollLeft += 1;
        limplayer.x += 1
        console.log("nuevo limite ",limplayer.x);
    }
}
document.addEventListener("keydown",e =>{
    
    MoveBall(e,".player")
    Movepantalla(e,"#player")
})
// --seguimiento de  camara -------------------------------------------------------------------------------------------------

