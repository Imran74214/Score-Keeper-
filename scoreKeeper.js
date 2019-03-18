var p1B = document.querySelector("#p1");
var p2B = document.getElementById("p2");
var p1Display= document.querySelector("#p1Display");
var p2Display= document.getElementById("p2Display");
var reset= document.querySelector("#reset");
var numInput=document.querySelector("input[type='number']");
var playingTo=document.querySelector("p span");


var p1Scr =0;
var p2Scr=0;
var winningScr;
var gameOver=false;

p1B.addEventListener("click", function(){
	if((!gameOver)&&(p1Scr<winningScr)){
		p1Scr++;
		if(p1Scr===winningScr){
			p1Display.classList.add("winner");
		
		console.log("Game Over!!!");
		 gameOver=true;
	}
	p1Display.textContent = p1Scr;
}


});

p2B.addEventListener("click", function(){
	if((!gameOver)&&(p2Scr<winningScr)){
	p2Scr++;
	if(p2Scr===winningScr){
			p2Display.classList.add("winner");
		
		console.log("Game Over!!!");
		 gameOver=true;
	}
	p2Display.textContent = p2Scr;
}


});

reset.addEventListener("click", function(){
	gameOver=false;
	p1Scr=0;
	p2Scr=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.textContent = p1Scr;
	p2Display.textContent = p2Scr;
	playingTo.textContent= 0;
	numInput.value = 0;
	winningScr=0;
	

});

numInput.addEventListener("change", function(){
	playingTo.textContent= this.value; // 'this' refers to 'numInput'
	winningScr=Number(this.value); //'this' refers to 'numInput'

})