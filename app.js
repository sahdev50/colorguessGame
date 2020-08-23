var numSquares = 6;
var colors = randomColorArray(numSquares);

var h1 = document.querySelector("h1");
var sqruares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("div span");

var resetButton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

for(var i = 0; i < modebuttons.length; i++)
{
    modebuttons[i].addEventListener("click", function()
    {
        modebuttons[0].classList.remove("selected");
        modebuttons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset(){

    colors = randomColorArray(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New-Colors";

    for(var i = 0;i < sqruares.length;i++)
    {
        if(colors[i])
        {
            sqruares[i].style.display = "block";
            sqruares[i].style.backgroundColor = colors[i]; 
        }
        else{
            sqruares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";

}

resetButton.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0;i < sqruares.length; i++)
{
    sqruares[i].style.backgroundColor = colors[i];
    sqruares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Right one!!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play-again";
        }
        else{
            messageDisplay.textContent = "try again";
            this.style.backgroundColor = "#333";
        }
    });
}

function changeColor(color){

    for(var i = 0;i < sqruares.length;i++)
    {
        sqruares[i].style.backgroundColor = color;
    }
}

function pickColor(){

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function randomColorArray(num){
    var arr = [];

    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }

    return arr;

}

function randomColor(){

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

