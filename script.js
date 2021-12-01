
function htimer(duration, display){
    let timer = duration, minutes, seconds;

    setInterval(function(){

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `Cupom de desconto em: ` + minutes + ":" + seconds;

        if(--timer < 0){
            timer = duration;
            alert("Cupom de Desconto #DEV FRONTEND");
        }

    }, 1000);
    
}


window.onload = (function(){
    let duration = 60*5;//Segundos
    var display = document.querySelector("#timer");
    
    htimer(duration, display);
})


function dark(){
    let body = document.getElementById("color-body");
    body.style.background="black";
    body.style.color="white";
    alert("O tema da página se tornara escuro");
}
function white(){
    let whiteBody = document.getElementById("color-body");
    whiteBody.style.background="white";
    whiteBody.style.color="black";
    alert("O tema da página se tornara claro");
}


let resultado=document.getElementById("result");
car = 0;

function addCart(){
    car++;
    resultado.innerHTML= `${car}`;

}