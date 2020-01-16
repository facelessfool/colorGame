
var numFlag=6;
var colors=generateRandomColors(numFlag);

var squares=document.querySelectorAll(".square");
var pickedColor= picked();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");





easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numFlag=3;
	colors=generateRandomColors(numFlag);
	pickedColor=picked();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.background="none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numFlag=6;
	colors=generateRandomColors(numFlag);
	pickedColor=picked();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		
			squares[i].style.background=colors[i];
		
		
	}

});

resetButton.addEventListener("click",function(){
	// alert("button clicked");
	colors=generateRandomColors(numFlag);
	pickedColor=picked();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent=" ";
	this.textContent="New colors";

	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
})

h1.style.background="steelblue";


colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.background=colors[i];
	//add click listeners to squares

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor=this.style.background;
		console.log(clickedColor,pickedColor);

		if(clickedColor==pickedColor){
			for(var j=0;j<colors.length;j++){
				squares[j].style.background=pickedColor;

			}
			messageDisplay.textContent="WINNER!";
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
		}
		else{
			messageDisplay.textContent="try again ";
			this.style.background= "rgb(35,35,35)"
			

		}
	})	

}


function picked(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(num){

	var arr=[];
	for(var i=0;i<num;i++){
		//get random color and push into array
		arr.push(randomColor());

	}
	return arr;

}

function randomColor(){
//pick red/green/yellow from 0 to 255
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);

return "rgb("+r+", "+g+", "+b+")";
}