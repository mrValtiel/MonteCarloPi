//wzor na pi wg. monte Carlo: 4*pktWkole/pktWkwadracie

var inside = 0;
var total = 0;

var insidePointsHTML = document.getElementById('pointsInCircle');
var totalPointsHTML = document.getElementById('totalPoints');
var piHTML = document.getElementById('approxPi');

function Rand()
{
    return (Math.random() * 2) - 1;
}

function CreateNewPoint()
{
    var x = Rand();
    var y = Rand();

    total++;
    MarkPoint(x, y);

    insidePointsHTML.innerHTML = inside;
    totalPointsHTML.innerHTML = total;
    piHTML.innerHTML = inside / total * 4;
}

var canvas = document.getElementById('mainCanvas');
var cda = canvas.getContext('2d');
// cda - Canvas Drawing Area

function DrawCoordinateSystem(){
    //draw OY axis
    cda.moveTo(300, 0);
    cda.lineTo(300, 600);

    //draw OX axis
    cda.moveTo(0, 300);
    cda.lineTo(600, 300);
    
    //draw all the lines
    cda.stroke();
    cda.save();
}

function DrawSquare()
{
    cda.rect(0, 0, 600, 600);
    cda.stroke();
}

function DrawCircle()
{
    cda.beginPath();
    cda.arc(300, 300, 300, 0, 2 * Math.PI);
    cda.stroke();
}

function MarkPoint(x, y)
{
    var posX = (x + 1) * 300;
    var posY = (y + 1) * 300;

    cda.beginPath();
    cda.arc(posX, posY, 3, 0, 2 * Math.PI);
    if( ( Math.sqrt((posX-300)*(posX-300) + (posY-300)*(posY-300)) < 300))
    {
        cda.fillStyle = '#ff0000';
        cda.fill();
        inside++;
    }
    else
    {
        cda.fillStyle = '#101010';
        cda.fill();
    }
}

var Start = document.getElementById('btnStart');
Start.addEventListener('click', function StartAlgorithm(event){
    var trialNum = document.getElementById('numOfTrials').value;
    for(var i = 0; i < trialNum; i++)
    {
        CreateNewPoint();
    }
}, false); 

window.addEventListener('load', DrawCoordinateSystem, false);
window.addEventListener('load', DrawSquare, false);
window.addEventListener('load', DrawCircle, false);