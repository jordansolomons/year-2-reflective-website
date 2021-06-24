// Sets variable //
var i=0,text;
// Sets text to be displayed // 
text="By Jordan Solomons for DECO18OO"

function typing() {
    if(i<text.length) { // Function loops through every letter // 
        document.getElementById("text").innerHTML += text.charAt(i); // Adds letters one by one to be displayed // 
        i++;
        setTimeout(typing,50); // Delays the function slightly to give desired effect // 
    }
}
typing() // Calls the function again // 

$(document).ready(function(){ 
    $(".button1").click(function(){ // Executes when button 1 is clicked // 
        $("#n2").css("display","none"); // Removes images tab from being displayed //
        $("#n3").css("display","none"); // Removes statistics tab from being displayed //
        $("#n4").css("display","none"); // Removes planets tab from being displayed //
        $("#n1").css("display","block"); // Makes fun facts the only tab being displayed //
    });
    
    $(".button2").click(function(){ // Executes when button 2 is clicked // 
        $("#n3").css("display","none");
        $("#n4").css("display","none");
        $("#n1").css("display","none");
        $("#n2").css("display","block");
    });
    
    $(".button3").click(function(){ // Executes when button 3 is clicked // 
        $("#n4").css("display","none");
        $("#n1").css("display","none");
        $("#n2").css("display","none");
        $("#n3").css("display","block");
    });
    
    $(".button4").click(function(){ // Executes when button 4 is clicked // 
        $("#n1").css("display","none");
        $("#n3").css("display","none");
        $("#n2").css("display","none");
        $("#n4").css("display","block");
    });
});