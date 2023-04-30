function selectA(){
    let screen = document.getElementById("idScreen");
    screen.classList.add("selectOn");
}

function clickbuttonA(){
    let screen = document.getElementById("idScreen");
    screen.classList.add("onButtonA");
}

function powerOn(){
    let screen = document.getElementById("idScreen");
    let on = document.getElementById("idpowerlight");
    screen.classList.add("onPower");
    on.classList.add("powershadow")
}