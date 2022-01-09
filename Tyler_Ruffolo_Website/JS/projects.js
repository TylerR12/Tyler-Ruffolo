
function optionOne(){

    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");


    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    console.log("open 1");

}

function optionTwo(){
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");


    two.style.display = "block";
    one.style.display = "none";
    three.style.display = "none";
    console.log("open 2");


}


function optionThree(){
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");

    two.style.display = "none";
    three.style.display = "block";
    one.style.display = "none";
    console.log("open 2");


}