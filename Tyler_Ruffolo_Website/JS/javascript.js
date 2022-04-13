var clicks = 1;
var clickers = 1;

var fun1 = 0;
var fun2 = 0;
var fun3 = 0;
var fun4 = 0;
var fun5 = 0;


function myFunction() {
//night

//var orientation = '180deg';
    var topcolor = '#2b1055';
    var bottomcolor = '#7597de';
    var domStar = document.getElementById("star");
    var domMoon = document.getElementById("moon");
    var dom = document.getElementById("bodycolors");


    dom.style.background = 'linear-gradient(' + topcolor + ',' + bottomcolor + ')';
    domMoon.style.opacity = '100%';
    domStar.style.opacity = '100%';


}


function myFunction2() {
//day
//var orientation = '180deg';
    var topcolor = '#79add6';
    var bottomcolor = "white";
    var dom = document.getElementById("bodycolors");
    var domStar = document.getElementById("star");
    var domMoon = document.getElementById("moon");

    dom.style.background = 'linear-gradient(' + topcolor + ',' + bottomcolor + ')';
    domMoon.style.opacity = '15%';
    domStar.style.opacity = '25%';



    //domMoon.style.animation = 'day 2s forwards';  //work in progress
}



function myFunction3(){
    //day
    var topcolorDay = '#79add6';
    var bottomcolorDay = "white";
    //night
    var topcolorNight = '#2b1055';
    var bottomcolorNight = '#7597de';
    //noon
    var topcolorNoon = '#5975a6';
    var bottomcolorNoon = "white";

    //afternoon
    var topcolorAfterNoon = '#434869';
    var bottomcolorAfterNoon = "white";
    
    var domStar = document.getElementById("star");
    var domMoon = document.getElementById("moon");
    var dom = document.getElementById("bodycolors");

    //var currentTime = new Date().getHours();
    var d = new Date();
    var currentTime = d.getHours();
    // console.log(currentTime);

    if (currentTime >= 7 && currentTime < 12) { //day
        dom.style.background = 'linear-gradient(' + topcolorDay + ',' + bottomcolorDay + ')';
        // console.log("day");
        domMoon.style.opacity = '15%';
        domStar.style.opacity = '25%';
    }
    else if (currentTime >= 12 && currentTime < 15) { //noon
        dom.style.background = 'linear-gradient(' + topcolorNoon + ',' + bottomcolorNoon + ')';
        // console.log("noon");
        domMoon.style.opacity = '0%';
        domStar.style.opacity = '0%';

    }
    else if (currentTime >= 15 && currentTime < 20) { //afternoon
        dom.style.background = 'linear-gradient(' + topcolorAfterNoon + ',' + bottomcolorAfterNoon + ')';
        // console.log("afternoon");
        domMoon.style.opacity = '40%';
        domStar.style.opacity = '40%';
    }
    else{ //night
        dom.style.background = 'linear-gradient(' + topcolorNight + ',' + bottomcolorNight + ')';
        // console.log("night");
        domMoon.style.opacity = '100%';
        domStar.style.opacity = '100%';
    }
}

function myFunction4() {
    //noon
    //var orientation = '180deg';
    var topcolorNoon = '#5975a6';
    var bottomcolorNoon = "white";
        var dom = document.getElementById("bodycolors");
        var domStar = document.getElementById("star");
        var domMoon = document.getElementById("moon");
    

    dom.style.background = 'linear-gradient(' + topcolorNoon + ',' + bottomcolorNoon + ')';
    domMoon.style.opacity = '0%';
    domStar.style.opacity = '0%';

    }

function myFunction5() {
    //afternoon
    //var orientation = '180deg';
    var topcolorAfterNoon = '#434869';
    var bottomcolorAfterNoon = "white";
        var dom = document.getElementById("bodycolors");
        var domStar = document.getElementById("star");
        var domMoon = document.getElementById("moon");
        

    dom.style.background = 'linear-gradient(' + topcolorAfterNoon + ',' + bottomcolorAfterNoon + ')';
    domMoon.style.opacity = '40%';
    domStar.style.opacity = '40%';

}